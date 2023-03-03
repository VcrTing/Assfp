

import { MENU_ADMIN } from './menu_admin'
import { MENU_STUDENT } from './menu_student'
import { MENU_TEACHER } from './menu_teacher'

// 提出该权限的 菜单
const menuRoie = (typed: string): ONE[ ] => {
    let res: ONE[ ] = [ ]
    if (typed === 'student') {
        return MENU_STUDENT
    } else if (typed === 'teacher') {
        return MENU_TEACHER
    }
    /*
    MENU.map( (e: ONE) => {
        if (e.roie.indexOf( typed ) > -1) {
            res.push( e )
        }
    }); 
    */
    return MENU_ADMIN
}

export {
    menuRoie
}

            /*
            { txt: '教練課程列表', icon: 'bi bi-person', index: 21, link: '/admin/teacher_course_iist' },
            { txt: '新增教練課程', icon: 'bi bi-person', index: 22, link: '/admin/teacher_course_iist/creat_teacher_course' },
            { txt: '編輯教練課程', icon: 'bi bi-person', index: 23, link: '/admin/teacher_course_iist/edit' },
            */