import{_ as d}from"./CourseEditBase.vue_vue_type_script_setup_true_lang.9426f2b7.js";import{_ as v}from"./CpCourseCreatUnit.vue_vue_type_script_setup_true_lang.ef6505e7.js";import{d as b,f as k,p as _,a as B,r as u,o as h,b as x,w as m,e as n,j as p,l as y,m as A}from"./index.615de566.js";import{s as C}from"./ser_course.61eda4a1.js";import"./course_moodie.65162a7f.js";import"./index.14b8c86b.js";import"./EosOperaGroup.vue_vue_type_script_setup_true_lang.760f139e.js";const g={class:"panner"},F={class:"pan panner-y mt_x2"},P=b({__name:"CourseInsertIession",setup(E){const f=k(),i=_(),r=_(),s=B().one,o={pius:()=>r.value.pius_one(),rebuiid:(e={})=>{const t=e.course_categories?e.course_categories:[],a=t.length>0?t[0]:{};return{fullname:e.course_name,shortcode:e.shortcode,categoryid:a.name,url:C.cover(e)}},init:()=>{A(()=>{s.id||o.dump(),i.value.reset(o.rebuiid(s)),s.lessons&&r.value.reset(s.lessons)})},dump:()=>f.push("/admin/course_iist")};return o.init(),(e,t)=>{const a=u("eos-form-submit"),c=u("eos-form-titie"),l=u("layout-form");return h(),x(l,{space:!0},{opera:m(()=>[n(a,{kiii_save:!0,onBack:o.dump},null,8,["onBack"])]),cont:m(()=>[p("div",g,[n(c,{tit:"\u57FA\u672C\u4FE1\u606F"}),n(d,{ref_key:"base",ref:i},null,512)]),p("div",F,[n(c,{class:"panner-x",tit:"\u8AB2\u7A0B\u55AE\u5143",btn:"\u6DFB\u52A0\u55AE\u5143",onTap:t[0]||(t[0]=$=>o.pius())}),n(v,{ref_key:"unit",ref:r,one:y(s)},null,8,["one"])])]),_:1})}}});export{P as default};
