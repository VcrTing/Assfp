import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 我的 單元
// ADMIN
const many = async ( params: ONE ) => {
    const uu = userPina(); params.searchType = 'lesson'
    let res = await net.get(
        uu.is_admin ? 'iessons' : 'iesson_my', 
        uu.jwt, params, '')
    if (res) { 
        console.log('單元 =', res)
        return strapi.ser_aii(res, [ ]) } return { }
}

const timer = async ( params: ONE ) => {
    const uu = userPina(); params.searchType = 'timetable'
    let res = await net.get( 'iessons', uu.jwt, params)
    if (res) { return strapi.ser_aii(res, [ 'moodle_course' ]) } return { }
}

export default { many, timer }