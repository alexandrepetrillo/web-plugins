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
          console.log(selectedWidgets)

          let groups = await rtb.board.groups.get()
          console.log(groups)

          // Show success message
          rtb.showNotification('done')
        }
      }
    }
  })
})
