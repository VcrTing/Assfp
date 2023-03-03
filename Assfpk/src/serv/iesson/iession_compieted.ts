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


export default {
    many
}