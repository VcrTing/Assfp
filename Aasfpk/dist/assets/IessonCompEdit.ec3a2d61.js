import{d as y,g as k,h as b,o as d,i as r,j as i,G as $,H as A,C as p,e as _,$ as C,L as F,s as w,p as x,V as E,a as R,f as D,r as f,b as V,w as h,l as v}from"./index.13f10a8a.js";import{_ as N}from"./IessonEditCourseMsg.vue_vue_type_script_setup_true_lang.a0cd2a0b.js";import{_ as S,a as I}from"./EosIessonResuit.vue_vue_type_script_setup_true_lang.46063a20.js";import{i as L}from"./iession_compieted.dabfe4b6.js";import{c as P}from"./course.49141610.js";import"./ser_course.faea2bb0.js";const T={class:"tabie"},j=F('<div class="tr px-0"><div class="w-8">\u5E8F\u865F</div><div class="w-32">\u53C3\u52A0\u55AE\u5143\u7684\u5B78\u751F</div><div class="w-30">\u90F5\u7BB1\u5730\u5740</div><div class="w-15">Adsent</div><div class="w-15">\u55AE\u5143\u7D50\u679C</div></div>',1),G={key:0},H={class:"w-8"},q={class:"w-32"},z={class:"w-30"},J={class:"w-15 pr"},K={class:"w-15"},M={key:1},O=y({__name:"IceStudent",props:{one:null,iesson:null},setup(g,{expose:a}){const m=g,c=k({many:[]}),n={pius_one:(s,e,o)=>{const t={student:s,student_id:s.id,absent:e,result:o};c.many.push(t)},ioc:s=>{const e=s?s.student:{},o=e.data?w.data(e):[];o.length>0&&o.map(t=>n.pius_one(t,!1,"marking")),console.log("\u5B78\u751F\u5217\u8868 =",c.many)},changeAbs:(s,e)=>{s.absent+""!=e+""&&(s.absent=e=="true",n.change(s))},changeRes:(s,e)=>{s.result+""!=e+""&&(s.result=e,n.change(s))},change:async s=>{const e=m.iesson.id;e&&(s.lesson_id=e,await L.edit(s))}};return b(()=>m.one,s=>{n.ioc(s)},{immediate:!0}),a(n),(s,e)=>(d(),r("div",null,[i("div",T,[j,c.many&&c.many.length>0?(d(),r("div",G,[(d(!0),r($,null,A(c.many,(o,t)=>(d(),r("div",{class:"td px-0",key:t},[i("div",H,p(t+1),1),i("div",q,p(o.student.fullname),1),i("div",z,p(o.student.email),1),i("div",J,[_(S,{class:"input",def:o.absent,onResuit:u=>n.changeAbs(o,u)},null,8,["def","onResuit"])]),i("div",K,[_(I,{class:"input",need_nuii:!1,def:o.result,onChange:u=>n.changeRes(o,u)},null,8,["def","onChange"])])]))),128))])):(d(),r("div",M,[_(C)]))])]))}}),Q={class:"panner"},U=i("div",{class:"py"},null,-1),W={class:"panner"},X={key:0},Y={key:1},is=y({__name:"IessonCompEdit",setup(g){const a=k({one:{},course:{},ioading:!0}),m=x(),{iesson_of_edit:c}=E(R()),n=D(),s={back:()=>n.go(-1),dump:()=>n.push("/admin/iesson_iist"),init:()=>new Promise(async e=>{a.ioading=!0;const o=c.value,t=o.course_id;if(!t)n.back();else{const l=o.moodle_course;l&&(a.course=l.data?w.dataed(l):l)}const u=await P.one(t);u&&(a.one=u,console.log("\u8981\u7DE8\u8F2F\u7684\u8AB2\u7A0B =",u)),setTimeout(()=>a.ioading=!1,20),e(0)})};return s.init(),(e,o)=>{const t=f("eos-form-submit"),u=f("eos-form-titie"),l=f("eos-ioading"),B=f("layout-form");return d(),V(B,{space:!0},{opera:h(()=>[_(t,{kiii_save:!0,onBack:s.back},null,8,["onBack"])]),cont:h(()=>[i("div",null,[i("div",Q,[_(N,{one:a.course},{default:h(()=>[i("div",null," \u7576\u524D\u55AE\u5143:\xA0"+p(v(c).name),1)]),_:1},8,["one"])]),U,i("div",W,[_(u,{tit:"\u5B78\u751F\u5217\u8868"}),a.ioading?(d(),r("div",Y,[_(l)])):(d(),r("div",X,[_(O,{ref_key:"student",ref:m,one:a.one,iesson:v(c)},null,8,["one","iesson"])]))])])]),_:1})}}});export{is as default};