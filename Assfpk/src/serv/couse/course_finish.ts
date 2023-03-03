import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 我 完成 的 课程
const many_my = async ( params: ONE, pk: string) => {
    let res = await net.get('course_my_finish', userPina().jwt, params, userPina().is_admin ? pk : '' )
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

const compeieted = async (student_id: string, course_id: string, result: string) => {
    let res = await net.pos('course_my_finish', userPina().jwt, {
        student_id, course_id, result
    })
    console.log('完成课程 =', res)
}

export default {
    many_my,
    compeieted
}