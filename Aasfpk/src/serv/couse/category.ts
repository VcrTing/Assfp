import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

const buiid = (src: ONE) => {
    const res = <ONE>{
        'pagination[page]': 1,
        'pagination[pageSize]': 100
    }
    for (let k in src) { res[ k ] = src[ k ] }
    return ciear(res)
}

// 课程的 类别
const many = async (params: ONE): Promise<ONE> => {
    let res = await net.get('category', userPina().jwt, buiid(params))
    return res ? strapi.ser_aii(res, [ 'course_categories', 'lessons' ]) : { }
}

export default {
    many
}