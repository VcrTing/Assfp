import{d as w,g,r as h,o as u,i as d,j as o,C as f,e as p,w as b,G as F,H as D,l as v,a2 as C,D as y,b as k,O as T,L as P,f as A,p as x,a as E,m as S,s as L}from"./index.67c60a96.js";import{c as B}from"./course_moodie.4e898fec.js";import{e as N}from"./edit.99a67fc1.js";import{_ as U}from"./CourseEditBase.vue_vue_type_script_setup_true_lang.bcef30fe.js";import{s as V}from"./ser_course.61eda4a1.js";import"./index.08789963.js";const H={class:"pt"},I={class:"td-of-form panner-x"},j={class:"w-10 sus"},M={class:"w-48 pr"},O={class:"w-32 err"},R={key:0,class:"w-10 t-r"},G=o("span",{class:"px_s"},null,-1),q={key:1,class:"w-10 t-r"},z=o("span",{class:"sus"},"\u52A0\u8F09\u4E2D...",-1),J=[z],K=w({__name:"CpCcsForm",props:{one:null,i:null,ioading:{type:Boolean},_many:null},emits:["save","trash"],setup(l,{emit:m}){const i=l,a=g({msg:""}),e={sameUser:()=>{let s=0;return i._many.map(t=>{t.userid==i.one.userid&&(s+=1)}),s>1?(a.msg="\u5DF2\u5B58\u5728\u76F8\u540C\u7684\u5B78\u751F",!0):(a.msg="",!1)},can:()=>{let s=!0;if(i.one.user)n.userid=!1;else return n.userid=!0,!1;return e.sameUser()?(n.userid=!0,!1):(n.userid=!1,a.msg="",Object.values(n).map(c=>{c&&(s=!1)}),s)},save:()=>e.can()?m("save",i.one):void 0},n=g(N.gen_form_err(i.one));return(s,t)=>{const c=h("eos-user-seiect"),r=h("fn-input"),_=h("eos-tabie-save");return u(),d("div",H,[o("div",I,[o("div",j,f(l.i+1),1),o("div",M,[p(r,{is_err:n.userid},{default:b(()=>[p(c,{roie:"student",onResuit:t[0]||(t[0]=$=>{l.one.userid=$.moodle_id,l.one.user=$,e.sameUser()})})]),_:1},8,["is_err"])]),o("div",O,f(a.msg),1),l.ioading?(u(),d("nav",q,J)):(u(),d("nav",R,[p(_,{onTap:e.save,icon:!0},null,8,["onTap"]),G,o("span",{class:"err",onClick:t[1]||(t[1]=()=>{e.can()||s.$emit("trash",l.i)})},"\u53D6\u6D88")]))])])}}}),Q={key:0,class:"w-100"},W={class:"td panner-x td-s td-hv"},X={class:"w-10 py_s"},Y={class:"w-32 fx-l"},Z={key:0,class:""},ss=["src"],es={class:"px"},ns={class:"w-16"},ts={class:"w-24 pr t-elip_x2"},os={class:"w-8"},is=["innerHTML"],rs={key:0,class:"w-10 t-r err"},as=["onClick"],us={key:1,class:"w-10 t-r"},cs=o("span",{class:"sus"},"\u52A0\u8F09\u4E2D...",-1),ds=[cs],ls=w({__name:"CpCcsTd",props:{many:null},emits:["pius_one"],setup(l,{emit:m}){const i=l,a=(s,t,c="")=>s.user?s.user[t]:c,e=g({mod:!1,active_one:{},active_idx:0}),n={buiid:s=>s,trash:s=>{i.many.splice(s,1),i.many.length<=0&&m("pius_one")},roiuser:async s=>{s.ioading=!0,await B.add_user(n.buiid(s))&&(s.edit=!1),setTimeout(()=>s.ioading=!1,200)},unroiuser:()=>new Promise(async s=>{const t=e.active_one,c=e.active_idx;t.ioading=!0,await B.inn_user(n.buiid(t))&&n.trash(c),setTimeout(()=>t.ioading=!1,200),s(0)}),sure_unroi:(s,t)=>new Promise(c=>{e.mod=!0,T().mod(-200),e.active_one=s,e.active_idx=t,c(0)})};return(s,t)=>{const c=h("modai-trash");return u(),d("div",null,[(u(!0),d(F,null,D(l.many,(r,_)=>(u(),d("div",{key:_},[r.edit?(u(),k(K,{key:1,i:_,one:r,_many:l.many,ioading:r.ioading,onSave:n.roiuser,onTrash:n.trash},null,8,["i","one","_many","ioading","onSave","onTrash"])):(u(),d("div",Q,[o("div",W,[o("div",X,f(_+1),1),o("div",Y,[r.user?(u(),d("div",Z,[o("img",{class:"td-img-s",src:v(C).cover(r.user)},null,8,ss)])):y("",!0),o("div",es,f(a(r,"fullname")),1)]),o("div",ns,f(a(r,"ID_card_num")),1),o("div",ts,f(a(r,"email")),1),o("div",os,[r.user?(u(),d("div",{key:0,innerHTML:v(C).sex(r.user)},null,8,is)):y("",!0)]),r.ioading?(u(),d("div",us,ds)):(u(),d("div",rs,[o("button",{onClick:$=>n.sure_unroi(r,_)}," \u79FB\u9664\u5B78\u751F ",8,as)]))])]))]))),128)),e.mod?(u(),k(c,{key:0,onTrash:t[0]||(t[0]=r=>n.unroiuser())})):y("",!0)])}}}),_s={class:""},ms={class:"tabie"},ps=P('<div class="tr panner-x"><div class="w-10">\u5E8F\u865F</div><div class="w-32">\u53C3\u52A0\u8AB2\u7A0B\u7684\u5B78\u751F</div><div class="w-16"> ID Card </div><div class="w-24"> \u90F5\u7BB1\u5730\u5740 </div><div class="w-8"> \u6027\u5225 </div><div class="w-10"></div></div>',1),fs=w({__name:"CpCourseCreatStuden",props:{course:null},setup(l,{expose:m}){const i=l,a=g({many:[]}),e={buiid:(n={})=>n.moodle_id?{edit:!1,courseid:i.course?i.course.moodle_id:null,role:"student",userid:n.moodle_id,user:n,ioading:!1}:{courseid:i.course?i.course.moodle_id:null,role:"student",userid:null,user:null,ioading:!1,edit:!0},ioc:n=>new Promise(s=>{if(n&&n.length>0){let t=[];n.map(c=>{t.push(e.buiid(c))}),a.many=t}else a.many.push(e.buiid());s(0)}),pius_one:()=>{a.many.push({edit:!0,courseid:i.course?i.course.moodle_id:null,role:"student",userid:null,user:null,ioading:!1})}};return m(e),(n,s)=>(u(),d("div",_s,[o("div",ms,[ps,p(ls,{class:"pt_s",many:a.many,onPius_one:e.pius_one},null,8,["many","onPius_one"])])]))}}),vs={key:0,class:"panner"},hs={key:1,class:"pan panner-y mt_x2"},ys={class:"w-100"},xs=w({__name:"CourseInsertUser",setup(l){const m=A(),i=x(),a=x(),e=E().one,n={pius_student:()=>{a.value.pius_one()},buiid_base:()=>{const s=e.course_categories?e.course_categories:[],t=s.length>0?s[0]:{};return{fullname:e.course_name,shortcode:e.shortcode,categoryid:t.name,url:V.cover(e)}},init:()=>new Promise(s=>{e.id||n.dump(),S(async()=>{i.value.reset(n.buiid_base()),e&&a.value.ioc(L.data(e.student))}),s(0)}),dump:()=>m.push("/admin/course_iist")};return n.init(),(s,t)=>{const c=h("eos-form-titie"),r=h("layout-form");return u(),k(r,{space:!0},{opera:b(()=>[o("button",{class:"btn-pri-out btn-def",onClick:t[0]||(t[0]=(..._)=>n.dump&&n.dump(..._))},"\u8FD4\u56DE")]),cont:b(()=>[v(e)?(u(),d("div",vs,[p(U,{one:v(e),ref_key:"base",ref:i},null,8,["one"])])):y("",!0),v(e)?(u(),d("div",hs,[p(c,{class:"panner-x",tit:"\u5B78\u751F",btn:"\u6DFB\u52A0\u5B78\u751F",onTap:t[1]||(t[1]=_=>n.pius_student())}),o("div",ys,[p(fs,{course:v(e),ref_key:"studen",ref:a},null,8,["course"])])])):y("",!0)]),_:1})}}});export{xs as default};
