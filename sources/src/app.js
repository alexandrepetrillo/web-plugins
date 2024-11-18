import './assets/style.css';

function getJiraId(w) {
    try {
        return w.fields.filter(f => f.tooltip.indexOf("Issue type") != -1).map(f => f.value)[0];
    } catch (e) {
        console.log('Impossible de récupérer le Jira');
        console.log(w);
    }
}

export async function identifierDoublonsCancel(){
    const allLines = (await miro.board.get({type: 'connector'}))
        .filter(l => l.captions.filter(c => c.content === 'doublon').length > 0);
    console.log(allLines);
    allLines.forEach(l => miro.board.remove(l))

}

export async function identifierDoublons(){
    const widgets = (await miro.board.get({ type: 'card' })).filter(w => w.type === 'card');
    const allLines = (await miro.board.get({ type: 'connector' }));
    const map = widgets.reduce((acc, w) => {
        const jiraId = getJiraId(w);
        if (jiraId) acc[jiraId] = acc[jiraId] ? [...acc[jiraId], w.id] : [w.id];
        return acc;
    }, {});
	
    Object.keys(map).forEach(async (jiraId) => {
        if (map[jiraId].length > 1) {
            const firstId = map[jiraId].shift();
            map[jiraId].forEach(async (otherWidgetId) => {
                const lineExists = allLines.find(w => (w.start?.item === firstId && w.end?.item === otherWidgetId) || (w.start?.item === otherWidgetId && w.end?.item === firstId));
                if (!lineExists) {
                    await miro.board.createConnector({
                        shape: 'straight',
                        start: {
                            item: firstId
                        },
                        end: {
                            item: otherWidgetId
                        },
                        style: { strokeColor: "#f24726", strokeWidth: 8 },
                        captions: [
                            {
                                content: 'doublon',
                            }
                        ]
                    });
                }
            });
        }
    });
}

document.getElementById("identifierDoublons").onclick = identifierDoublons;
document.getElementById("identifierDoublonsCancel").onclick = identifierDoublonsCancel;
document.getElementById("rocket").onclick = () => {
    document.getElementById("rocket").style.display = 'none';
    document.getElementById("rocket2").style.display = 'block';
};

const isCard = (item) => {
    return item.type === 'card';
}
const isGojiraTicket = (item) => {
    return item.type === 'card' && item.fields.some(field => field.tooltip.indexOf("GOJIRA KEY") > -1);
}
miro.board.ui.on('selection:update', async (event) => {
    const items = event.items
        .filter(isCard);
	console.log(items);
    const jiraIds = items
        .map(gojiraCard => gojiraCard.fields.filter(field => field.tooltip.indexOf("Issue key") != -1)[0].value);
    const gojiraIds = items
		.filter(isGojiraTicket)
        .map(gojiraCard => gojiraCard.fields.filter(field => field.tooltip.indexOf("GOJIRA KEY") != -1)[0].value);
	console.log(jiraIds);

	const jirakeys = 'key in ('+jiraIds.join(', ')+')'
	const gojirakeys = 'key in ('+gojiraIds.join(', ')+')'

    document.getElementById("jiraIds").innerText = jirakeys;
    document.getElementById("gojiraIds").innerText = gojirakeys;

    document.getElementById("jira-href").href = "https://sixenedis.atlassian.net/issues/?jql=" + encodeURIComponent(jirakeys);
    document.getElementById("gojira-href").href = "https://gojira.enedis.fr/issues/?jql=" + encodeURIComponent(gojirakeys);

});
