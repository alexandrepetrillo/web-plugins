
rtb.onReady(() => {

  function getJiraId(w) {
    try {
    return w.card.customFields.filter(f => f.tooltip.match(/\w{3}-\d+/)).map(f => f.value)[0]
    } catch (e) {
      console.log('impossible de récuperer le jira ')
      console.log(w)
    }
  }

  function getJiraCost(w) {
    try {
      return w.card.customFields.filter(f => f.iconUrl == "[SIX] Coût item backlog").map(f => f.value)[0]
    } catch (e) {
      return ''
    }
  }

  async function getCost() {
    var jiras = (await rtb.board.selection.get()).filter(w => w.type === "CARD").map(w => getJiraId(w)).filter(j => j)
  console.log(await rtb.board.selection.get())
    var unknowCosts = [];
    var cost = jiras.map( jira => {
      var jiraCost = getJiraCost(jira)
      console.log(jiraCost)
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
      bottomBar: {
        title: 'Sélectionner les ID JIRA',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {
         
          var all = await getCost()
          console.log(all)
          var {jiras, cost, warn, unknowCosts} = all
          prompt('JIRA sélectionnées', jiras.join(', '))
          console.log(jiras.join(', '))

          var withoutCost = []
          var sel = (await rtb.board.selection.get())
          console.log(sel)
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
      }
    }
  })
})
