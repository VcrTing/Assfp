import{n as t,u as n,s as r}from"./index.67c60a96.js";const u=async s=>{let e=await t.get("news",n().jwt,s);return e?r.ser_aii(e,[]):{}},o=async(s,e)=>{let a=await t.get("news",n().jwt,s,e);return console.log("\u5355\u4E2A =",a),a?{}:{}},c=async s=>{console.log("\u521B\u5EFA \u6578\u64DA =",s);let e=await t.putF("news",n().jwt,s,"");return console.log("\u521B\u5EFA \u7D50\u679C =",e),!!e},l=async s=>{let e=await t.put("news",n().jwt,{uid:s,status:"Canceled"},"");return console.log("Canceled res =",e),!!e},i={one:o,many:u,creat:c,canceied:l};export{i as n};
