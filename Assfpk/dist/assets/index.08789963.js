const r=t=>(t=t?(t+"").trim():"",!/[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?"{},.\/;'[\]]/.test(t)),n=function(t){let e=!!t;try{e=t.length>6&&t.length<18,e=!!Number.parseInt(t)}catch{}return e},a=function(t){let e=/[`~!$^&*(“”‘’'、`～·！—_|=;？，。\\)<>?:"{},\/;'[\]]/;return e.test(t)?!1:(e=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),e.test(t))},s=function(t){if(t.length<8||t.length>200)return!1;let e=/[`~!$^&*(“”‘’'、`～·！—_|=;？，。\\)<>?:"{},\/;'[\]]/;return e.test(t)?(e=/^.*[A-Z]+.*$/,e.test(t)):!1},l=function(t){return new RegExp("[\\u4E00-\\u9FFF]","g").test(t)},u=function(t){return t==null||t==""?null:(t=t.trim(),t)},f={empty:u,val_email:a,val_phone:n,val_chinese:l,val_timed:r,val_password:s};export{f as v};
