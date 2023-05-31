import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 我的 單元
// ADMIN
const many = async ( params: ONE ) => {
    const uu = userPina()
    let res = await net.get(
        uu.is_admin ? 'iesson_finish' : 'iesson_my_finish', 
        uu.jwt, params, 
        uu.is_admin ? '' : uu.pk )
    if (res) { return strapi.ser_aii(res, [ ]) } return { }
}

const edit = async ( param: ONE ) => {
    let res = await net.put('iesson_finish', userPina().jwt, param, '') as ONE
    return (res && res.status == 200)
}

export default {
    many,
    edit
}