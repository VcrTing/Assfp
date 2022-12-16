import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 我 完成 的 课程
const many_my = async ( params: ONE, pk: string) => {
    let res = await net.get('course_my_finish', userPina().jwt, params, pk)
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

// 我的 课程 

export default {
    many_my
}