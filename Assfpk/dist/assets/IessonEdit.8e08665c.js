import{d as B,g as k,D as v,a as A,m as y,r as t,o as m,b as g,w as d,e as s,h as E,i as r,y as b}from"./index.2d29f9b3.js";import{_ as T}from"./IessonEditCourseMsg.vue_vue_type_script_setup_true_lang.0a217271.js";import{_ as C}from"./CpCourseCreatUnit.vue_vue_type_script_setup_true_lang.8aa896b9.js";import{c as w}from"./course.99414a37.js";import"./course_moodie.c9b7507b.js";import"./index.14b8c86b.js";import"./EosTimeGroup.vue_vue_type_script_setup_true_lang.b2f51a9e.js";import"./EosOperaGroup.vue_vue_type_script_setup_true_lang.4c6b1897.js";const x={key:0},D={class:"panner"},F=r("div",{class:"py"},null,-1),N={class:"panner"},G=B({__name:"IessonEdit",setup(V){const u=k(),i=v(),a=A().iesson_of_edit,o=y({one:{},ioading:!0,id:-1}),n={dump:()=>u.push("/admin/iesson_iist"),pius:()=>i.value.pius_one(),init:async c=>{const e=await w.one(c);e&&(o.one=e),setTimeout(()=>o.ioading=!1,20)},trash:()=>{console.log("\u8981\u522A\u9664\u7684 iesson =",o.id),i.value.kiiiOne(o.id)}};return a.course_id?n.init(a.course_id):u.back(),console.log("\u8981\u7DE8\u8F2F\u7684\u8AB2\u7A0B\u55AE\u5143 =",a),(c,e)=>{const l=t("eos-form-submit"),p=t("eos-form-titie"),f=t("modai-trash"),h=t("layout-form");return m(),g(h,null,{opera:d(()=>[s(l,{kiii_save:!0,onBack:n.dump},null,8,["onBack"])]),cont:d(()=>[o.ioading?b("",!0):(m(),E("div",x,[r("div",D,[s(T,{one:o.one},null,8,["one"])]),F,r("div",N,[s(p,{tit:"\u8AB2\u7A0B\u55AE\u5143",btn:"\u6DFB\u52A0\u55AE\u5143",onTap:e[0]||(e[0]=_=>n.pius())}),s(C,{ref_key:"unit",ref:i,one:o.one,edit:!0,onTrash:e[1]||(e[1]=_=>o.id=_)},null,8,["one"])])])),s(f,{onTrash:n.trash},null,8,["onTrash"])]),_:1})}}});export{G as default};