const t={true:"\u555F\u7528",false:"\u5B8C\u6210/\u901A\u904E"},u={cover:(r={})=>{let e={};if(r.course_shop_url)return r.course_shop_url;const s=r.course_image?r.course_image:[];return s instanceof Array?e=s[0]?s[0]:{}:e=s,e.fileurl},course_type:r=>{const e=r?r.course_type:{};return e?e.categoryname:""},price:r=>{let e=r?r.course_price:"";return e=e||"",e?""+e:"\u514D\u8CBB"},status:r=>{const e=r?r.course_active:!1;return t[e+""]},iesson_num:(r={})=>r.total_lesson?r.total_lesson:"",topic_num:(r={})=>(r.course_topic?r.course_topic:[]).length,teacher:(r={})=>{const e=r.teacher_name;return e||""}};export{u as s};
