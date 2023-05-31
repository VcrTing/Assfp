import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

const ERR_COURSE = <ONE>{
    '': '網絡錯誤。',
    'shortnametaken': '課程簡易名稱重複！'
}
const ioc_err_msg = (err_data: ONE = { }) => {
    const code: string = err_data ? err_data.errorcode : ''
    return ERR_COURSE[ code ? code : '']
}

// 全部 课程 的 ENDPOINT
// ADMIN
const many = async ( params: ONE ) => {
    const uu = userPina()
    let res = await net.get(
        uu.is_admin ? 'courses' : 'course_my', 
        uu.jwt, params, 
    )
    if (res) { return strapi.ser_aii(res, [ 'course_categories', 'lessons' ]) } return { }
}

// 課程 一個
const one = async (id: ID) => {
    let res = await net.get('courses', userPina().jwt, { }, id + '')
    if (res && res.data) {
        return strapi.data( res )
    } return <ONE>{ }
}

// 课程的 类别
const category = async (params: ONE): Promise<ONE> => {
    let res = await net.get('course_cate', userPina().jwt, params)
    return res ? strapi.ser_aii(res, [ ]) : { }
}

// 創建課程
const creat = async (data: ONE): Promise<COURSE> => {
    let res: ONE | null = null;
    try {
        res = await net.pos('course_creat', userPina().jwt, data) 
        console.log('課程創建的結果 =', res)
        if (res && res.status < 399) {
            const dt: COURSE[] | COURSE = res.data
            if (dt instanceof Array) { return dt.length > 0 ? dt[0] : { } as COURSE; } return dt
        } 
    } catch(err: any) {
        console.log('錯誤 =', err)
        const resp = err.response ? err.response : { data: { message: '', errorcode: '' } };
        console.log('錯誤 resp =', resp)
        return ioc_err_msg(resp.data);
    }
    return { } as COURSE
}
// 修改課程
const edit = async (data: ONE, idx: string): Promise<COURSE|string> => {
    let res: ONE | null = await net.put('course_edit', userPina().jwt, data, idx) 
    if (res && res.status < 399) {
        const dt: COURSE[] | COURSE = res.data
        if (dt instanceof Array) { return dt.length > 0 ? dt[0] : { } as COURSE; } return dt
    } return ioc_err_msg()
}

// 加入一個單元
const insert_iesson = async (iesson: ONE) => {
    console.log('修改單元的 數據 =', { schedule: [ iesson ] })
    let res = await net.put('course_add_iesson', userPina().jwt, { schedule: [ iesson ] }, '')
    if (res && res.status < 399) {
        const ies: MANY = res.data ? res.data : [ ]
        if (ies.length > 0) { return ies[ 0 ] }
    } return { }
}

// 加入一個用戶
const add_user = async (pms: COURSE_ENROLUSER) => {
    console.log('加入學生 pms =', pms)
    let res = await net.put('course_add_user', userPina().jwt, pms, '')
    if (res && res.status < 399) {
        return true
    } return false
}
// 下掉一個用戶
const inn_user = async (pms: COURSE_ENROLUSER) => {
    let res = await net.put('course_inn_user', userPina().jwt, pms, '')
    console.log('卸掉用戶 =', pms, ' 結果 =', res)
    if (res && res.status < 399) {
        return true
    } return false
}

// 课程表格
const sheet_of_user = async (id: ID): Promise<MANY> => {
    let res = await net.get('course_sheet_of_user', userPina().jwt, { }, id + '') as MANY
    if (res && res.length > 0) { return res } return [ ]
}

export default {
    one,
    many,

    edit,
    creat,
    category,

    add_user,
    inn_user,
    insert_iesson,
    sheet_of_user
}