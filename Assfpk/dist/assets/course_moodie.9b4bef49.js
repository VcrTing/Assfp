import{u as r,n as a}from"./index.7bfa2aeb.js";import{s as u}from"./index.14b8c86b.js";const n=async s=>{const t=r();let e=await a.get(t.is_admin?"courses":"course_my",t.jwt,s,t.is_admin?"":t.pk);return e?u.ser_aii(e,["course_categories","lessons"]):{}},o=async s=>{let t=await a.get("courses",r().jwt,{},s+"");return t&&t.data?u.data(t):{}},c=async s=>{let t=await a.get("course_cate",r().jwt,s);return t?u.ser_aii(t,[]):{}},i=async s=>{let t=await a.pos("course_creat",r().jwt,s);if(console.log("\u8AB2\u7A0B\u5275\u5EFA\u7684\u7D50\u679C =",t),t&&t.status<399){const e=t.data;return e instanceof Array?e.length>0?e[0]:{}:e}return{}},l=async s=>{console.log("\u4FEE\u6539\u55AE\u5143\u7684 \u6578\u64DA =",{schedule:[s]});let t=await a.put("course_add_iesson",r().jwt,{schedule:[s]},"");if(t&&t.status<399){const e=t.data?t.data:[];if(e.length>0)return e[0]}return{}},_=async s=>{let t=await a.put("course_add_user",r().jwt,s,"");return!!(t&&t.status<399)},d=async s=>{let t=await a.put("course_inn_user",r().jwt,s,"");return!!(t&&t.status<399)},y={one:o,many:n,creat:i,category:c,add_user:_,inn_user:d,insert_iesson:l};export{y as c};
