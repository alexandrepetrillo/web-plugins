miro.onReady(() => {

    function getJiraId(w) {
        try {
            return w.card.customFields.filter(f => f.tooltip.indexOf("Issue type")!=-1).map(f => f.value)[0]
        } catch (e) {
            console.log('impossible de récuperer le jira ')
            console.log(w)
        }
    }

    function getJiraCost(w) {
        try {
            return w.card.customFields.filter(f => f.tooltip == "[SIX] Coût item backlog").map(f => f.value)[0]
                || w.card.customFields.filter(f => f.value.match(/^[0-9\.]*$/) && !isNaN(parseFloat(f.value)))[0].value;
        } catch (e) {
            try {
                return w.card.customFields.filter(f => !isNaN(parseFloat(f.value)))[0].value
            } catch (e) {
                return ''
            }
        }
    }

    function getPrio(w) {
        try {
            return w.card.customFields.filter(f => f.tooltip == "[SIX] Priorité backlog").map(f => f.value)[0]
        } catch (e) {
            return ''
        }
    }

    async function getCost() {
        var widgets = (await miro.board.selection.get()).filter(w => w.type === "CARD")
        var jiras = widgets.map(w => getJiraId(w)).filter(id => (id != null && id !='' && id != ' '))
        var unknowCosts = [];
        var cost = widgets.map(jira => {
            var jiraCost = getJiraCost(jira)
            if (jiraCost == undefined || jiraCost == '') {
                unknowCosts.push(jira);
                return 0
            } else {
                return parseFloat(jiraCost)
            }
        })
            .reduce((a, b) => a + b, 0);

        var warn = '';
        if (unknowCosts.length > 0) {
            warn += ', ' + unknowCosts.length + ' coût(s) inconnu(s)';
        }
        return {jiras, cost, warn, unknowCosts}
    }

    miro.addListener('SELECTION_UPDATED', async (x) => {
        if (x.data.filter(w => w.type === "CARD").length <= 1) {
			return		
        } else {
			var {jiras, cost, warn, unknowCosts} = await getCost()
			miro.showNotification('Coût total ' + cost + warn)
		}
    });
	
	/*
    miro.addListener('WIDGETS_TRANSFORMATION_UPDATED', async (x) => {
		console.log(x);
		if (x.data.length === 1 && x.data[0].type !== 'CARD') {
			console.log('test')
			var shape = (await miro.board.widgets.get({id: x.data[0].id}))[0]
			var widgetsOverlays = (await miro.board.widgets.get({type: 'CARD'}))
				.filter(w => {
					var pointLT = {x: shape.bounds.left, y: shape.bounds.top}
					var pointLB = {x: shape.bounds.left, y: shape.bounds.bottom}
					var pointRT = {x: shape.bounds.right, y: shape.bounds.top}
					var pointRB = {x: shape.bounds.right, y: shape.bounds.bottom}
					
					return pointIncluded(pointLT, w.bounds) 
								||  pointIncluded(pointLB, w.bounds) 
								||  pointIncluded(pointRT, w.bounds) 
								||  pointIncluded(pointRB, w.bounds) 
				})
			console.log(widgetsOverlays)
			if (widgetsOverlays.length === 1) {
				console.log(widgetsOverlays)
				var existing = (widgetsOverlays[0].metadata['link'] || [])
				if (existing.indexOf(shape.id) === -1) existing.push(shape.id);
				widgetsOverlays[0].metadata['link']= existing		
				shape.metadata['link'] = [widgetsOverlays[0].id]
				await (miro.board.widgets.update([ 
						widgetsOverlays[0], shape
					]))
			}
		}			
    });
	*/
	
	function pointIncluded(point, bounds) {
		return point.x >= bounds.left 
				&& point.x <= bounds.right
				&& point.y >= bounds.top 
				&& point.y <= bounds.bottom
	}

    async function selectJiraWithoutCost() {
        var toSelect = []
        var sel = (await miro.board.selection.get())
        sel.filter(w => w.type === "CARD").forEach(w => {
            var cost = getJiraCost(w)
            if (!cost) {
                toSelect.push(w.id)
            }
        })
        await miro.board.selection.selectWidgets(toSelect)
    }

    async function selectDoublons() {
        var allWidgets = (await miro.board.widgets.get()).filter(w => w.type === "CARD")
        var allLines = (await miro.board.widgets.get()).filter(w => w.type === "LINE")

        var map = {}
        allWidgets.forEach(w => {
            var jiraId = getJiraId(w)
            var list = map[jiraId] || []
            list.push(w.id)
            map[jiraId] = list
        })
        Object.keys(map)
            .filter(key => map[key].length < 2)
            .forEach(key => delete map[key])

        await Object.keys(map).forEach(jiraId => {
            var widgetIds = map[jiraId]
            var firstId = widgetIds.shift()
            widgetIds.forEach(async otherWidgetId => {
                var lineAlreadyExists = allLines.find(w =>
                    (w.startWidgetId === firstId && w.endWidgetId === otherWidgetId)
                    || (w.startWidgetId === otherWidgetId && w.endWidgetId === firstId)
                )
                if (lineAlreadyExists == null) {
                    await miro.board.widgets.create({
                        type: 'line',
                        startWidgetId: firstId,
                        endWidgetId: otherWidgetId,
                        style: {
                            lineColor: "#f24726",
                            lineThickness: 8
                        }
                    })
                }
            })
        })
    }

    async function selectP0(resetRotation) {
        var sel = (await miro.board.selection.get()).filter(w => w.type === "CARD")
        if (sel.length === 0)
            sel = (await miro.board.widgets.get())

        var toSelect
        if (resetRotation) {
            toSelect = sel.filter(w => w.rotation === 20)
            toSelect.forEach(w => w.rotation = 0)
        } else {
            toSelect = sel.filter(w => w.getPrio(w) === "P0")
            toSelect.forEach(w => w.rotation = 20)
        }
        miro.board.widgets.update(toSelect)
        await miro.board.selection.selectWidgets(toSelect)
    }

    console.log("initialize...")
    miro.initialize({
        extensionPoints: {
            toolbar: {
                title: 'GOJIRA',
                toolbarSvgIcon: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n' +
                    ' width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000"\n' +
                    ' preserveAspectRatio="xMidYMid meet">\n' +
                    '\n' +
                    '<g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"\n' +
                    'fill="#000000" stroke="none">\n' +
                    '<path d="M7 314 c-4 -4 -7 -36 -7 -71 l0 -63 106 0 105 0 -3 28 c-3 24 -7 27\n' +
                    '-46 30 -37 3 -44 0 -49 -17 -7 -27 -53 -30 -53 -3 0 43 24 57 100 57 81 0 100\n' +
                    '-13 100 -70 0 -51 -18 -66 -88 -72 -51 -5 -62 -9 -60 -22 3 -13 21 -16 106\n' +
                    '-19 l103 -3 -3 113 -3 113 -151 3 c-82 1 -153 -1 -157 -4z"/>\n' +
                    '<path d="M2 68 l3 -63 155 0 c139 0 155 2 158 17 3 16 -6 18 -83 18 -105 0\n' +
                    '-151 17 -166 60 -9 24 -17 30 -40 30 l-30 0 3 -62z"/>\n' +
                    '</g>\n' +
                    '</svg>',
                librarySvgIcon: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n' +
                    ' width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000"\n' +
                    ' preserveAspectRatio="xMidYMid meet">\n' +
                    '\n' +
                    '<g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"\n' +
                    'fill="#000000" stroke="none">\n' +
                    '<path d="M7 314 c-4 -4 -7 -36 -7 -71 l0 -63 106 0 105 0 -3 28 c-3 24 -7 27\n' +
                    '-46 30 -37 3 -44 0 -49 -17 -7 -27 -53 -30 -53 -3 0 43 24 57 100 57 81 0 100\n' +
                    '-13 100 -70 0 -51 -18 -66 -88 -72 -51 -5 -62 -9 -60 -22 3 -13 21 -16 106\n' +
                    '-19 l103 -3 -3 113 -3 113 -151 3 c-82 1 -153 -1 -157 -4z"/>\n' +
                    '<path d="M2 68 l3 -63 155 0 c139 0 155 2 158 17 3 16 -6 18 -83 18 -105 0\n' +
                    '-151 17 -166 60 -9 24 -17 30 -40 30 l-30 0 3 -62z"/>\n' +
                    '</g>\n' +
                    '</svg>',
                onClick: async () => {
                    (await miro.board.selection.get()).map(w => w.card?.customFields.filter(f => f.tooltip == "[SIX] GOJIRA KEY").map(f => f.value)[0])
						.filter(key => key)
                        .forEach(key => { 
							if (key.startsWith("EPL-"))
								window.open("https://gojira-out.enedis.fr/browse/" + key, key);
							else
								window.open("https://gojira.enedis.fr/browse/" + key, key);
                        })
                }
            },
            bottomBar: {
                title: 'Sélectionner les IDs des JIRAs sélectionnées',
                svgIcon: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n' +
                    ' width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"\n' +
                    ' preserveAspectRatio="xMidYMid meet">\n' +
                    '\n' +
                    '<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"\n' +
                    'fill="#000000" stroke="none">\n' +
                    '<path d="M40 115 l-34 -35 37 -38 37 -37 37 37 37 38 -34 35 c-19 19 -37 35\n' +
                    '-40 35 -3 0 -21 -16 -40 -35z m56 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33\n' +
                    '11 33 5 0 12 -5 16 -11z"/>\n' +
                    '</g>\n' +
                    '</svg>',
                positionPriority: 1,
                onClick: async () => {

                    var {jiras, cost, warn, unknowCosts} = await getCost()
                    var choix = prompt('JIRA sélectionnées. ' +
                        'Tapez 1 pour sélectionner les jiras non estimés ,  ' +
                        '2 pour identifier les doublons , ' +
                        '3 pour sélectionner les P0 , ' +
                        '4 pour sélectionner les JIRA mal rangées', jiras.join(', '))
                    console.log('JIRA sélectionnées : ' + jiras.join(', '))
                    if (choix == '1') {
                        console.log("choix selectJiraWithoutCost")
                        await selectJiraWithoutCost()
                    } else if (choix == '2') {
                        console.log("choix selectDoublons")
                        await selectDoublons()
                    } else if (choix == '3' || choix == '3z') {
                        console.log("choix P0")
                        await selectP0(choix == '3z')
                    } else if (choix == '4' || choix == '3z') {
                        await selectUnstorageCards()
                    } else {
                        console.log("choix inconnu")
                    }
                }
            }
        }
    })


})

