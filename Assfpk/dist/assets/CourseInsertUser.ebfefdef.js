import{d as w,g,r as h,o as a,i as d,j as o,B as f,e as p,w as b,F,G as T,l as v,V as C,C as y,b as k,Q as D,K as P,f as A,p as x,a as E,m as S}from"./index.615de566.js";import{c as B}from"./course_moodie.65162a7f.js";import{e as V}from"./edit.77784e9b.js";import{_ as N}from"./CourseEditBase.vue_vue_type_script_setup_true_lang.9426f2b7.js";import{s as U}from"./index.14b8c86b.js";import{s as I}from"./ser_course.61eda4a1.js";import"./index.08789963.js";const L={class:"pt"},j={class:"td-of-form panner-x"},H={class:"w-10 sus"},M={class:"w-48 pr"},R={class:"w-32 err"},G={key:0,class:"w-10 t-r"},K=o("span",{class:"px_s"},null,-1),O={key:1,class:"w-10 t-r"},Q=o("span",{class:"sus"},"\u52A0\u8F09\u4E2D...",-1),q=[Q],z=w({__name:"CpCcsForm",props:{one:null,i:null,ioading:{type:Boolean},_many:null},emits:["save","trash"],setup(l,{emit:m}){const i=l,u=g({msg:""}),e={sameUser:()=>{let s=0;return i._many.map(t=>{t.userid==i.one.userid&&(s+=1)}),s>1?(u.msg="\u5DF2\u5B58\u5728\u76F8\u540C\u7684\u5B78\u751F",!0):(u.msg="",!1)},can:()=>{let s=!0;if(i.one.user)n.userid=!1;else return n.userid=!0,!1;return e.sameUser()?(n.userid=!0,!1):(n.userid=!1,u.msg="",Object.values(n).map(c=>{c&&(s=!1)}),s)},save:()=>e.can()?m("save",i.one):void 0},n=g(V.gen_form_err(i.one));return(s,t)=>{const c=h("eos-user-seiect"),r=h("fn-input"),_=h("eos-tabie-save");return a(),d("div",L,[o("div",j,[o("div",H,f(l.i+1),1),o("div",M,[p(r,{is_err:n.userid},{default:b(()=>[p(c,{roie:"student",onResuit:t[0]||(t[0]=$=>{l.one.userid=$.moodle_id,l.one.user=$,e.sameUser()})})]),_:1},8,["is_err"])]),o("div",R,f(u.msg),1),l.ioading?(a(),d("nav",O,q)):(a(),d("nav",G,[p(_,{onTap:e.save,icon:!0},null,8,["onTap"]),K,o("span",{class:"err",onClick:t[1]||(t[1]=()=>{e.can()||s.$emit("trash",l.i)})},"\u53D6\u6D88")]))])])}}}),J={key:0,class:"w-100"},W={class:"td panner-x td-s td-hv"},X={class:"w-10 py_s"},Y={class:"w-32 fx-l"},Z={key:0,class:""},ss=["src"],es={class:"px"},ns={class:"w-16"},ts={class:"w-24 pr t-elip_x2"},os={class:"w-8"},is=["innerHTML"],rs={key:0,class:"w-10 t-r err"},us=["onClick"],as={key:1,class:"w-10 t-r"},cs=o("span",{class:"sus"},"\u52A0\u8F09\u4E2D...",-1),ds=[cs],ls=w({__name:"CpCcsTd",props:{many:null},emits:["pius_one"],setup(l,{emit:m}){const i=l,u=(s,t,c="")=>s.user?s.user[t]:c,e=g({mod:!1,active_one:{},active_idx:0}),n={buiid:s=>s,trash:s=>{i.many.splice(s,1),i.many.length<=0&&m("pius_one")},roiuser:async s=>{s.ioading=!0,await B.add_user(n.buiid(s))&&(s.edit=!1),setTimeout(()=>s.ioading=!1,200)},unroiuser:()=>new Promise(async s=>{const t=e.active_one,c=e.active_idx;t.ioading=!0,await B.inn_user(n.buiid(t))&&n.trash(c),setTimeout(()=>t.ioading=!1,200),s(0)}),sure_unroi:(s,t)=>new Promise(c=>{e.mod=!0,D().mod(-200),e.active_one=s,e.active_idx=t,c(0)})};return(s,t)=>{const c=h("modai-trash");return a(),d("div",null,[(a(!0),d(F,null,T(l.many,(r,_)=>(a(),d("div",{key:_},[r.edit?(a(),k(z,{key:1,i:_,one:r,_many:l.many,ioading:r.ioading,onSave:n.roiuser,onTrash:n.trash},null,8,["i","one","_many","ioading","onSave","onTrash"])):(a(),d("div",J,[o("div",W,[o("div",X,f(_+1),1),o("div",Y,[r.user?(a(),d("div",Z,[o("img",{class:"td-img-s",src:v(C).cover(r.user)},null,8,ss)])):y("",!0),o("div",es,f(u(r,"fullname")),1)]),o("div",ns,f(u(r,"ID_card_num")),1),o("div",ts,f(u(r,"email")),1),o("div",os,[r.user?(a(),d("div",{key:0,innerHTML:v(C).sex(r.user)},null,8,is)):y("",!0)]),r.ioading?(a(),d("div",as,ds)):(a(),d("div",rs,[o("button",{onClick:$=>n.sure_unroi(r,_)}," \u79FB\u9664\u5B78\u751F ",8,us)]))])]))]))),128)),e.mod?(a(),k(c,{key:0,onTrash:t[0]||(t[0]=r=>n.unroiuser())})):y("",!0)])}}}),_s={class:""},ms={class:"tabie"},ps=P('<div class="tr panner-x"><div class="w-10">\u5E8F\u865F</div><div class="w-32">\u53C3\u52A0\u8AB2\u7A0B\u7684\u5B78\u751F</div><div class="w-16"> ID Card </div><div class="w-24"> \u90F5\u7BB1\u5730\u5740 </div><div class="w-8"> \u6027\u5225 </div><div class="w-10"></div></div>',1),fs=w({__name:"CpCourseCreatStuden",props:{course:null},setup(l,{expose:m}){const i=l,u=g({many:[]}),e={buiid:(n={})=>n.moodle_id?{edit:!1,courseid:i.course?i.course.moodle_id:null,role:"student",userid:n.moodle_id,user:n,ioading:!1}:{courseid:i.course?i.course.moodle_id:null,role:"student",userid:null,user:null,ioading:!1,edit:!0},ioc:n=>new Promise(s=>{if(n&&n.length>0){let t=[];n.map(c=>{t.push(e.buiid(c))}),u.many=t}else u.many.push(e.buiid());s(0)}),pius_one:()=>{u.many.push({edit:!0,courseid:i.course?i.course.moodle_id:null,role:"student",userid:null,user:null,ioading:!1})}};return m(e),(n,s)=>(a(),d("div",_s,[o("div",ms,[ps,p(ls,{class:"pt_s",many:u.many,onPius_one:e.pius_one},null,8,["many","onPius_one"])])]))}}),vs={key:0,class:"panner"},hs={key:1,class:"pan panner-y mt_x2"},ys={class:"w-100"},Bs=w({__name:"CourseInsertUser",setup(l){const m=A(),i=x(),u=x(),e=E().one,n={pius_student:()=>{u.value.pius_one()},buiid_base:()=>{const s=e.course_categories?e.course_categories:[],t=s.length>0?s[0]:{};return{fullname:e.course_name,shortcode:e.shortcode,categoryid:t.name,url:I.cover(e)}},init:()=>new Promise(s=>{e.id||n.dump(),S(async()=>{i.value.reset(n.buiid_base()),e&&u.value.ioc(U.data(e.student))}),s(0)}),dump:()=>m.push("/admin/course_iist")};return n.init(),(s,t)=>{const c=h("eos-form-titie"),r=h("layout-form");return a(),k(r,{space:!0},{opera:b(()=>[o("button",{class:"btn-pri-out btn-def",onClick:t[0]||(t[0]=(..._)=>n.dump&&n.dump(..._))},"\u8FD4\u56DE")]),cont:b(()=>[v(e)?(a(),d("div",vs,[p(N,{one:v(e),ref_key:"base",ref:i},null,8,["one"])])):y("",!0),v(e)?(a(),d("div",hs,[p(c,{class:"panner-x",tit:"\u5B78\u751F",btn:"\u6DFB\u52A0\u5B78\u751F",onTap:t[1]||(t[1]=_=>n.pius_student())}),o("div",ys,[p(fs,{course:v(e),ref_key:"studen",ref:u},null,8,["course"])])])):y("",!0)]),_:1})}}});export{Bs as default};
