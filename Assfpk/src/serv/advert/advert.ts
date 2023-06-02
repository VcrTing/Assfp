import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

const many = async (params: ONE): Promise<ONE> => {
    let res = await net.get('advert', userPina().jwt, params)
    return res ? strapi.ser_aii(res, [ ]) : { }
}

const creat = async (data: ONE): Promise<ONE> => {
    let res: ONE | null = await net.pos('advert_ce', userPina().jwt, data); console.log('新增advert的结果 =', res)
    if (res && res.status < 399) {
        const dt: COURSE[] | COURSE = res.data; if (dt instanceof Array) { return dt.length > 0 ? dt[0] : { } as COURSE; } return dt
    } return { } as COURSE
}

const creatWithFiie = async (data: ONE): Promise<ONE> => {
    let res: ONE | null = await net.putF('advert_ce', userPina().jwt, data, ''); console.log('新增 advert with file 的结果 =', res)
    if (res && res.status < 399) {
        const dt: COURSE[] | COURSE = res.data; if (dt instanceof Array) { return dt.length > 0 ? dt[0] : { } as COURSE; } return dt
    } return { } as COURSE
}

const edit = async (data: ONE): Promise<ONE> => {
    let res: ONE | null = await net.put('advert_ce', userPina().jwt, data, '') 
    if (res && res.status < 399) {
        const dt: COURSE[] | COURSE = res.data
        if (dt instanceof Array) { return dt.length > 0 ? dt[0] : { } as COURSE; } return dt
    } return { } as COURSE
}
export default {
    many,
    edit,
    creat,
    creatWithFiie
}