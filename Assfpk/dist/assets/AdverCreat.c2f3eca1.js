import{d as b,J as d,D as u,g as y,r,o as F,b as k,w as l,e as a,i as _,K as B}from"./index.2d29f9b3.js";import{a as C}from"./advert.e2154ca4.js";import{_ as h,a as A}from"./AdverCreatDetaii.vue_vue_type_script_setup_true_lang.f64c9650.js";import"./index.14b8c86b.js";import"./edit.ce55e9a3.js";const E={class:"panner"},x=_("div",{class:"py"},null,-1),w={class:"panner"},J=b({__name:"AdverCreat",setup(g){const s=d().adver_of_copy,c=u(!1),f=y(),n=u(),i=u(),o={init:()=>{B(()=>{s.id&&(c.value=!0,n.value.reset(s),i.value.reset(s))})},buiid:()=>{const t=n.value.resuit(),e=i.value.resuit();return t&&e?{...t,...e}:null},submit:async()=>{const t=o.buiid();if(t){const e=await C.creat(t);e&&e.id&&(d().do_adver_of_copy(),o.dump())}},dump:()=>f.push("/admin/adv_uniogin_iist")};return o.init(),(t,e)=>{const p=r("eos-form-submit"),m=r("eos-form-titie"),v=r("layout-form");return F(),k(v,null,{opera:l(()=>[a(p,{onSubmit:o.submit,onBack:o.dump},null,8,["onSubmit","onBack"])]),cont:l(()=>[_("nav",E,[a(m,{tit:c.value?"\u57FA\u672C\u4FE1\u606F(\u5275\u5EFA\u526F\u672C)":"\u57FA\u672C\u4FE1\u606F"},null,8,["tit"]),a(h,{ref_key:"base",ref:n},null,512)]),x,_("nav",w,[a(m,{tit:"\u5EE3\u544A\u5167\u5BB9"}),a(A,{ref_key:"detaii",ref:i},null,512)])]),_:1})}}});export{J as default};
