export function chunkText(text='',size=900,overlap=120){
  const clean=text.replace(/\s+/g,' ').trim(); const out=[]; let i=0;
  while(i<clean.length){out.push(clean.slice(i,i+size)); i+=size-overlap;}
  return out.filter(Boolean).map(t=>({text:t,tokens:Math.ceil(t.length/4),embedding:fakeEmbedding(t)}));
}
export function fakeEmbedding(t){const v=Array(32).fill(0); for(let i=0;i<t.length;i++) v[i%32]+=t.charCodeAt(i)%17; return v.map(x=>Number((x/100).toFixed(3)));}
