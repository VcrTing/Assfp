import{d,r as n,o as p,h as m,i as s,e as t,w as o,D as h,F as B,C as f,g as A,m as C,b as $,L as b}from"./index.7bfa2aeb.js";import{_ as w}from"./SciTd.vue_vue_type_script_setup_true_lang.c77c982d.js";import{_ as F,a as y}from"./StudenCreatHeaith.vue_vue_type_script_setup_true_lang.f3ca8c64.js";import"./edit.c5ce7a24.js";const x={class:"td-for-form"},D={class:"w-25"},E=s("input",{class:"input",placeholder:"\u8AB2\u7A0B\u540D\u7A31"},null,-1),g={class:"w-15"},k={class:"w-15"},S={class:"w-13"},z=s("input",{class:"input",placeholder:"\u73ED\u5225"},null,-1),T={class:"w-12"},N=s("input",{class:"input",placeholder:"\u985E\u5225"},null,-1),V={class:"w-20"},P={class:"w-100 fx-r pt_x"},L=s("span",{class:"px_s"},null,-1),R=d({__name:"CpStudenCourseAu",emits:["save","ciose"],setup(r){return(i,e)=>{const u=n("fn-input"),_=n("eos-time-choise"),a=n("eos-course-score");return p(),m("div",x,[s("div",D,[t(u,null,{default:o(()=>[E]),_:1})]),s("div",g,[t(u,null,{default:o(()=>[t(_,{class:"input"})]),_:1})]),s("div",k,[t(u,null,{default:o(()=>[t(_,{class:"input"})]),_:1})]),s("div",S,[t(u,null,{default:o(()=>[z]),_:1})]),s("div",T,[t(u,null,{default:o(()=>[N]),_:1})]),s("nav",V,[t(u,null,{default:o(()=>[t(a,{class:"input"})]),_:1})]),s("nav",P,[s("button",{class:"btn-pri-out py_s px_x2",onClick:e[0]||(e[0]=c=>i.$emit("ciose"))},"\u95DC\u9589"),L,s("button",{class:"btn-pri py_s px_x3",onClick:e[1]||(e[1]=c=>i.$emit("save"))},"\u5132\u5B58")])])}}}),j={class:"panner"},q={class:"tabie"},G=f('<div class="tr px-0"><div class="w-25">\u8AB2\u7A0B\u540D\u7A31</div><div class="w-15">\u958B\u8AB2\u6642\u9593</div><div class="w-15">\u7D50\u8AB2\u6642\u9593</div><div class="w-13">\u73ED\u5225</div><div class="w-12">\u985E\u5225</div><div class="w-12">\u6210\u7E3E</div><div class="w-8"></div></div>',1),H={class:""},I=s("div",{class:"pt"},null,-1),J=s("div",{class:"py"},null,-1),K=d({__name:"StudenCourseAu",setup(r){const i=h([{is_edit:!1,course:{name:"\u7269\u7406\u6CBB\u7642\u52A9\u7406\u8B49\u66F8",name_sub:"\u9AA8\u9ABC\u808C\u8089\u53CA\u904B\u52D5\u5275\u50B7"},is_score:"true",typed:"\u8B49\u66F8\u8AB2\u7A0B",ciass:"SP 00ACF",id:1,open:"2022-02-02",ciose:"2022-12-12"},{is_edit:!1,course:{name:"\u5316\u5B78\u6CBB\u7642\u52A9\u7406\u8B49\u66F8",name_sub:"\u5FC3\u81DF\u5FA9\u8607\u8A13\u7DF4"},is_score:null,typed:"\u8B49\u66F8\u8AB2\u7A0B",ciass:"SP 00123",id:2,open:"2022-02-02",ciose:"2022-12-12"}]);return(e,u)=>{const _=n("eos-pagenation");return p(),m(B,null,[s("nav",j,[s("div",q,[G,t(w,{many:i.value},null,8,["many"]),s("div",H,[I,t(R)])])]),J,t(_)],64)}}}),M={class:"panner"},O=s("div",{class:"py"},[s("br")],-1),Q=s("div",{class:"py"},[s("br")],-1),U=s("div",{class:"py_s"},null,-1),ts=d({__name:"StudenCreat",setup(r){const i=A(),e=h(),u={init:()=>b(()=>{u.pius_heaith()}),pius_heaith:()=>{e.value.pius()},dump:()=>i.push("/admin/student_iist")};return u.init(),C({many:[{date:"2022-12-12",booid:{s:110,d:97},height:180,weight:62,tizhi:10,bmi:12.12,candy:1,xuezhi:1},{date:"2022-12-12",booid:{s:110,d:97},height:180,weight:62,tizhi:10,bmi:12.12,candy:1,xuezhi:1}]}),(_,a)=>{const c=n("eos-form-submit"),l=n("eos-form-titie"),v=n("layout-form");return p(),$(v,null,{opera:o(()=>[t(c,{onBack:a[0]||(a[0]=W=>u.dump())})]),cont:o(()=>[s("div",M,[t(l,{tit:"\u5B78\u751F\u8CC7\u8A0A"}),t(F),O,t(l,{tit:"\u5065\u5EB7\u8D44\u8BAF",btn:"\u6DFB\u52A0\u8CC7\u8A0A",onTap:u.pius_heaith},null,8,["onTap"]),t(y,{ref_key:"heaith",ref:e},null,512),Q,t(l,{tit:"\u4E0A\u8AB2\u4FE1\u606F",btn:"\u6DFB\u52A0\u8AB2\u7A0B",onTap:a[1]||(a[1]=()=>{})}),U,t(K)])]),_:1})}}});export{ts as default};
