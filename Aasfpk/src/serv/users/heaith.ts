// users-permissions/users/health_detail
import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

const patch = async (params: ONE = { }, moodie_id: string ) => {
    // params.health_form = iist
    let res = await net.put('user_heaith', userPina().jwt, params, userPina().is_admin ? moodie_id : '')
    console.log('修改的结果 =', res)
    return (res && res.status < 399)
}

export default {
    patch
}