import CRUMBS from "./conf/menus/crumbs"
import { ROIES, IOGIN, roieType } from "./conf/contro_roie"

const TEST = true 
const ROIE = 'admin'

const BASE = 'https://strapi09.svr.up5d.com'
const API = BASE + '/api'

const ADMIN = IOGIN[ ROIE ]

const ENDPOINT = <ONE>{

    // 課程 分類
    // 'category': 'getCourseCategory',
    'category': 'moodle-course-categories', // moodle 课程 类别

    // 課程
    'courses': 'moodle-courses',
    'courses_finish': 'course-completions', // 完成的课程

    // 非 ADMIN 課程
    'course_my': 'me/moodle-courses', // moodle 课程
    'course_my_finish': 'me/course-completions', // 完成的课程

    // 創建課程
    'course_creat': 'moodle-courses/createCourse',
    
    'course_add_iesson': 'lesson/addLessons', // 为课程 加入 單元
    'course_add_user': 'moodle-courses/enrolUser', // 为课程 加入 学生
    'course_inn_user': 'moodle-courses/unrolUser', // 为课程 移除 学生

    // 單元
    'iessons': 'lessons',
    'iesson_my': 'me/lessons', // 我的课程 // 全用户可访问
    'iesson_add': 'lesson/addLessons', // 新增 或 修改 课程

    // 完成的
    'iesson_finish': 'lesson-completions', // 完成的
    'iesson_my_finish': 'me/lesson-completions', // 我完成的课程 // 全用户可访问

    //
    'notific': 'notifications', // 提醒

    'advert': 'advertisements', // 广告
    'advert_ce': 'advertisements/addAdvertisement',

    // 網站用戶
    'users': 'users', // 所有 用户
    'admin_register': 'users-permissions/admin/registerUser',
    //
    'user_heaith': 'users-permissions/users/health_detail'
}

export {
    TEST,
    BASE, API, ADMIN,
    CRUMBS, ENDPOINT
}
