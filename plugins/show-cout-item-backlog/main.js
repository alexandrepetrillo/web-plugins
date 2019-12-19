
rtb.onReady(() => {

  function getJiraId(w) {
    try {
    return w.card.customFields.filter(f => f.tooltip == "Issue type, Issue key").map(f => f.value)[0]
    } catch (e) {
      console.log('impossible de récuperer le jira ')
      console.log(w)
    }
  }

  function getJiraCost(w) {
    try {
      return w.card.customFields.filter(f => f.tooltip == "[SIX] Coût item backlog").map(f => f.value)[0]
    } catch (e) {
      return ''
    }
  }

  async function getCost() {
    var widgets = (await rtb.board.selection.get()).filter(w => w.type === "CARD")
    var jiras = widgets.map(w => getJiraId(w))
    var unknowCosts = [];
    var cost = widgets.map( jira => {
      var jiraCost = getJiraCost(jira)
      if (jiraCost == undefined || jiraCost == '') {
        unknowCosts.push(jira);
        return 0
      } else{
        return parseFloat(jiraCost)
      }
    })
    .reduce ((a,b)=>a+b, 0);
    
    var warn = '';
    if (unknowCosts.length>0 ) {
      warn += ', '+ unknowCosts.length + ' coût(s) inconnu(s)';
    }
    return {jiras, cost, warn, unknowCosts}
  }

  rtb.addListener('SELECTION_UPDATED', async (x) => {
    if(x.data.filter(w => w.type === "CARD").length <= 1){
      return
    }
    var {jiras, cost, warn, unknowCosts} = await getCost()
    rtb.showNotification('Coût total ' + cost + warn)
  });
  
  async function selectJiraWithoutCost() {
    var toSelect = []
    var sel = (await rtb.board.selection.get())
    sel.filter(w => w.type === "CARD").forEach(w => {
        var cost = getJiraCost(w)
        if (!cost) {
          toSelect.push(w.id)
        }
    })
    await rtb.board.selection.selectWidgets(toSelect)
  }  

  async function selectDoublons() {
    var sel = (await rtb.board.selection.get()).filter(w => w.type === "CARD")
    if (sel.length === 1) {
      var selectedId = getJiraId(sel[0])
      // recherche des doublons de la jira sélectionnée
      var toSelect = []
      var allWidgets = (await rtb.board.widgets.get()).filter(w => w.type === "CARD")
      allWidgets.forEach(w => {
        var jiraId = getJiraId(w)
        if (getJiraId(w) == selectedId) {
          toSelect.push(w.id)
        }
      })
      await rtb.board.selection.selectWidgets(toSelect)
    } else {
      var allWidgets = (await rtb.board.widgets.get()).filter(w => w.type === "CARD")
      var allIds = allWidgets.map(w => getJiraId(w))
      var toSelect = []
      var ensembleAFiltrer = sel.length === 0 ? allWidgets : sel
      ensembleAFiltrer.forEach(w => {
        var jiraId = getJiraId(w)
        if (allIds.filter(id => id === jiraId).length > 1) {
          // en doublons !
          toSelect.push(w.id)
        }
      })
      await rtb.board.selection.selectWidgets(toSelect)
    }
  }

  rtb.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Sélectionner les IDs des JIRAs sélectionnées',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {
         
          var {jiras, cost, warn, unknowCosts} = await getCost()
          var choix = prompt('JIRA sélectionnées. Tapez 1 pour sélectionner les jiras non estimés, 2 pour sélectionner les doublons', jiras.join(', '))
          console.log('JIRA sélectionnées : ' + jiras.join(', '))
          if (choix == '1') {
            console.log("choix selectJiraWithoutCost")
            await selectJiraWithoutCost()
          } else if (choix == '2') {
            console.log("choix selectDoublons")
            await selectDoublons()
          } else {
            console.log("choix inconnu")
          }
        }
      }
    }
  })


})
