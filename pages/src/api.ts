import {marketGet} from './market';

type Entry={id:number;requestId:string;input:string;address:string;submittedAt:number;status:string;symbol:string|null;verdict:string|null};
const storageKey='apeshit-ai.scan-history.v1';
function entries():Entry[]{
 const raw=localStorage.getItem(storageKey);
 if(!raw)return [];
 const data:unknown=JSON.parse(raw);
 if(!Array.isArray(data))throw Error('History storage is invalid.');
 return data.filter((row):row is Entry=>!!row&&typeof row==='object'&&Number.isSafeInteger(row.id)&&typeof row.requestId==='string'&&typeof row.input==='string'&&typeof row.address==='string'&&Number.isFinite(row.submittedAt)&&typeof row.status==='string'&&(row.symbol===null||typeof row.symbol==='string')&&(row.verdict===null||typeof row.verdict==='string')).sort((a,b)=>b.id-a.id);
}
function save(rows:Entry[]){localStorage.setItem(storageKey,JSON.stringify(rows));}
export async function apiFetch(input:string,init:RequestInit={}):Promise<Response>{
 const url=new URL(input,'https://apeshit.local');
 if(init.signal?.aborted)throw new DOMException('Request cancelled','AbortError');
 if(url.pathname==='/api/submissions'){
  try{
   const cursor=Number(url.searchParams.get('before')||0);
   if(!Number.isSafeInteger(cursor)||cursor<0)return Response.json({error:'Invalid history cursor.'},{status:400});
   const rows=entries().filter(row=>!cursor||row.id<cursor);
   return Response.json({entries:rows.slice(0,15),hasMore:rows.length>15});
  }catch{return Response.json({error:'Browser history is unavailable. Check this browser’s storage settings.'},{status:503});}
 }
 if(url.pathname!=='/api/market')return Response.json({error:'Unknown action.'},{status:404});
 if((init.method||'GET').toUpperCase()==='GET')return marketGet(new Request(url));
 try{
  const body=JSON.parse(String(init.body)) as {input?:unknown;requestId?:unknown};
  if(typeof body.input!=='string'||body.input.length>512||typeof body.requestId!=='string'||!/^[-a-f0-9]{36}$/i.test(body.requestId))return Response.json({error:'Invalid submission.'},{status:400});
  const value=body.input.trim();let address=value;
  if(value.includes('://')){const tokenUrl=new URL(value);if(!['pump.fun','www.pump.fun'].includes(tokenUrl.hostname))return Response.json({error:'Use a pump.fun URL or Solana CA.'},{status:400});address=tokenUrl.pathname.split('/').filter(Boolean).pop()||'';}
  if(!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address))return Response.json({error:'Invalid Solana contract address.'},{status:400});
  const requestId=body.requestId;let logError:string|undefined;
  try{const rows=entries();if(!rows.some(row=>row.requestId===requestId)){rows.unshift({id:Math.max(Date.now(),(rows[0]?.id||0)+1),requestId,input:value,address,submittedAt:Date.now(),status:'SCANNING',symbol:null,verdict:null});save(rows);}}catch{logError='Your scan could not be saved in this browser. Check storage permissions.';}
  url.searchParams.set('address',address);
  const response=await marketGet(new Request(url));
  const data=await response.json() as {token?:{symbol:string};verdict?:string;error?:string};
  if(!logError){try{save(entries().map(row=>row.requestId===requestId?{...row,status:response.ok?'COMPLETE':'ERROR',symbol:data.token?.symbol??null,verdict:data.verdict??null}:row));}catch{logError='Scan history was saved, but its status could not be updated.';}}
  return Response.json({...data,...(logError?{logError}:{})},{status:response.status});
 }catch{return Response.json({error:'Invalid submission. Please retry.'},{status:400});}
}
