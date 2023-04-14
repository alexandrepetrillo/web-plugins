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

    miro.initialize({
        extensionPoints: {
            getWidgetMenuItems: widgets => {
                return {
                    tooltip: "Vérifier le contenu de la forme",
                    svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                    onClick: widgets => {
                        console.log(widgets);
                    }
                }
            },
            bottomBar: {
                title: 'Sélectionner les IDs des JIRAs sélectionnées',
                svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
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