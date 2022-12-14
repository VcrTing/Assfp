import axios from 'axios'

import { API, timeout, ENDPOINT } from '../net-conf'

interface _Net {
    get( endpoint: string, token: string, params: object, suffix?: string ): Promise<object | null>;
    pos( endpoint: string, token: string, data: object, params: object, suffix?: string ): Promise<object | null>;
    put( endpoint: string, token: string, data: object, params: object, suffix?: string ): Promise<object | null>;
}

class NeTooi {
    // 构建 链接
    uri(api: string, endpoint: string, suffix: string = ''): string { return api + '/' + (ENDPOINT as any)[ endpoint ] + '/' + suffix }
    // 构建 HEADERS
    headers (jwt: string | null): object { return { 'content-type': 'application/json', 'Authorization': 'Bearer ' + jwt } }
    // 构建 QUERY PARAMS
    params (condition: any, res: string = '?'): string { if (JSON.stringify(condition) != '{}') { for (const k in condition) { res += ( k + '=' + condition[k] + '&' ) } } return res }
}

class Net extends NeTooi implements _Net {

    async get(endpoint: string, token: string, params: object, suffix?: string | undefined): Promise<object | null> {
        const uri = super.uri(API, endpoint, suffix)
        let res = await axios.get(uri, { headers: super.headers(token), params })
        return (res && res.status < 399) ? res.data : false
    }
    async pos(endpoint: string, token: string, data: object, params: object, suffix?: string | undefined): Promise<object | null> {
        const uri = super.uri(API, endpoint, suffix)
        return await axios.post(uri, data, { headers: super.headers(token), params })
    }
    async put(endpoint: string, token: string, data: object, params: object, suffix?: string | undefined): Promise<object | null> {
        const uri = super.uri(API, endpoint, suffix)
        return axios.put(uri, data, { headers: super.headers(token), params })
    }

    /*
    async __net(url: string, method: 'GET' | 'POST' | 'PUT', data: object, params: object, headers: object): Promise<object | null> {
        console.log('URL =', url, ' data =', data, method)
        return await axios({ url, method, data, params, headers, timeout })
    }

        let uri = super.uri(vue.conf.API, endpoint, suffix)
        let res = await this.__net(uri, 'GET', { }, params, super.headers(vue.jwt()))
        return res
    */
}

export default new Net()