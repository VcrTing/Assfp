import{n as a,u as e}from"./index.67c60a96.js";const n=async s=>{const t=await a.get("users",e().jwt,s);return t?{data:t.results,page:t.pagination}:{}},o=async s=>{try{const t=await a.put("admin_register",e().jwt,s,"");if(console.log("CREAT RES =",t),t&&t.status<399){const r=t.data;if(r&&r.length>0)return r[0]}}catch(t){console.error(t)}return 0},c=async(s,t)=>{let r={};try{return r=await a.put("user_edit",e().jwt,s,t),console.log("EDIT RES =",r),r&&r.status<399}catch{}return!1},l={edit:c,many:n,admin_creat:o};export{l as u};