import{n as m,u as c,c as g,d as _,a as r,r as s,o as l,b as f,w as y,e as i}from"./index.7bfa2aeb.js";import{s as d}from"./index.14b8c86b.js";const w=e=>{const t={"pagination[page]":1,"pagination[pageSize]":100};for(let n in e)t[n]=e[n];return g(t)},k=async e=>{let t=await m.get("category",c().jwt,w(e));return t?d.ser_aii(t,["course_categories","lessons"]):{}},h={many:k},x=_({__name:"NetAdminInit",setup(e){const t=c(),n={init:()=>new Promise(async o=>{const a=r().categories;a&&a.length>0||await n.category(),o(0)}),category:async()=>{const o=await h.many({});o&&o.data&&r().do_categories(o.data)}};return t.is_admin&&n.init(),(o,a)=>null}}),P=_({__name:"Home",setup(e){return c(),(t,n)=>{const o=s("router-view"),a=s("eos-auto-iogin-tookit"),u=s("eos-tookit-auth"),p=s("LayoutMain");return l(),f(p,null,{cont:y(()=>[i(o),i(a),i(u),i(x)]),_:1})}}});export{P as default};
