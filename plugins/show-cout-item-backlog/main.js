var jiraToCpt = {};
var cptToJira = {};

rtb.onReady(() => {
  rtb.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Sticker to shapes',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {

          // Get selected widgets
          let selectedWidgets = await rtb.board.selection.get()
          let stickers = selectedWidgets.filter(widget => widget.type === 'JIRACARD')

          var createdWidgets = await rtb.board.widgets.create(stickers.map(sticker => ({
            createdUserId: sticker.id,
            type: 'shape',
            style: {
              shapeType: 4
            },
            text: '3',
            x: sticker.bounds.left + sticker.bounds.width,
            y: sticker.bounds.top,
            width: 30,
            height: 30,
          })))

          createdWidgets.forEach((o, i) => {
            var cpt = o.id
            var jira = stickers[i].id
            jiraToCpt[jira] = cpt
            cptToJira[cpt] = jira
          })

          rtb.addListener('WIDGETS_TRANSFORMATION_UPDATED', async e => {
            e.data.forEach(async (w, i) => {
              if (w.type === 'JIRACARD') { //on a déplacer une jira, je déplace le compteur
                var jiras = await rtb.board.widgets.get({ id: w.id })
                if (jiras[0]) {
                  var jira = jiras[0]
                  var cptId = jiraToCpt[jira.id]
                  if (cptId) {
                    rtb.board.widgets.update([{ id: cptId, x: jira.bounds.left + jira.bounds.width, y: jira.bounds.top }])
                  }
                }
              } else if (w.type === 'SHAPE') { //on a déplacer un compteur, je le repositionne sur sa jira
                var jiraId = cptToJira[w.id]
                var jiras = await rtb.board.widgets.get({ id: jiraId })
                if (jiras[0]) {
                  var jira = jiras[0]
                  rtb.board.widgets.update([{ id: w.id, x: jira.bounds.left + jira.bounds.width, y: jira.bounds.top }])
                }
              }
            })
          })

          // Show success message
          rtb.showNotification('done')
        }
      }
    }
  })
})
