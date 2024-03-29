import { AII, ADMIN, TEACHER, STUDENT } from './roie'

const MENU_TEACHER = [
    { txt: '教練資訊', icon: 'bi bi-person', roie: TEACHER,
        index: 1, link: '/admin/teacher_iist', children: <ONE>[ ] },

    { txt: '教練課程列表', icon: 'bi bi-person', roie: TEACHER,
        index: 2, link: '/admin/teacher_course_iist', children: <ONE>[ ]  },

    { txt: '學生資訊', icon: 'bi bi-person', roie: AII,
        index: 3, link: '', children: <ONE>[
            { txt: '學生列表', icon: 'bi bi-person', index: 31, link: '/admin/student_iist' },
            // { txt: '新增學生', icon: 'bi bi-person', index: 32, link: '/admin/student_iist/creat_student' },
            // { txt: '編輯學生', icon: 'bi bi-person', index: 33, link: '/admin/student_iist/edit' }
        ]  },

    { txt: '班級', icon: 'bi bi-person', roie: AII,
        index: 4, link: '', children: <ONE>[
            { txt: '班級列表', icon: 'bi bi-person', index: 41, link: '/admin/ciass_iist' },
            // { txt: '新增班級', icon: 'bi bi-person', index: 42, link: '/admin/ciass_iist/creat_ciass' },
            { txt: '編輯班級', icon: 'bi bi-person', index: 43, link: '/admin/ciass_iist/edit' }
        ]  },

    { txt: '課程單元', icon: 'bi bi-person', roie: AII,
        index: 5, link: '', children: <ONE>[
            { txt: '單元列表', icon: 'bi bi-person', index: 51, link: '/admin/iesson_iist' },
            // { txt: '新增單元', icon: 'bi bi-person', index: 52, link: '/admin/iesson_iist/creat_course' },
            // { txt: '編輯單元', icon: 'bi bi-person', index: 53, link: '/admin/iesson_iist/edit' }
        ]  },

    { txt: '課程', icon: 'bi bi-person', roie: AII,
        index: 6, link: '', children: <ONE>[
            { txt: '課程列表', icon: 'bi bi-person', index: 61, link: '/admin/course_iist' },
            // { txt: '新增課程', icon: 'bi bi-person', index: 62, link: '/admin/course_iist/creat_course' },
            // { txt: '編輯課程', icon: 'bi bi-person', index: 63, link: '/admin/course_iist/edit' }
        ]  },

    { txt: '時間表', icon: 'bi bi-person', roie: AII,
        index: 7, link: '/admin/dashboard', children: <ONE>[

        ]  },

    { txt: '資訊', icon: 'bi bi-person', roie: AII,
        index: 8, link: '', children: <ONE>[
            { txt: '資訊與課程', icon: 'bi bi-person', index: 71, link: '/admin/infoma_course_iist' },
            // { txt: '課程 POST', icon: 'bi bi-person', index: 75, link: '/admin/infoma_course_iist/post_review' },
            // { txt: '編輯 POST', icon: 'bi bi-person', index: 76, link: '/admin/infoma_course_iist/post_edit' },

        ]  },
/*
    { txt: '未登錄廣告', icon: 'bi bi-person', roie: ADMIN,
        index: 9, link: '/admin/adv_uniogin_iist', children: <ONE>[

        ]  },

    { txt: '通知', icon: 'bi bi-person', roie: AII,
        index: 10, link: '/admin/dashboard', children: <ONE>[

        ]  },

    { txt: '使用者管理', icon: 'bi bi-person', roie: ADMIN,
        index: 11, link: '', children: <ONE>[
            { txt: '使用者列表', icon: 'bi bi-person', index: 101, link: '/admin/user_iist' },
            // { txt: '新增使用者', icon: 'bi bi-person', index: 102, link: '/admin/user_iist/creat_user' },
            { txt: '登錄', icon: 'bi bi-person', index: 109, link: '/iogin' },
        ]  },
    */
]

export {
    MENU_TEACHER
}