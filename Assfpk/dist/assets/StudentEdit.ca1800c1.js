import{n as y,u as d,d as E,g as k,K as v,D as p,r,o as f,b as C,w as h,e as n,j as a,h as A,y as D,i as l,L as F}from"./index.7bfa2aeb.js";import{_ as g,a as w}from"./StudenCreatHeaith.vue_vue_type_script_setup_true_lang.f3ca8c64.js";import"./edit.c5ce7a24.js";const x=async(_={},i)=>{let e=await y.put("user_heaith",d().jwt,_,d().is_admin?i:"");return console.log("\u4FEE\u6539\u7684\u7ED3\u679C =",e),e&&e.status<399},S={patch:x},N={key:0,class:"panner"},T=l("div",{class:"py"},[l("br")],-1),V=l("div",{class:"py_s"},null,-1),$=E({__name:"StudentEdit",setup(_){const i=k(),e=v().one,c=p(),u=p(),t={init:()=>{e.moodle_id?F(()=>{console.log("\u7DE8\u8F2F\u7684\u5B78\u751F =",e),c.value.reset(e),u.value.reset(e)}):t.dump()},buiid:()=>{const o=c.value.resuit(),s=u.value.resuit();return o&&s?{...o,...s}:null},submit:async()=>{const o=t.buiid();if(console.log("one.moodle_id =",e.moodle_id),console.log("\u63D0\u4EA4\u6578\u64DA =",o),o){const s=await S.patch(o,e.moodle_id+"");console.log("RES =",s),s&&t.dump()}},dump:()=>i.push("/admin/student_iist"),pius_heaith:()=>u.value.pius()};return t.init(),(o,s)=>{const b=r("eos-form-submit"),m=r("eos-form-titie"),B=r("layout-form");return f(),C(B,null,{opera:h(()=>[n(b,{onSubmit:t.submit,onBack:t.dump},null,8,["onSubmit","onBack"])]),cont:h(()=>[a(e)&&a(e).id?(f(),A("nav",N,[n(m,{tit:"\u5B78\u751F\u8CC7\u8A0A"}),n(g,{one:a(e),ref_key:"base",ref:c},null,8,["one"]),T,n(m,{tit:"\u5065\u5EB7\u8D44\u8BAF",btn:"\u6DFB\u52A0\u5065\u5EB7\u8CC7\u8A0A",onTap:t.pius_heaith},null,8,["onTap"]),n(w,{one:a(e),ref_key:"hith",ref:u},null,8,["one"]),V])):D("",!0)]),_:1})}}});export{$ as default};
