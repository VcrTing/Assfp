const t={true:"\u555F\u7528",false:"\u5B8C\u6210/\u901A\u904E"},u={cover:(e={})=>{let r={};const s=e.course_image?e.course_image:[];return s instanceof Array?r=s[0]?s[0]:{}:r=s,r.fileurl?r.fileurl:e.course_shop_url},course_type:e=>{const r=e?e.course_type:{};return r?r.categoryname:""},price:e=>{let r=e?e.course_price:"";return r=r||"",r?""+r:"\u514D\u8CBB"},status:e=>{const r=e?e.course_active:!1;return t[r+""]},iesson_num:(e={})=>e.total_lesson?e.total_lesson:"",topic_num:(e={})=>(e.course_topic?e.course_topic:[]).length,teacher:(e={})=>{const r=e.teacher_name;return r||""}};export{u as s};