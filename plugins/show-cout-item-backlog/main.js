
rtb.onReady(() => {

  function getJiraId(w) {
    try {
    return w.card.customFields.filter(f => f.value.match(/\w{3}-\d+/)).map(f => f.value)[0]
    } catch (e) {
      console.log('impossible de récuperer le jira ')
      console.log(w)
    }
  }

  async function getCost() {
    var jiras = (await rtb.board.selection.get()).filter(w => w.type === "CARD").map(w => getJiraId(w)).filter(j => j)
  
    var unknowCosts = [];
    var cost = jiras.map( jira => {
      if (jiraCostById[jira] == undefined || jiraCostById[jira] == '') {
        unknowCosts.push(jira);
        return 0
      } else{
        return parseFloat(jiraCostById[jira])
      }
    })
    .reduce ((a,b)=>a+b, 0);
    
  
   var unknowCosts = [];
   var cost = jiras.map( jira => {
     if (jiraCostById[jira] == undefined || jiraCostById[jira] == '') {
       unknowCosts.push(jira);
       return 0
     } else{
       return parseFloat(jiraCostById[jira])
     }
   })
   .reduce ((a,b)=>a+b, 0);
  
    var warn = '';
    if (unknowCosts.length>0 ) {
      warn += ', '+ unknowCosts.length + ' coût(s) inconnu(s)';
    }
    return {jiras, cost, warn, unknowCosts, jiraCostById}
  }

  try {
  // chargement des cout jira
  var jiraCostById = {}
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var lines = this.responseText.split('\r\n')
      lines.forEach(line => {
        var elems = line.split("\t")
        jiraCostById[elems[0]] = elems[1]
      })
      console.log(jiraCostById)
    } else {
      console.log(this)
    }
  };
  xmlhttp.open('GET', 'https://docs.google.com/spreadsheets/d/1cQeYW0F-ryag2_9RraJGNB2wUete6FJ31JivIit5ueY/export?format=tsv&id=1cQeYW0F-ryag2_9RraJGNB2wUete6FJ31JivIit5ueY&gid=1098716530');
  xmlhttp.send()
  } catch (e) {
    console.log(e)
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
          var {jiras, cost, warn, unknowCosts, jiraCostById} = all
          prompt('JIRA sélectionnées', jiras.join(', '))

          var withoutCost = []
          var sel = (await rtb.board.selection.get())
          console.log(sel)
          sel.filter(w => w.type === "CARD").forEach(w => {
            var jira = getJiraId(w)
              if (jira) {
              var cost = jiraCostById[jira]
              if (!cost) {
                withoutCost.push(w.id)
              }
            }
          })
          
          await rtb.board.selection.selectWidgets(withoutCost)

          /*
           let selectedWidgets = await rtb.board.selection.get()
           let stickers = selectedWidgets.filter(widget => widget.type === 'JIRACARD')
          */
          /*
                    var createdWidgets = await rtb.board.widgets.create(
                      stickers
                      .filter(sticker => widgetIdToJira[sticker.id] && jiraToCout[widgetIdToJira[sticker.id]])
                      .map(sticker => ({
                        createdUserId: sticker.id,
                        type: 'shape',
                        style: {
                          shapeType: 4
                        },
                        text: jiraToCout[widgetIdToJira[sticker.id]],
                        x: sticker.bounds.left + sticker.bounds.width,
                        y: sticker.bounds.top,
                        width: 30,
                        height: 30,
                      }))
                    )
          */
        }
      }
    }
  })
})
