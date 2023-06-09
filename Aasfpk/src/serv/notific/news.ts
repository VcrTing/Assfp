import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

// 所有 提醒
const many = async (params: ONE): Promise<ONE> => {
    let res = await net.get('news', userPina().jwt, params)
    return res ? strapi.ser_aii(res, [ ]) : { }
}

// 单个 提醒
const one = async (params: ONE, pk: string): Promise<ONE> => {
    let res = await net.get('news', userPina().jwt, params, pk)
    console.log('单个 =', res)
    if (res) {
        
    }
    return res ? { } : { } // strapi.ser_aii(res, [ ])
}

// 创建 提醒
const creat = async (data: ONE): Promise<boolean> => {
    console.log('创建 數據 =', data)
    let res = await net.putF('news', userPina().jwt, data, '')
    console.log('创建 結果 =', res)
    if (res) { }
    return res ? true : false
}

// Canceled 
const canceied = async (uids: number|string[]): Promise<boolean> => {
    let res = await net.put('news', userPina().jwt, {
        'uid': uids, 'status': 'Canceled'
    }, '')
    console.log('Canceled res =', res)
    if (res) {
        
    }
    return res ? true : false
}

export default {
    one,
    many,
    creat,
    canceied
}