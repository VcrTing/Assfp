import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 我的 课程
// ADMIN
const many = async ( params: ONE ) => {
    const uu = userPina()
    let res = await net.get(
        uu.is_admin ? 'courses' : 'course_my', 
        uu.jwt, params, 
        uu.is_admin ? '' : uu.pk )
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
    let res: ONE | null = await net.pos('course_creat', userPina().jwt, data) 
    console.log('課程創建的結果 =', res)
    if (res && res.status < 399) {
        const dt: COURSE[] | COURSE = res.data
        if (dt instanceof Array) { return dt.length > 0 ? dt[0] : { } as COURSE; } return dt
    } return { } as COURSE
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
    console.log('卸掉用戶 =', pms)
    let res = await net.put('course_inn_user', userPina().jwt, pms, '')
    if (res && res.status < 399) {
        return true
    } return false
}
export default {
    one,
    many,

    creat,
    category,

    add_user,
    inn_user,
    insert_iesson
}