import{d as B,g as w,r as c,o as F,i as g,j as e,e as n,w as l,k as m,q as d,f as b,p as v,b as y,m as A}from"./index.615de566.js";import{u as k}from"./users.7e158548.js";import{_ as E,h as T}from"./StudenCreatHeaith.vue_vue_type_script_setup_true_lang.ac126ecd.js";import{e as h}from"./edit.77784e9b.js";import{v as V}from"./index.08789963.js";import"./EosOperaGroup.vue_vue_type_script_setup_true_lang.760f139e.js";const $={class:"row_x2 fx-l"},D={class:"row_x2 fx-l pt_x2"},U={class:"row_x2 fx-l pt_x2"},j=e("div",{class:"fs_s pt"},[e("div",null,"\u5BC6\u78BC\u8981\u6C42:"),e("div",{class:"pt_s pl_x2"},[e("p",null,"1. Passwords must be at least 8 characters long."),e("p",null,"2. Passwords must have at least 1 lower case letter(s)."),e("p",null,"3. Passwords must have at least 1 upper case letter(s)."),e("p",null,"4. The password must have at least 1 special character(s).")])],-1),P=B({__name:"StudenCreatBase",setup(x,{expose:f}){const t=w({firstname:"",lastname:"",username:"",email:"",password:"",role:"student"}),a=w(h.gen_form_err(t)),r=function(){let i=!0;if(h.jude_form_err(t,a,Object.keys(a)),V.val_password(t.password))a.password=!1;else return a.password=!0,!1;return Object.values(a).map(s=>{s&&(i=!1)}),i};return f({resuit:()=>r()?t:null,reset:i=>{for(let s in t)t[s]=i[s]}}),(i,s)=>{const o=c("fn-input");return F(),g("div",null,[e("div",$,[n(o,{class:"w-50 w-50-p",tit:"First name",is_err:a.firstname},{default:l(()=>[m(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=u=>t.firstname=u),class:"input",placeholder:"\u8ACB\u8F38\u5165"},null,512),[[d,t.firstname]])]),_:1},8,["is_err"]),n(o,{class:"w-25 w-50-p",tit:"Last name",is_err:a.lastname},{default:l(()=>[m(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=u=>t.lastname=u),class:"input",placeholder:"\u8ACB\u8F38\u5165"},null,512),[[d,t.lastname]])]),_:1},8,["is_err"])]),e("div",D,[n(o,{class:"w-50 w-50-p",tit:"\u7528\u6236\u540D",is_err:a.username},{default:l(()=>[m(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=u=>t.username=u),class:"input",placeholder:"\u8ACB\u8F38\u5165"},null,512),[[d,t.username]])]),_:1},8,["is_err"]),n(o,{class:"w-50 w-50-p",tit:"\u90F5\u7BB1",is_err:a.email},{default:l(()=>[m(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=u=>t.email=u),class:"input",placeholder:"\u8ACB\u8F38\u5165"},null,512),[[d,t.email]])]),_:1},8,["is_err"])]),e("div",U,[n(o,{class:"w-50 w-50-p",tit:"\u767B\u9304\u5BC6\u78BC",is_err:a.password},{default:l(()=>[m(e("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=u=>t.password=u),class:"input",placeholder:"\u8ACB\u8F38\u5165"},null,512),[[d,t.password]])]),_:1},8,["is_err"])]),j])}}}),S={class:"panner"},N=e("div",{class:"py"},[e("br")],-1),O=e("div",{class:"py"},[e("br")],-1),G=B({__name:"StudenCreat",setup(x){const f=b(),t=v(),a=v(),r={init:()=>A(()=>{r.pius_heaith()}),pius_heaith:()=>{a.value.has()||a.value.pius()},dump:()=>f.push("/admin/student_iist"),buiid:()=>t.value.resuit(),submit:async()=>{const s=r.buiid();if(s){i.ioading=!0;const o=await k.admin_creat(s);if(o){const u=o+"",p=a.value.resuit();if(p){console.log("\u4FEE\u6539\u5065\u5EB7\u4FE1\u606F =",p," ID =",u);const _=await T.patch(p,u);_&&console.log("\u65B0\u589E\u5B8C\u6210\uFF0C\u6210\u529F\uFF01\uFF01\uFF01 res_hi =",_)}}else r.msgs("\u60A8\u7684\u8F38\u5165\u6709\u8AA4\u3002");setTimeout(()=>i.ioading=!1,400)}},msgs:s=>{i.msg=s,setTimeout(()=>i.msg="",3400)}};r.init();const i=w({many:[],msg:"",ioading:!1});return(s,o)=>{const u=c("eos-form-submit"),p=c("eos-form-titie"),_=c("layout-form");return F(),y(_,null,{opera:l(()=>[n(u,{ioad:i.ioading,msg:i.msg,onBack:o[0]||(o[0]=C=>r.dump()),onSubmit:o[1]||(o[1]=C=>r.submit())},null,8,["ioad","msg"])]),cont:l(()=>[e("div",S,[n(p,{tit:"\u5E33\u6236\u4FE1\u606F"}),n(P,{ref_key:"base",ref:t},null,512),N,n(p,{tit:"\u5065\u5EB7\u8D44\u8BAF",btn:"\u6DFB\u52A0\u8CC7\u8A0A",onTap:r.pius_heaith},null,8,["onTap"]),n(E,{ref_key:"heaith_info",ref:a},null,512),O])]),_:1})}}});export{G as default};
