import{n as p,u as r,s as m,c as g,d as _,a as i,r as s,o as l,b as y,w as d,e as c}from"./index.67c60a96.js";const f=n=>{const t={"pagination[page]":1,"pagination[pageSize]":100};for(let a in n)t[a]=n[a];return g(t)},w=async n=>{let t=await p.get("category",r().jwt,f(n));return t?m.ser_aii(t,["course_categories","lessons"]):{}},h={many:w},k=_({__name:"NetAdminInit",setup(n){const t=r(),a={init:()=>new Promise(async e=>{const o=i().categories;o&&o.length>0||await a.category(),e(0)}),category:async()=>{const e=await h.many({});e&&e.data&&i().do_categories(e.data)}};return t.is_admin&&a.init(),(e,o)=>null}}),v=_({__name:"Home",setup(n){return(t,a)=>{const e=s("router-view"),o=s("eos-tookit-auth"),u=s("LayoutMain");return l(),y(u,null,{cont:d(()=>[c(e),c(o),c(k)]),_:1})}}});export{v as default};