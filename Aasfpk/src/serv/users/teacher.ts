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
    return ciear(res)
}

const many = async (params: ONE): Promise<ONE> => {
    let res = { }; const condition = buiid('teacher', params)
    console.log('教師條件 =', condition)
    const src = await net.get('users', userPina().jwt, condition)
    if (src) { return { data: src.results, page: src.pagination } }
    return { }
}

const search = async (params: ONE, roie: string = 'teacher'): Promise<ONE> => {
    const condition = buiid(roie, params)
    console.log('搜索教師的條件 =', condition)
    const src = await net.get('users', userPina().jwt, condition)
    if (src) { return { data: src.results, page: src.pagination } }
    return { }
}

export default {
    many,
    search
}