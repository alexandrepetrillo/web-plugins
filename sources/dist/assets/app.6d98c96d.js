import"./style.a87c9e06.js";function m(t){try{return t.fields.filter(e=>e.tooltip.indexOf("Issue type")!=-1).map(e=>e.value)[0]}catch{console.log("Impossible de r\xE9cup\xE9rer le Jira"),console.log(t)}}async function f(){const t=(await miro.board.get({type:"connector"})).filter(e=>e.captions.filter(s=>s.content==="doublon").length>0);console.log(t),t.forEach(e=>miro.board.remove(e))}async function u(){const t=(await miro.board.get({type:"card"})).filter(o=>o.type==="card"),e=await miro.board.get({type:"connector"}),s=t.reduce((o,i)=>{const n=m(i);return n&&(o[n]=o[n]?[...o[n],i.id]:[i.id]),o},{});Object.keys(s).forEach(async o=>{if(s[o].length>1){const i=s[o].shift();s[o].forEach(async n=>{e.find(r=>{var l,c,a,d;return((l=r.start)==null?void 0:l.item)===i&&((c=r.end)==null?void 0:c.item)===n||((a=r.start)==null?void 0:a.item)===n&&((d=r.end)==null?void 0:d.item)===i})||await miro.board.createConnector({shape:"straight",start:{item:i},end:{item:n},style:{strokeColor:"#f24726",strokeWidth:8},captions:[{content:"doublon"}]})})}})}document.getElementById("identifierDoublons").onclick=u;document.getElementById("identifierDoublonsCancel").onclick=f;document.getElementById("rocket").onclick=()=>{document.getElementById("rocket").style.display="none",document.getElementById("rocket2").style.display="block"};const y=t=>t.type==="card",p=t=>t.type==="card"&&t.fields.some(e=>e.tooltip.indexOf("GOJIRA KEY")>-1);miro.board.ui.on("selection:update",async t=>{const e=t.items.filter(y);console.log(e);const s=e.map(i=>i.fields.filter(n=>n.tooltip.indexOf("Issue key")!=-1)[0].value),o=e.filter(p).map(i=>i.fields.filter(n=>n.tooltip.indexOf("GOJIRA KEY")!=-1)[0].value);console.log(s),document.getElementById("jiraIds").innerText="("+s.join("; ")+")",document.getElementById("gojiraIds").innerText="("+o.join("; ")+")"});
