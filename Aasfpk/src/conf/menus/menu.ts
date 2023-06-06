

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
    return MENU_ADMIN
}

export {
    menuRoie
}