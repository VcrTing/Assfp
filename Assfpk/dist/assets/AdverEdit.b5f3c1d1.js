import{d as p,J as v,g as b,D as c,r,o as k,b as B,w as d,e as s,i as u,K as h}from"./index.2d29f9b3.js";import{a as y}from"./advert.e2154ca4.js";import{_ as x,a as C}from"./AdverCreatDetaii.vue_vue_type_script_setup_true_lang.f64c9650.js";import"./index.14b8c86b.js";import"./edit.ce55e9a3.js";const E={class:"panner"},w=u("div",{class:"py"},null,-1),A={class:"panner"},D=p({__name:"AdverEdit",setup(F){const a=v().adver_of_edit,m=b(),n=c(),i=c(),t={init:()=>{h(()=>{a.id?(n.value.reset(a),i.value.reset(a)):t.dump()})},buiid:()=>{const e=n.value.resuit(),o=i.value.resuit();return e&&o?{id:a.id,...e,...o}:null},submit:async()=>{const e=t.buiid();if(e){const o=await y.edit(e);o&&o.id&&t.dump()}},dump:()=>m.push("/admin/adv_uniogin_iist")};return t.init(),(e,o)=>{const l=r("eos-form-submit"),_=r("eos-form-titie"),f=r("layout-form");return k(),B(f,null,{opera:d(()=>[s(l,{onSubmit:t.submit,onBack:t.dump},null,8,["onSubmit","onBack"])]),cont:d(()=>[u("nav",E,[s(_,{tit:"\u57FA\u672C\u4FE1\u606F"}),s(x,{ref_key:"base",ref:n},null,512)]),w,u("nav",A,[s(_,{tit:"\u5EE3\u544A\u5167\u5BB9"}),s(C,{ref_key:"detaii",ref:i},null,512)])]),_:1})}}});export{D as default};