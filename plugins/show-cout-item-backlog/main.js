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
          if (!window._JIRA) {
            console.log("La table de correspondance WIDGET_ID <=> JIRA_ID n'a pas été trouvée, veuillez faire un export CSV pour l'établir.");
          }
          var ids = (await rtb.board.selection.get()).filter(w => w.type==="CARD").map(w => window._JIRA[w.id]);
          rtb.showNotification(ids)

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

          rtb.showNotification('done')
        }
      }
    }
  })
})
