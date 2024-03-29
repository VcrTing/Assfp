

const val_char_price = function(v: string , txt: string) {
    let char = /[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},\/;'[\]]/;
    if (char.test(v)) { return txt + '中不應有除了.之外的特殊字符。' }
    return true
}

/*
const val_timed = function(v: string, txt: string, short: boolean) {
    if (short) {
        if ((v.length > 10) && (v.length < 8)) { return txt + '字符長度不符合！' }
        let char = /[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?:"{},.\/;'[\]]/;
        if (char.test(v)) { return txt + '中不應有除了 - 之外的特殊字符。' }
    }
    return true
}
*/
const val_timed = (v: string) => {
    v = v ? (v + '').trim() : '';
    let char = /[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?"{},.\/;'[\]]/;
    if (char.test(v)) { return false }
    return true
}

    
// true 為通過
const val_phone = function(v: string) {
    let res = v ? true : false
    try {
        res = v.length > 6 && v.length < 18 
        res = Number.parseInt(v) ? true : false  } catch(err) { }
    return res
}
const val_email = function(v: string) {
    let char = /[`~!$^&*(“”‘’'、`～·！—_|=;？，。\\)<>?:"{},\/;'[\]]/;
    if (char.test(v)) { return false }
    char = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
    return char.test(v)
}
const val_password = function(v: string) {
    // 長度
    if (v.length < 8 || v.length > 200) { return false }

    // 特殊字符
    let char = /[`~!$^&*(“”‘’'、`～·！—_|=;？，。\\)<>?:"{},\/;'[\]]/;
    if (!char.test(v)) { return false }

    char = /^.*[A-Z]+.*$/;
    return char.test(v)
}
    
// 中英文
const val_chinese = function(str: string) {
    const re = new RegExp('[\\u4E00-\\u9FFF]', 'g')
    return re.test(str);       
}
    
// 空
const empty = function(v: string) {
    if ((v == null || v == '')) { return null } else { v = v.trim() }
    return v
}
    
export default {
    empty,
    val_email,
    val_phone,
    val_chinese,
    val_timed,
    val_password
}