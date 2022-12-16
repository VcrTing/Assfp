import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 我的 课程
const many_my = async ( params: ONE, pk: string) => {
    const u = userPina()
    let res = await net.get('course_moodie', u.jwt, params, u.is_admin ? pk : '')
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

export default {
    many_my
}