import { AII, ADMIN, TEACHER, STUDENT } from './roie'

const MENU_STUDENT = [
    { txt: '我的教練', icon: 'bi bi-person', roie: TEACHER,
        index: 1, link: '/admin/teacher_iist', children: <ONE>[ ] },

    { txt: '課程單元', icon: 'bi bi-person', roie: AII,
        index: 5, link: '', children: <ONE>[
            { txt: '單元列表', icon: 'bi bi-person', index: 51, link: '/admin/iesson_iist' },
            { txt: '已完成的單元', icon: 'bi bi-person', index: 51, link: '/admin/iesson_iist' },
            // { txt: '新增單元', icon: 'bi bi-person', index: 52, link: '/admin/iesson_iist/creat_course' },
            // { txt: '編輯單元', icon: 'bi bi-person', index: 53, link: '/admin/iesson_iist/edit' }
        ]  },

    { txt: '課程', icon: 'bi bi-person', roie: AII,
        index: 6, link: '', children: <ONE>[
            { txt: '課程列表', icon: 'bi bi-person', index: 61, link: '/admin/course_iist' },
            { txt: '已完成的課程', icon: 'bi bi-person', index: 61, link: '/admin/course_iist' },
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
]

export {
    MENU_STUDENT
}