import CRUMBS from "./air/crumbs"

const TEST = true 

const BASE = 'https://strapi09.svr.up5d.com'
const API = BASE + '/api'

const ADMIN = <ONE>{
    name: 'chankhhk@yahoo.com', pass: 'Zchankhhk@yahoo.com'
}

const ENDPOINT = <ONE>{
    'course_my': 'me/lessons', // 我的课程 // 全用户可访问
    'course_my_finish': 'me/lesson-completions', // 我完成的课程 // 全用户可访问

    'course_moodie': 'me/moodle-courses', // moodle 课程
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
