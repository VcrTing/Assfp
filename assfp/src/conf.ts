import CRUMBS from "./air/crumbs"

const BASE = 'http://localhost:1337'
const API = BASE + '/api'


const ADMIN = {
    name: 'vcrting@163.com',
    pass: '123456'
}

export {
    API,
    BASE,

    ADMIN,

    CRUMBS
}

declare global {
    type ONE = {[k:string]:any}
    type MANY = ONE[]
}
