import{d as h,f as k,p as v,a as A,g,r as t,o as m,b as y,w as d,e as s,i as E,j as r,C as b}from"./index.e0b1985f.js";import{_ as C}from"./IessonEditCourseMsg.vue_vue_type_script_setup_true_lang.97aef704.js";import{_ as T}from"./CpCourseCreatUnit.vue_vue_type_script_setup_true_lang.139b756c.js";import{c as w}from"./course.c20087bd.js";import"./course_moodie.d69b091a.js";import"./index.14b8c86b.js";import"./EosOperaGroup.vue_vue_type_script_setup_true_lang.18edfb69.js";const x={key:0},F={class:"panner"},N=r("div",{class:"py"},null,-1),V={class:"panner"},z=h({__name:"IessonEdit",setup($){const u=k(),i=v(),a=A().iesson_of_edit,o=g({one:{},ioading:!0,id:-1}),n={dump:()=>u.push("/admin/iesson_iist"),pius:()=>i.value.pius_one(),init:async c=>{const e=await w.one(c);e&&(o.one=e),setTimeout(()=>o.ioading=!1,20)},trash:()=>{console.log("\u8981\u522A\u9664\u7684 iesson =",o.id),i.value.kiiiOne(o.id)}};return a.course_id?n.init(a.course_id):u.back(),console.log("\u8981\u7DE8\u8F2F\u7684\u8AB2\u7A0B\u55AE\u5143 =",a),(c,e)=>{const l=t("eos-form-submit"),p=t("eos-form-titie"),f=t("modai-trash"),B=t("layout-form");return m(),y(B,null,{opera:d(()=>[s(l,{kiii_save:!0,onBack:n.dump},null,8,["onBack"])]),cont:d(()=>[o.ioading?b("",!0):(m(),E("div",x,[r("div",F,[s(C,{one:o.one},null,8,["one"])]),N,r("div",V,[s(p,{tit:"\u8AB2\u7A0B\u55AE\u5143",btn:"\u6DFB\u52A0\u55AE\u5143",onTap:e[0]||(e[0]=_=>n.pius())}),s(T,{ref_key:"unit",ref:i,one:o.one,edit:!0,onTrash:e[1]||(e[1]=_=>o.id=_)},null,8,["one"])])])),s(f,{onTrash:n.trash},null,8,["onTrash"])]),_:1})}}});export{z as default};
