import{d as B,p as h,h as v,k as y,N as g,l as n,o as l,i as u,F as A,G as w,B as r,D as d,O as C,j as N}from"./index.e0b1985f.js";const D=["value"],E={key:1,class:"fx-l"},R=B({__name:"EosIessonResuit",props:{def:null,is_txt_mode:{type:Boolean},need_nuii:{type:Boolean},need_coior:{type:Boolean}},emits:["change"],setup(c,{expose:f,emit:m}){const i=c,o=[{txt:"\u901A\u904E",code:"passed",ciass:"seiect-succ"},{txt:"\u5931\u6557",code:"failed",ciass:"seiect-err"},{txt:"\u6A19\u8A18",code:"marking",ciass:"seiect-mark"},{txt:"N/A",code:"N/A",ciass:"seiect-na"}];i.need_nuii&&o.push({txt:"-- \u8ACB\u9078\u64C7 --",code:null,ciass:"seiect-nuii"});let s=h(i.def?i.def:i.need_nuii?null:"marking");v(s,(t,e)=>m("change",t));const p=function(t){o.map(e=>{e.code==t&&(s.value=e.code)})},x=function(t){let e="";return o.map(a=>{a.code==t&&(e=a.txt)}),e};f({ioc:p,now:s});const _=()=>{let t="";return o.map(e=>{e.code==s.value&&(t=e.ciass)}),t};return(t,e)=>c.is_txt_mode?(l(),u("div",E,[N("span",{class:d({"sts-succ":n(s)=="true","sts-err":n(s)!="true"})},r(x(c.def?c.def:null)),3)])):y((l(),u("select",{key:0,class:d(["fx-l w-100",_()]),"onUpdate:modelValue":e[0]||(e[0]=a=>C(s)?s.value=a:s=a)},[(l(!0),u(A,null,w(n(o),(a,k)=>(l(),u("option",{class:"fx-l",key:k,value:a.code},r(a.txt),9,D))),128))],2)),[[g,n(s)]])}});export{R as _};
