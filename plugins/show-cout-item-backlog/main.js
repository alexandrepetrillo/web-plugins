var jiraToCpt = {};
var cptToJira = {};
var listenerAdded = false;
/*

}, t.prototype.sortWidgets = function(t, e) {

var map = {};
t.forEach(elem => {map[elem._box.widgetId] = elem.key});
console.log(JSON.stringify(map));

*/


rtb.onReady(() => {
  rtb.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Sticker to shapes',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {

          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
            }
          };
          xmlhttp.open('GET', 'https://docs.google.com/spreadsheets/d/1cQeYW0F-ryag2_9RraJGNB2wUete6FJ31JivIit5ueY/export?format=csv&id=1cQeYW0F-ryag2_9RraJGNB2wUete6FJ31JivIit5ueY&gid=1098716530');
          xmlhttp.send();

          var unknowJiras = [];
          var jiras = (await rtb.board.selection.get()).filter(w => w.type === "CARD").map(w => {
            var jira = widgetIdToJira[w.id]
            if (!jira) {
              unknowJiras.push(w.title);
              console.log('jira inconue ' + w.title)
            }
            return jira
          })
          .filter(x => x);

          var unknowCosts = [];
          var cost = jiras.map( jira => {
            if (jiraToCost[jira] == undefined || jiraToCost[jira] == '') {
              console.log('Cout indéfini ' + jira)
              unknowCosts.push(jira);
              return 0
            } else{
              return parseFloat(jiraToCost[jira])
            }
          })
          .reduce ((a,b)=>a+b, 0);

          var warn = '';
          if (unknowJiras.length>0 ) {
            warn += ' '+ unknowJiras.length + ' jira(s) inconnue(s)';
          }
          if (unknowCosts.length>0 ) {
            warn += ' '+ unknowCosts.length + ' coût(s) inconnu(s)';
          }
          
          rtb.showNotification('Total ' + cost + warn);

          //await rtb.board.widgets.deleteById(
          //  (await rtb.board.widgets.get({ type: 'SHAPE' })).filter(w => w.style.shapeType === 4 && w.width === 32).map(w => w.id)
          //)

          /*var widget_widgetIdToJira = (await rtb.board.widgets.get({type:'SHAPE'})).filter(w => w.text.indexOf('widgetIdToJira')===0)
          if (widget_widgetIdToJira.length === 0){
            alert('Widget avec les widget_widgetIdToJira introuvable. ex: widgetIdToJira={"3074457346549413209":"SIX-7604"}');
            return
          }
          eval(widget_widgetIdToJira[0].text)*/

          /*var widget_jiraToCout = (await rtb.board.widgets.get({type:'SHAPE'})).filter(w => w.text.indexOf('jiraToCout')===0)
          if (widget_jiraToCout.length === 0){
            alert('Widget avec les widget_jiraToCout introuvable. ex: widget_jiraToCout={"SIX-7604":"1.5"}');
            return
          }
          eval(widget_jiraToCout[0].text)
          */
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
          /*
                    createdWidgets.forEach((o, i) => {
                      var cpt = o.id
                      var jira = stickers[i].id
                      jiraToCpt[jira] = cpt
                      cptToJira[cpt] = jira
                    })
          */
          //if(!listenerAdded) {
          //  listenerAdded = true
          //  
          //  rtb.addListener('WIDGETS_TRANSFORMATION_UPDATED', async e => {
          //    e.data.forEach(async (w, i) => {
          //      
          //      if (w.type === 'JIRACARD') { //on a déplacer une jira, je déplace le compteur
          //        var jiras = await rtb.board.widgets.get({ id: w.id })
          //        if (jiras[0]) {
          //          var jira = jiras[0]
          //          var cptId = jiraToCpt[jira.id]
          //          if (cptId) {
          //            rtb.board.widgets.update([{ id: cptId, x: jira.bounds.left + jira.bounds.width, y: jira.bounds.top }])
          //          }
          //        }
          //      } else if (w.type === 'SHAPE') { //on a déplacer un compteur, je le repositionne sur sa jira
          //        var jiraId = cptToJira[w.id]
          //        var jiras = await rtb.board.widgets.get({ id: jiraId })
          //        if (jiras[0]) {
          //          var jira = jiras[0]
          //          rtb.board.widgets.update([{ id: w.id, x: jira.bounds.left + jira.bounds.width, y: jira.bounds.top }])
          //        }
          //      }
          //    })
          //  })
          //}

         // rtb.showNotification('done')
        }
      }
    }
  })
})
