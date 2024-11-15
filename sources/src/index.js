function getJiraId(w) {
    try {
        return w.fields.filter(f => f.tooltip.indexOf("Issue type") != -1).map(f => f.value)[0];
    } catch (e) {
        console.log('Impossible de récupérer le Jira');
        console.log(w);
    }
}

function getGojiraId(w) {
    try {
        return w.fields.filter(f => f.tooltip.indexOf("GOJIRA KEY") != -1).map(f => f.value)[0];
    } catch (e) {
        console.log('Impossible de récupérer le Jira');
        console.log(w);
    }
}

function getProjectKey(w) {
    const keyFields = w.fields.filter(f => f.tooltip.indexOf("GOJIRA KEY") != -1);
    return keyFields.length ? keyFields[0].value.replace(/-.*/, "") : "";
}

const isGojiraTicket = (item) => {
    return item.type === 'card' && item.fields.some(field => field.tooltip.indexOf("GOJIRA KEY") > -1);
}

const isCard = (item) => {
    return item.type === 'card';
}

const getJiraCost = (item) => {
    const parseSafe = (f) => {
        try {
            const v = parseFloat(f.value)
            return isNaN(v) ? null : v
        } catch (e) {
            return null
        }
    }
    return item.fields
        .map(f => ({ key: getProjectKey(item), value: parseSafe(f) }))
        .filter(f => f.value);

}

export async function getCosts(items) {
    const widgets = (await miro.board.getSelection()).filter(w => w.type === "card" && w.fields);
    const jiras = [...new Set(widgets.map(w => getJiraId(w)).filter(id => id))];
    const gojiras = [...new Set(widgets.map(w => getGojiraId(w)).filter(id => id))];
    const costs = {};
    const unknowCosts = [];

    widgets.forEach(jira => {
        const jiraCosts = getJiraCost(jira);
        if (jiraCosts.length === 0) {
            unknowCosts.push(jira);
            return;
        }
        jiraCosts.forEach(c => {
            costs[c.key] = (costs[c.key] || 0) + c.value;
        });
    });

    return { jiras, costs, warn: unknowCosts.length ? `${unknowCosts.length} coûts inconnus` : '', unknowCosts, gojiras };

}

export async function listenSelection() {
    miro.board.ui.on('selection:update', async (event) => {
		const cards = event.items
            .filter(isCard)
		// Si un seul ticket selectionné, on ne fait rien
        if (cards.length <= 1) {
            return;
        }
        const { jiras, costs, warn } = await getCosts(event.items);
        const costSummary = Object.values(costs).length === 1 ? costs[Object.keys(costs)[0]] : JSON.stringify(costs).replace(/{|}|"/g, '').replaceAll(',', '<br/>');
        console.log(costSummary)
        console.log(warn)
        miro.board.notifications.showInfo('Coût total : ' + costSummary + '<br/>' + warn);
    });
}

export async function listenForRedirectGojira() {
    miro.board.ui.on('icon:click', async () => {
        const selection = (await miro.board.getSelection()).filter(isCard);
        selection
            .map(w => getGojiraId(w))
            .filter(key => key)
            .forEach(key => {
                const url = key.startsWith("EPL-") ? `https://gojira-out.enedis.fr/browse/${key}` : `https://gojira.enedis.fr/browse/${key}`;
                window.open(url, key);
            });

        if (selection.length === 0) {
            await miro.board.ui.openPanel({url: 'app.html'})
        }
    });
}

console.log('CHARGEMENT GOJIRA LINK.....................');
listenSelection();
listenForRedirectGojira();