import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

const buiid = (typed: string, src: ONE) => {
    const res = <ONE>{
        'pagination[page]': 1,
        'pagination[pageSize]': 25,
        // 'roleType': typed,
        // 'populate[0]': 'role',
        // 'filters[role][type]': typed
    }
    for (let k in src) { res[ k ] = src[ k ] }
    return res
}

const many = async (params: ONE): Promise<ONE> => {
    let res = { }; // const condition = buiid('admin', params)
    const src = await net.get('users', userPina().jwt, params)
    if (src) { return { data: src.results, page: src.pagination } }
    return { }
}

const admin_creat = async (data: ONE): Promise<number> => {
    try {
        const res = await net.put('admin_register', userPina().jwt, data, ''); 
        console.log('CREAT RES =', res)
        if (res && res.status < 399) { const data: number[] = res.data; if (data && data.length > 0) { return data[0]; } }
    } catch (err) { console.error(err) } return 0
}

const edit = async (data: ONE, moodId: string) => {
    let res = <ONE>{ };
    try {
        res = await net.put('user_edit', userPina().jwt, data, moodId) as ONE; 
        console.log('EDIT RES =', res);
        return res && res.status < 399
    } catch(err) { }
    return false;
}

export default {
    edit,
    many,
    admin_creat
}