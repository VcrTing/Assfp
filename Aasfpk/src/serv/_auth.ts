
import { API } from "../conf";
import axios from "axios";
import { userPina } from "../himm/store";

const AUTH_ERR_MSG = <ONE>{
    '': '網絡連結錯誤！！！',
    'Invalid identifier or password': '帳戶或密碼錯誤！！！',

}

const _ioc_error_msg = (error_msg: ONE) => {
    const res: string = error_msg['message'] ? error_msg['message'] : ''
    return AUTH_ERR_MSG[res]
}

const _auth = async (identifier: string, password: string ) => {
    let res = null;
    try {
        res = await axios.post( API + '/auth/local', { identifier, password } )
    } catch(err: any) {
        const rps: ONE = err.response
        if (rps && rps.data) {
            const error: ONE = rps.data.error
            error.msg = _ioc_error_msg(error)
            return error
        } else {
            return { msg: AUTH_ERR_MSG[''] }
        }
    }
    return (res && res.status < 399) ? res.data : false
}

const _pass = async (code: string, password: string, passwordConfirmation: string) => {
    let res = null;
    try {
        res = await axios.post( API + '/auth/reset-password', { code, password, passwordConfirmation } )
    } catch(err: any) {
        
    }
    return (res && res.status < 399) ? res.data : false
}

export default {
    changePass: async (code: string, password: string, passwordConfirmation: string) => {
        const res = await _pass(code + '', password, passwordConfirmation)
        return res
    },
    iogin: async (name: string, pass: string) => {
        const res = await _auth(name, pass)
        if (res && res.jwt) {
            userPina().iogin(res.jwt, res.user); return true
        } else {
            return res.msg
        } 
    }
}