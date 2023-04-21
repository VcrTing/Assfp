import moment from "moment";
import vai from "../../air/vai";
export default {
    // 生成 FORM ERR
    gen_form_err: (form = <ONE>{ }) => {
        let res = <ONE>{ }
        for(let k in form) {
            res[ k ] = false
        }
        return res
    },
    // 判斷 是否 err
    jude_form_err: (form: ONE, form_err: ONE, ks: string[]) => {
        for (let i= 0; i< ks.length; i++ ) {
            const _k = ks[i]
            if (!form[_k]) { form_err[_k] = true; return false }
            else { form_err[_k] = false }
        }
        return true
    },
    // 嚴正
    ser_timed: (one: ONE, form_err: ONE, key: string, iong: boolean = false) => {
        let src = one[ key ]
        console.log('vai.val_timed(src) =', vai.val_timed(src))
        if (!src) {
            form_err[ key ] = true; return false
        } else {
            src = src.trim()
            const sss = src.split('-')
            if (sss.length < 3) {
                form_err[ key ] = true; return false
            } 
            
            if (iong) {
                const ppp = src.split(':')
                if (ppp.length < 1) {
                    form_err[ key ] = true; return false
                }
            }
            /*
            */
        }
        if (!vai.val_timed(src)) {
            form_err[ key ] = true; return false
        }
        try {
            one[ key ] = moment(src).format('yyyy-MM-DD HH:mm'); form_err[ key ] = false;
        } catch(err) { 
            form_err[ key ] = true; return false 
        }
        return true
    }
}
