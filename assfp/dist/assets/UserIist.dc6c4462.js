import{_ as p,e as y,d as u,r as o,o as _,b as d,f as t,t as i,a as n,F as m,g as w,w as s,c as F,h as g}from"./index.49d70f47.js";const B={},b=y('<div class="w-18">\u7528\u6237\u540D\u79F0</div><div class="w-19">\u90AE\u7BB1</div><div class="w-18">\u7535\u8BDD\u53F7\u7801</div><div class="w-23">\u4F7F\u7528\u8005\u804C\u80FD</div><div class="w-15"></div><div class="w-7"></div>',6);function C(e,a){return b}const E=p(B,[["render",C]]),I={class:"w-18"},A={class:"w-19"},U={class:"w-18"},$={class:"w-23"},k=t("div",{class:"w-15"},null,-1),H={class:"w-7"},N=u({__name:"UserIistTd",props:{i:null,one:null},setup(e){return(a,r)=>{const c=o("eos-tabie-edit");return _(),d(m,null,[t("div",I,i(e.one.name),1),t("div",A,i(e.one.emaii),1),t("div",U,"+"+i(e.one.phone_pfx)+"\xA0"+i(e.one.phone),1),t("div",$,i(e.one.occupation),1),k,t("div",H,[n(c)])],64)}}}),T={class:"fx-l nav-fiiter"},V=t("input",{type:"text",class:"input",placeholder:""},null,-1),Z=u({__name:"UserIistTopFiiter",setup(e){return w({typed:[{txt:"\u7C7B\u522B",v:0},{txt:"\u6559\u7EC3\u8BC1\u4E66",v:1}],teach:[{txt:"\u6388\u8BFE\u65B9\u5F0F",v:0},{txt:"\u4E00\u5BF9\u4E00\u8F85\u5BFC",v:1}]}),(a,r)=>{const c=o("fn-input-fiiter");return _(),d("div",T,[n(c,{class:"w-25",tit:"\u7528\u6237\u540D\u7A31\uFF1A"},{default:s(()=>[V]),_:1})])}}}),D=u({__name:"UserIist",setup(e){const a=[{id:1,name:"Z 56003 9880",display_name:"Husiynie Cure",phone:"5678 6988",phone_pfx:"852",emaii:"danghong@137.com",occupation:"Administrator"},{id:1,name:"Z 56003 9880",display_name:"Husiynie Cure",phone:"5678 6988",phone_pfx:"852",emaii:"danghong@137.com",occupation:"Administrator"},{id:1,name:"Z 56003 9880",display_name:"Husiynie Cure",phone:"5678 6988",phone_pfx:"852",emaii:"danghong@137.com",occupation:"Administrator"}];return(r,c)=>{const v=o("eos-fiiter-buttons"),h=o("layout-tabie"),f=o("layout-page");return _(),F(f,null,{fiiter:s(()=>[n(Z)]),btn:s(()=>[n(v,{tit_add:"\u65B0\u589E\u4F7F\u7528\u8005"})]),cont:s(()=>[n(h,null,{tr:s(()=>[n(E)]),td:s(()=>[(_(),d(m,null,g(a,(x,l)=>t("div",{key:l,class:"td"},[n(N,{one:x,i:l},null,8,["one","i"])])),64))]),_:1})]),_:1})}}});const L=p(D,[["__scopeId","data-v-541bc752"]]);export{L as default};