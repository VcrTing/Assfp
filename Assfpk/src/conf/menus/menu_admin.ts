import { userPina } from '../../himm/store'
import { AII, ADMIN, TEACHER, STUDENT } from './roie'

const MENU_ADMIN = [
    /*
    { txt: '教練資訊', icon: '', roie: TEACHER,
        index: 1, link: '/admin/teacher_iist', children: <ONE>[ ] },

    { txt: '教練課程列表', icon: '', roie: TEACHER,
        index: 2, link: '/admin/teacher_course_iist', children: <ONE>[ ]  },
    */

    { txt: '課程', icon: 'bi bi-book-half', roie: AII,
        index: 1, link: '', children: <ONE>[
            { txt: '課程列表', icon: '', index: 11, link: '/admin/course_iist' },
            { txt: '完成的課程', icon: '', index: 13, link: '/admin/course_competed_iist' },
            // { txt: '添加課程單元', icon: '', index: 13, link: '/admin/course_iist/edit_iesson' },
            // { txt: '添加教練或學生', icon: '', index: 14, link: '/admin/course_iist/edit_user' },
            
            // { txt: '新增課程', icon: '', index: 62, link: '/admin/course_iist/creat_course' },
            // { txt: '編輯課程', icon: '', index: 63, link: '/admin/course_iist/edit' }
        ]  },

    { txt: '教練', icon: 'bi bi-person-vcard', roie: ADMIN,
        index: 4, link: '/admin/teacher_iist', children: <ONE>[

        ]  },

    { txt: '學生', icon: 'bi bi-people', roie: AII,
        index: 3, link: '', children: <ONE>[
            { txt: '學生列表', icon: '', index: 31, link: '/admin/student_iist' },
            { txt: '新增學生', icon: '', index: 32, link: '/admin/student_iist/creat_student' },
            // { txt: '編輯學生', icon: '', index: 33, link: '/admin/student_iist/edit' }
        ]  },

    { txt: '課程單元', icon: 'bi bi-list-ul', roie: AII,
        index: 5, link: '', children: <ONE>[
            { txt: '單元列表', icon: '', index: 51, link: '/admin/iesson_iist' },
            // { txt: '新增單元', icon: '', index: 52, link: '/admin/iesson_iist/creat_iesson' },
            // { txt: '編輯單元', icon: '', index: 53, link: '/admin/iesson_iist/edit' },
            { txt: '進行中', icon: '', index: 55, link: '/admin/iesson_doing_iist' },
            { txt: '已完成', icon: '', index: 56, link: '/admin/iesson_compieted_iist' },
            // { txt: '編輯未完成', icon: '', index: 57, link: '/admin/iesson_iist/iesson_compeieted_edit' },
        ]  },

    { txt: '時間表', icon: 'bi bi-calendar-date', roie: AII,
        index: 7, link: '/admin/timer_iist', children: <ONE>[

        ]  },
    /*
    { txt: '資訊', icon: '', roie: AII,
        index: 8, link: '', children: <ONE>[
            { txt: '資訊與課程', icon: '', index: 71, link: '/admin/infoma_course_iist' },
            // { txt: '課程 POST', icon: '', index: 75, link: '/admin/infoma_course_iist/post_review' },
            // { txt: '編輯 POST', icon: '', index: 76, link: '/admin/infoma_course_iist/post_edit' },

        ]  },
        */
    { txt: '資訊 / 消息', icon: 'bi bi-card-heading', roie: ADMIN,
        index: 8, link: '/admin/news_iist', children: <ONE>[

        ]  },

    { txt: '廣告', icon: 'bi bi-badge-ad-fill', roie: ADMIN,
        index: 9, link: '/admin/adv_uniogin_iist', children: <ONE>[
            /*
            { txt: '未登錄廣告', icon: '', index: 91, link: '/admin/adv_uniogin_iist' },
            { txt: '編輯廣告', icon: '', index: 94, link: '/admin/adver_iist/adver_edit' }
            */
        ]  },
        
    { txt: '通知 / 提醒', icon: 'bi bi-app-indicator', roie: AII,
        index: 10, link: '/admin/notification_iist', children: <ONE>[

        ]  },
        

    { txt: '使用者管理', icon: 'bi bi-person-gear', roie: ADMIN,
        index: 11, link: '', children: <ONE>[
            { txt: '管理員列表', icon: '', index: 101, link: '/admin/user_iist' },
            { txt: '創建用戶', icon: '', index: 102, link: '/admin/user_iist/creat_user' },
            { txt: '退出登錄', icon: '', index: 109, link: '/iogin', hook: (v: ONE) => { userPina().iogout() } },
        ]  },
]

export {
    MENU_ADMIN
}