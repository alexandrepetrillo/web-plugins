
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
    if(x.data.filter(w => w.type === "CARD").length === 0 ){
      return
    }
    var {jiras, cost, warn, unknowCosts} = await getCost()
    rtb.showNotification('Coût total ' + cost + warn)
  });
  
  rtb.initialize({
    extensionPoints: {
      bottomBar: 
      [
        {
        title: 'Sélectionner les IDs des JIRAs sélectionnées',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {
         
          var all = await getCost()
          var {jiras, cost, warn, unknowCosts} = all
          prompt('JIRA sélectionnées', jiras.join(', '))
          console.log(jiras.join(', '))

          var withoutCost = []
          var sel = (await rtb.board.selection.get())
          sel.filter(w => w.type === "CARD").forEach(w => {
            var jira = getJiraId(w)
              if (jira) {
              var cost = getJiraCost(jira)
              if (!cost) {
                withoutCost.push(w.id)
              }
            }
          })
          
          await rtb.board.selection.selectWidgets(withoutCost)
        }
      },
      bottomBar: {
        title: 'Les doublons !',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {
          console.log("doublons")
        }
      }
    ]
    }
  })



})
