import{d as h,f as k,p as v,a as A,g as y,r as t,o as m,b as g,w as p,e as s,i as E,j as r,C as b}from"./index.615de566.js";import{_ as C}from"./IessonEditCourseMsg.vue_vue_type_script_setup_true_lang.48ab4241.js";import{_ as T}from"./CpCourseCreatUnit.vue_vue_type_script_setup_true_lang.ef6505e7.js";import{c as x}from"./course.74045909.js";import"./ser_course.61eda4a1.js";import"./course_moodie.65162a7f.js";import"./index.14b8c86b.js";import"./EosOperaGroup.vue_vue_type_script_setup_true_lang.760f139e.js";const w={key:0},F={class:"panner"},N=r("div",{class:"py"},null,-1),V={class:"pan panner-y"},G=h({__name:"IessonEdit",setup($){const u=k(),i=v(),a=A().iesson_of_edit,o=y({one:{},ioading:!0,id:-1}),n={dump:()=>u.push("/admin/iesson_iist"),pius:()=>i.value.pius_one(),init:async c=>{const e=await x.one(c);e&&(o.one=e),setTimeout(()=>o.ioading=!1,20)},trash:()=>{console.log("\u8981\u522A\u9664\u7684 iesson =",o.id),i.value.kiiiOne(o.id)}};return a.course_id?n.init(a.course_id):u.back(),console.log("\u8981\u7DE8\u8F2F\u7684\u8AB2\u7A0B\u55AE\u5143 =",a),(c,e)=>{const l=t("eos-form-submit"),d=t("eos-form-titie"),f=t("modai-trash"),B=t("layout-form");return m(),g(B,null,{opera:p(()=>[s(l,{kiii_save:!0,onBack:n.dump},null,8,["onBack"])]),cont:p(()=>[o.ioading?b("",!0):(m(),E("div",w,[r("div",F,[s(C,{one:o.one},null,8,["one"])]),N,r("div",V,[s(d,{class:"panner-x",tit:"\u8AB2\u7A0B\u55AE\u5143",btn:"\u6DFB\u52A0\u55AE\u5143",onTap:e[0]||(e[0]=_=>n.pius())}),s(T,{ref_key:"unit",ref:i,one:o.one,edit:!0,onTrash:e[1]||(e[1]=_=>o.id=_)},null,8,["one"])])])),s(f,{onTrash:n.trash},null,8,["onTrash"])]),_:1})}}});export{G as default};
