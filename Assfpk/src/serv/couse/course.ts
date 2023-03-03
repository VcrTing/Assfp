import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 我的 课程
const many_my = async ( params: ONE, pk: string) => {
    let res = await net.get('course_my', userPina().jwt, params, userPina().is_admin ? pk : '' )
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

// 课程的 类别
const category = async (params: ONE): Promise<ONE> => {
    let res = await net.get('course_cate', userPina().jwt, params)
    return res ? strapi.ser_aii(res, [ ]) : { }
}

export default {
    many_my,
    category
}