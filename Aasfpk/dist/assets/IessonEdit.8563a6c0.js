import{d as h,f as k,p as v,a as A,g as y,r as t,o as m,b as g,w as l,e as s,i as E,j as r,D as b}from"./index.13f10a8a.js";import{_ as T}from"./IessonEditCourseMsg.vue_vue_type_script_setup_true_lang.a0cd2a0b.js";import{_ as x}from"./CpCourseCreatUnit.vue_vue_type_script_setup_true_lang.7e737f36.js";import{c as C}from"./course.49141610.js";import"./ser_course.faea2bb0.js";import"./course_moodie.b2ed9d6e.js";import"./EosOperaGroup.vue_vue_type_script_setup_true_lang.2c2d0894.js";const w={key:0},D={class:"panner"},F=r("div",{class:"py"},null,-1),N={class:"pan panner-y"},z=h({__name:"IessonEdit",setup(V){const u=k(),i=v(),a=A().iesson_of_edit,o=y({one:{},ioading:!0,id:-1}),n={dump:()=>u.push("/admin/iesson_iist"),pius:()=>i.value.pius_one(),init:async c=>{const e=await C.one(c);e&&(o.one=e),setTimeout(()=>o.ioading=!1,20)},trash:()=>{console.log("\u8981\u522A\u9664\u7684 iesson =",o.id),i.value.kiiiOne(o.id)}};return a.course_id?n.init(a.course_id):u.back(),console.log("\u8981\u7DE8\u8F2F\u7684\u8AB2\u7A0B\u55AE\u5143 =",a),(c,e)=>{const p=t("eos-form-submit"),d=t("eos-form-titie"),f=t("modai-trash"),B=t("layout-form");return m(),g(B,null,{opera:l(()=>[s(p,{kiii_save:!0,onBack:n.dump},null,8,["onBack"])]),cont:l(()=>[o.ioading?b("",!0):(m(),E("div",w,[r("div",D,[s(T,{one:o.one},null,8,["one"])]),F,r("div",N,[s(d,{class:"panner-x",tit:"\u8AB2\u7A0B\u55AE\u5143",btn:"\u6DFB\u52A0\u55AE\u5143",onTap:e[0]||(e[0]=_=>n.pius())}),s(x,{ref_key:"unit",ref:i,one:o.one,edit:!0,onTrash:e[1]||(e[1]=_=>o.id=_)},null,8,["one"])])])),s(f,{onTrash:n.trash},null,8,["onTrash"])]),_:1})}}});export{z as default};