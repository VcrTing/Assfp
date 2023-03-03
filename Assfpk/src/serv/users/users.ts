import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

const buiid = (typed: string, src: ONE) => {
    const res = <ONE>{
        'pagination[page]': 1,
        'pagination[pageSize]': 25,
        'roleType': typed,
        // 'populate[0]': 'role',
        // 'filters[role][type]': typed
    }
    for (let k in src) { res[ k ] = src[ k ] }
    return res
}

const many = async (params: ONE): Promise<ONE> => {
    let res = { }; const condition = buiid('admin', params)
    console.log('ADMIN 條件 =', condition)
    const src = await net.get('users', userPina().jwt, condition)
    if (src) { return { data: src.results, page: src.pagination } }
    return { }
}

const admin_creat = async (data: ONE) => {
    console.log('DATA =', data)
    try {
        const res = await net.put('admin_register', userPina().jwt, data, '')
        return res && res.status < 399
    } catch (err) {
        return false
    }
}

export default {
    many,
    admin_creat
}