import{d as r,r as u,o,e as _,f as s,a as n,w as d,q as h,t as a,c as v,B as C,F as f,i as w,h as $,m as y}from"./index.ecca2914.js";const x={class:"td-for-form"},b={class:"w-19"},A=s("input",{class:"input",placeholder:"\u8CEC\u6236\u540D\u7A31"},null,-1),B={class:"w-17"},D=s("input",{class:"input",placeholder:"\u5C55\u793A\u540D\u7A31"},null,-1),k={class:"w-20"},F={class:"w-26"},S=s("input",{class:"input",placeholder:"\u96FB\u90F5"},null,-1),N={class:"w-18"},E=s("input",{class:"input",placeholder:"ID Card No."},null,-1),g={class:"w-100 fx-r pt"},V=s("span",{class:"px_s"},null,-1),I=r({__name:"CpStudenAu",emits:["save","ciose"],setup(c){return(l,t)=>{const i=u("fn-input"),e=u("eos-input-phone");return o(),_("div",x,[s("div",b,[n(i,null,{default:d(()=>[A]),_:1})]),s("div",B,[n(i,null,{default:d(()=>[D]),_:1})]),s("div",k,[n(i,null,{default:d(()=>[n(e)]),_:1})]),s("div",F,[n(i,null,{default:d(()=>[S]),_:1})]),s("nav",N,[n(i,null,{default:d(()=>[E]),_:1})]),s("nav",g,[s("button",{class:"btn-pri-out py_s px_x2",onClick:t[0]||(t[0]=p=>l.$emit("ciose"))},"\u95DC\u9589"),V,s("button",{class:"btn-pri py_s px_x3",onClick:t[1]||(t[1]=p=>l.$emit("save"))},"\u5132\u5B58")])])}}}),L={key:0,class:"td py"},T={class:"w-19"},M={class:"w-17"},O={class:"w-20"},R={class:"w-26"},X={class:"w-12"},q={class:"w-6 fx-r"},j={key:1,class:"px_x2 pb"},z=r({__name:"CsiTd",props:{many:null,is_edit:{type:Boolean}},setup(c){return(l,t)=>{const i=u("eos-tabie-edit");return o(!0),_(f,null,h(c.many,(e,p)=>(o(),_("div",{key:p},[e.is_edit?(o(),_("div",j,[n(I,{onCiose:m=>e.is_edit=!1,onSave:t[0]||(t[0]=()=>{})},null,8,["onCiose"])])):(o(),_("div",L,[s("div",T,a(e.name),1),s("div",M,a(e.display_name),1),s("div",O,a(e.phone_pfx)+" "+a(e.phone),1),s("div",R,a(e.email),1),s("div",X,a(e.id_card),1),s("div",q,[c.is_edit?(o(),v(i,{key:0,onTap:m=>e.is_edit=!0},null,8,["onTap"])):C("",!0)])]))]))),128)}}}),G={class:"pan px_x2 py"},H={class:"tabie"},J=y('<div class="tr"><div class="w-19">\u8CEC\u6236\u540D\u7A31</div><div class="w-17">\u5C55\u793A\u540D\u7A31</div><div class="w-20">\u96FB\u8A71\u865F\u78BC</div><div class="w-26">\u96FB\u90F5</div><div class="w-12">ID card No.</div><div class="w-6"></div></div>',1),K=s("div",{class:"py"},null,-1),Q=r({__name:"ClassStudenIist",setup(c){const l=w([{is_edit:!1,id:1,name:"Lily Cure 001",display_name:"\u5F35\u4E09",phone:"99986666",phone_pfx:"864",email:"bbbscecsaw@AASX.COM",id_card:"CARD_00011"},{is_edit:!1,id:2,name:"Lily Cure 002",display_name:"\u674E\u56DB",phone:"99986698",phone_pfx:"834",email:"bbbsce99ii@AASX.COM",id_card:"CARD_00012"}]);return(t,i)=>{const e=u("eos-pagenation");return o(),_("div",null,[s("nav",G,[s("div",H,[J,n(z,{many:l,is_edit:!0},null,8,["many"]),$(t.$slots,"default")])]),K,n(e)])}}});export{Q as _,I as a};
