import{d as E,f as y,u as v,r as B,o as r,i as c,j as s,C as u,l as n,G as _,H as x,x as b,D as w,e as H,J as T,K as D}from"./index.67c60a96.js";import{u as A}from"./users.5a1369ad.js";import{n as d}from"./notific.5b226cf1.js";import{c as m}from"./course.78cc831a.js";import{c as h}from"./course_finish.f0cc4f9f.js";const a={student_id:"8",studen_moodie_id:"54",teacher_id:"1223",def_notific:{headings:{en:" ",zh_Hans:" ",zh_Hant:" "},contents:{en:" ",zh_Hans:" ",zh_Hant:" "},passage:{en:" ",zh_Hant:" ",zh_Hans:" "},passage1:{en:" ",zh_Hant:" ",zh_Hans:" "},passage2:{en:" ",zh_Hant:" ",zh_Hans:" "},passage3:{en:" ",zh_Hant:" ",zh_Hans:" "},external_user_id:[],image_url:["https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1671555600&t=0bdff064d3a528c44c976149b689a854"],expected_push_date:"2022-10-21 10:50",type:"event",written_by:" ",url:" "},user_heaith_info:{nickname:"test",status:"single",location:"sadas street",sex:"M",birthdate:"2022-10-25"},heaith_form:[{id:4,height:170.6,weight:"70",fat_percentage:"97.4",blood_lipids:22.3,blood_sugar:212,precautions_list:["asdadad","asdasda"],blood_pressure:{systolic:12,diastolic:"123.5"},date:"2022-12-06"}],endpoint:{"GET users":"/user \uFF0C\u8FC7\u6EE4 = admin","GET students":"/user \uFF0C\u8FC7\u6EE4 = student","GET teachers":"/user \uFF0C\u8FC7\u6EE4 = teacher","PATCH \u5355\u6761\u8D26\u6237\u4FE1\u606F":"/users-permissions/users/user_detail","PATCH \u5168\u90E8\u5065\u5EB7\u4FE1\u606F":"/users-permissions/users/health_detail","DELETE \u5220\u9664\u67D0\u6761\u5065\u5EB7\u4FE1\u606F":"/users/health_detail/:form_id","GET lessons":"/me/lessons","GET lessons \u5B8C\u6210\u7684":"/me/lesson-completions","PATCH lessons \u5B8C\u6210\u7684\u72B6\u6001":"/lesson-completions","PTACH \u6539\u53D8 lessons of one course":"/lesson/addLessons","GET courses":"/me/moodle-courses","POST course creat":"/moodle-courses/createCourse","GET course \u5B8C\u6210\u7684s":"/me/course-completions","POST course \u5B8C\u6210\u7684\u72B6\u6001":"/course-completions","PATCH add user to course":"/moodle-courses/enrolUser","PATCH remove user to course":"/moodle-courses/unrolUserr",\u767B\u5F55:"/auth/local",\u6CE8\u518C:"/users-permissions/admin/registerUser",\u4FEE\u6539\u5BC6\u7801:"/auth/change-password",\u5FD8\u8BB0\u5BC6\u7801:"/auth/forgot-password",\u91CD\u7F6E\u5BC6\u7801:"/auth/reset-password"}},z=[{name:"me moodie course",value:"me_course",desc:"",head:"course",roie:[0,1,2]},{name:"me moodie course completed",value:"me_course_finish",desc:"",head:"course",roie:[0,1]},{name:"me moodie course completed patch",value:"me_course_finish_patch",desc:"",head:"course",roie:[0,1]},{},{name:"moodie course category",value:"category",desc:"",head:"course",roie:[0,1,2]},{},{name:"me iessions",value:"me_iession",desc:"",head:"iessions",roie:[0,1,2]},{name:"iessions addiessions",value:"addiession",desc:"",head:"iessions",roie:[0,1]},{},{name:"notifications",value:"notific",desc:"",head:"notific",roie:[0,1,2]},{name:"notification one",value:"notific_one",desc:"",head:"notific",roie:[0,1,2]},{name:"notification creat",value:"notific_creat",desc:"",head:"notific",roie:[0]},{name:"notification canceied",value:"notific_canceied",desc:"",head:"notific",roie:[0]},{},{name:"advertisements",value:"advert",desc:"",head:"advert",roie:[0]},{},{name:"aii users",value:"users",desc:"",head:"users",roie:[0]},{name:"teachers",value:"teachers",desc:"",head:"teachers",roie:[0,1,2]},{name:"students",value:"students",desc:"",head:"students",roie:[0,1,2]},{},{name:"user health",value:"user_heaith",desc:"",head:"students",roie:[0,1,2]}],k={class:"py"},P={class:"px_x fx-s"},G=s("br",null,null,-1),N=s("h5",null,"Endpoint:",-1),I=s("hr",null,null,-1),L={class:"px_x py_s bg-FFF"},M={key:0,class:"fx-l"},O=["onClick"],V={class:"pl_x4"},j={class:"sec pl"},J=s("br",null,null,-1),S=s("br",null,null,-1),U=s("br",null,null,-1),R=s("br",null,null,-1),Z=E({__name:"endpoint",setup($){const f=y(),p={0:{name:"admin"},1:{name:"teacher"},2:{name:"student"}},g=o=>{let e="";return o.map(l=>{e+=p[l].name+" "}),e},t=v();console.log("\u5F53\u524D\u767B\u5F55\u7528\u6237 =",t.user);const C=async o=>{if(console.log(""),console.log("\u5F00\u59CB\u8FDE\u63A5 =",o),o==="category"){const e=await m.category({});console.log("\u8BFE\u7A0B\u7C7B\u522B =",e)}else if(o==="me_course"){const e=await m.many_my({},a.student_id);console.log("My Course =",e)}else if(o==="me_course_finish"){const e=await h.many_my({},a.student_id);console.log("My Course =",e)}else if(o==="me_course_finish_patch")await h.compeieted(a.student_id,a.teacher_id,"failed");else if(o==="notific"){const e=await d.many({});console.log("Notifications =",e)}else if(o==="notific_one"){const e=await d.one({},t.user.id);console.log("Notification one =",e)}else if(o==="notific_creat"){const e=await d.creat(a.def_notific);console.log("Notification creat =",e)}else if(o==="notific_canceied"){const e=await d.creat([]);console.log("Notification canceied =",e)}else o==="users"?await A.many({}):o==="teachers"?await T.many({}):o==="students"&&await D.many({})};return(o,e)=>{const l=B("eos-auto-iogin-tookit");return r(),c(_,null,[s("div",k,[s("div",P,[s("div",null,[s("h4",null,"\u7528\u6237\uFF1A"+u(n(t).user.username)+"\xA0[ Role: "+u(n(t).user.role?n(t).user.role.name:"\u65E0")+" ]\xA0[ ID: "+u(n(t).user.id)+" ]\xA0[ MOODLE ID: "+u(n(t).user.moodle_id)+" ]",1),s("p",null,"JWT\uFF1A"+u(n(t).jwt?n(t).jwt.substring(0,30)+"...":"\u65E0 Token"),1),s("p",null,"\u6D4B\u8BD5 student ID: "+u(n(a).student_id)+"\uFF0Cstudent ID: "+u(n(a).teacher_id),1),G,N]),s("button",{onClick:e[0]||(e[0]=i=>n(f).push("/iogin")),class:"btn-sec-out px py_s"},"\u767B\u5F55\u9875\u9762")]),I,s("div",L,[(r(!0),c(_,null,x(n(z),(i,F)=>(r(),c("div",{key:F,class:"px_x2 py_s"},[i.value?(r(),c("div",M,[s("button",{class:"btn-acc px py_s",onClick:K=>C(i.value)},"api\xA0"+u(i.name),9,O),s("div",V,[b("\u9875\u9762\u6743\u9650: "),s("span",j,u(g(i.roie)),1)])])):w("",!0)]))),128))])]),J,S,U,R,H(l)],64)}}});export{Z as default};
