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

          let stickers = selectedWidgets.filter(widget => widget.type === 'STICKER')

          await rtb.board.widgets.create(stickers.map(sticker => ({
            type: 'shape',
            text: '3',
            style: {
              backgroundColor: "transparent",
              backgroundOpacity: 1,
              bold: 0,
              borderColor: "#1a1a1a",
              borderOpacity: 1,
              borderStyle: 2,
              borderWidth: 2,
              fontFamily: 10,
              fontSize: 12,
              highlighting: "",
              italic: 0,
              shapeType: 4,
              strike: 0,
              textAlign: "c",
              textAlignVertical: "m",
              textColor: "#1a1a1a",
            },
            x: sticker.x + sticker.bounds.width,
            y: sticker.y,
            width: 30,
            height: 30,
          })))

          let groups = await rtb.board.groups.get()
          console.log(groups)

          // Show success message
          rtb.showNotification('done')
        }
      }
    }
  })
})