async function selectUnstorageCards() {
    let jalonMetiers = [
        '01 BetaTest - BO',
        '10 Pilote AI',
        '11 Post Pilote AI',
        '20 Début Géné',
        '30 En cours de Géné',
        '40 Post Géné',
        'AIS01 Pilote PS',
        'AIS02 Post Pilote PS',
        'AIS03 Pilote ACM&Telecom',
        'AIS04 Post Pilote ACM&Telecom',
        'AIS05 Généralisation',
        'AIS06 Prog Chantier PS',
        'IHMPrepa01 - Pilote',
        'IHMPrepa02 - Généralisation',
    ];
    let jalonDemonstrateurs = [
        'T1-2019',
        'T2-2019',
        'T3-2019',
        'T4-2019',

        'T1-2020',
        'T2-2020',
        'T3-2020',
        'T4-2020',

        'T1-2021',
        'T2-2021',
        'T3-2021',
        'T4-2021',

        'T1-2022',
        'T2-2022',
        'T3-2022',
        'T4-2022',
    ];
    let shapes = await miro.board.widgets.get({type: 'SHAPE'});
    let cards = await miro.board.widgets.get({type: 'CARD'});
    let errors = [];
    cards.forEach(async c => {
        shapes.forEach(async s => {
            if (
                c.bounds.left >= s.bounds.left && c.bounds.right <= s.bounds.right
                && c.bounds.top >= s.bounds.top && c.bounds.bottom <= s.bounds.bottom
            ) {
                let cardFields = c.card.customFields.map(cf => cf.value).filter(v => v != null);
                let shapeFields = s.plainText.split(' / ');
                for (let shapefield of shapeFields) {
                    console.log(shapefield);
                    if (jalonMetiers.indexOf(shapefield) !== -1 || jalonDemonstrateurs.indexOf(shapefield) !== -1) {
                        if (cardFields.indexOf(shapefield) === -1) {
                            console.log(`${c.id} not match in ${shapefield}`);
                            await miro.board.widgets.bringForward(c.id);
                            errors.push(c.id);
                        }
                    }
                }
            }
        });
    });
    await miro.board.widgets.bringForward(errors)
    await miro.board.selection.selectWidgets(errors)
}

/*

miro.onReady(() => {
  miro.addListener('SELECTION_UPDATED', async (event) => {
    if (event.data.length > 0) {
      const btn = miro.board.ui.createButton({
        extensionPoint: 'BOTTOM_BAR',
        label: 'Mon Bouton',
        onClick: async () => {
          console.log('click')
        }
      });
      await btn.show();
    } else {
      const btn = await miro.board.ui.getButtons();
      if (btn.length > 0) {
        await btn[0].hide();
      }
    }
  });
});*/

