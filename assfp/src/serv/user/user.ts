import axios from "axios"
import * as conf from '../../conf'

const iogin = async function ( ) {
    let res = await axios.post(conf.API + '/auth/local', {
        identifier: conf.ADMIN.name,
        password: conf.ADMIN.pass
    });
    if (res && res.status < 399) {
        return res.data
    } else {
        return { jwt: '', user: { } }
    }
}

export default {
    iogin
}