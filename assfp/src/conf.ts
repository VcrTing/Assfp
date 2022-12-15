import CRUMBS from "./air/crumbs"

const TEST = true 

const BASE = 'http://localhost:1337'
const API = BASE + '/api'

const ADMIN = <ONE>{
    name: 'vcrting@163.com', pass: '123456'
}

const ENDPOINT = <ONE>{
    'user': '/user-permission'
}

export {
    TEST,
    BASE, API, ADMIN,
    CRUMBS, ENDPOINT
}

declare global {
    type ONE = { [k: string]: any }
    type MANY = ONE[ ]
}
