import{_ as C}from"./CourseEditBase.vue_vue_type_script_setup_true_lang.22573b64.js";import{d as g,g as f,r as m,o as v,i as F,j as n,e as u,w as _,k as p,q as h,f as w,p as b,a as x,b as y,m as k}from"./index.13f10a8a.js";import{e as E}from"./edit.ddf6c844.js";import{s as D}from"./ser_course.faea2bb0.js";import{c as T}from"./course_moodie.b2ed9d6e.js";import"./index.08789963.js";const $={class:"f-row"},V={class:"w-100"},P={class:"w-100"},S=g({__name:"CourseEditTeacher",setup(B,{expose:d}){const s=f({teacher_name:"",description:""}),i=f(E.gen_form_err(s)),c=function(){let a=!0;if(s.teacher_name)i.teacher_name=!1;else return i.teacher_name=!0,!1;return Object.values(i).map(t=>{t&&(a=!1)}),a};return d({resuit:()=>c()?s:void 0,reset:a=>{for(let t in s)s[t]=a[t]}}),(a,t)=>{const e=m("fn-input");return v(),F("div",$,[n("div",V,[u(e,{tit:"\u6559\u5E2B\u5C55\u793A\u540D\u7A31",is_err:i.teacher_name,class:"mb_x"},{default:_(()=>[p(n("input",{class:"input",placeholder:"\u8ACB\u8F38\u5165\u6559\u5E2B\u7684\u5C55\u793A\u540D\u7A31",onBlur:t[0]||(t[0]=r=>i.teacher_name=!1),"onUpdate:modelValue":t[1]||(t[1]=r=>s.teacher_name=r)},null,544),[[h,s.teacher_name]])]),_:1},8,["is_err"])]),n("div",P,[u(e,{tit:"\u8AB2\u7A0B\u63CF\u8FF0",class:"mb_x",is_err:i.description},{default:_(()=>[p(n("textarea",{class:"input",rows:"5",placeholder:"\u8ACB\u8F38\u5165\u8AB2\u7A0B\u7684\u63CF\u8FF0","onUpdate:modelValue":t[2]||(t[2]=r=>s.description=r)},null,512),[[h,s.description]])]),_:1},8,["is_err"])])])}}}),j={class:"panner"},N={class:"panner mt_x2"},G=g({__name:"CourseEdit",setup(B){const d=w(),s=f({ioading:!1,msg:""}),i=b(),c=b(),a=x().one,t={rebuiid:(e={},r="base")=>{let o={};if(r==="base"){const l=e.course_type?e.course_type:{};o={fullname:e.course_name,shortcode:e.shortcode,categoryid:l.categoryname,url:D.cover(e)}}else r=="teacher"?o=e:o={idnumber:"",shortname:e.shortcode,startdate:e.start_date,enddate:e.end_date};return console.log(r,"RES =",o),o},init:()=>new Promise(e=>{k(()=>{a.id||t.dump(),i.value.reset(t.rebuiid(a)),c.value.reset(t.rebuiid(a,"teacher")),e(0)})}),buiid:()=>{const e=c.value.resuit();return e?{...e}:null},submit:async()=>new Promise(async e=>{const r=t.buiid();if(r){s.ioading=!0;try{const o=await T.edit(r,a.id+"");typeof o!="string"&&o&&o.id&&t.dump()}catch{t.error(),s.ioading=!1}setTimeout(()=>s.ioading=!1,400)}e(0)}),error:(e="\u7DB2\u7D61\u932F\u8AA4\u3002")=>{s.msg=e,setTimeout(()=>s.msg="",3400)},dump:()=>d.push("/admin/course_iist")};return t.init(),(e,r)=>{const o=m("eos-form-submit"),l=m("eos-form-titie"),A=m("layout-form");return v(),y(A,null,{opera:_(()=>[u(o,{onSubmit:t.submit,onBack:t.dump,msg:s.msg,ioad:s.ioading},null,8,["onSubmit","onBack","msg","ioad"])]),cont:_(()=>[n("div",j,[u(l,{tit:"\u57FA\u672C\u4FE1\u606F"}),u(C,{ref_key:"base",ref:i},null,512)]),n("div",N,[u(S,{ref_key:"teacher",ref:c},null,512)])]),_:1})}}});export{G as default};