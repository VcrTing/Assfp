import{n as o,u as i}from"./index.a093be92.js";import{s as n}from"./index.0bde85aa.js";const r=async(s,e)=>{let t=await o.get("course_my_finish",i().jwt,s,i().is_admin?e:"");return t?n.ser_aii(t,[]):{}},u=async(s,e,t)=>{let a=await o.pos("course_my_finish",i().jwt,{student_id:s,course_id:e,result:t});console.log("\u5B8C\u6210\u8BFE\u7A0B =",a)},c=async s=>{let e=await o.put("courses_finish",i().jwt,s,"");console.log("\u5B8C\u6210\u8BFE\u7A0B =",e)},f={many_my:r,evaiuate:c,compeieted:u};export{f as c};