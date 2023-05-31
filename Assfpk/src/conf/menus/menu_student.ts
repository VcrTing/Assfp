import { userPina } from '../../himm/store'
import { AII, ADMIN, TEACHER, STUDENT } from './roie'

const MENU_STUDENT = [

    { txt: '課程', icon: 'bi bi-book-half', roie: AII,
        index: 1, link: '', children: <ONE>[
            { txt: '全部課程', icon: '', index: 11, link: '/admin/course_iist' },
            { txt: '已完成的課程', icon: '', index: 13, link: '/admin/course_competed_iist' },
        ]  },

    { txt: '課程單元', icon: 'bi bi-list-ul', roie: AII,
        index: 5, link: '', children: <ONE>[
            { txt: '全部單元', icon: '', index: 51, link: '/admin/iesson_iist' },
            { txt: '進行中', icon: '', index: 55, link: '/admin/iesson_doing_iist' },
            { txt: '已完成', icon: '', index: 56, link: '/admin/iesson_compieted_iist' },
        ]  },


    { txt: '我的教練', icon: 'bi bi-person-vcard', roie: AII,
        index: 6, link: '/admin/teacher_iist', children: <ONE>[

        ]  },

    { txt: '時間表', icon: 'bi bi-calendar-date', roie: AII,
        index: 7, link: '/admin/timer_iist', children: <ONE>[

        ]  },

    /*
    { txt: '資訊 / 消息', icon: 'bi bi-card-heading', roie: ADMIN,
        index: 8, link: '/admin/news_iist', children: <ONE>[

        ]  },

    { txt: '廣告', icon: 'bi bi-badge-ad-fill', roie: ADMIN,
        index: 9, link: '/admin/adv_uniogin_iist', children: <ONE>[
            
        ]  },
        
    { txt: '通知 / 提醒', icon: 'bi bi-app-indicator', roie: AII,
        index: 10, link: '/admin/notification_iist', children: <ONE>[

        ]  },
    */

    { txt: '退出登錄', icon: 'bi bi-box-arrow-left', roie: ADMIN,
        index: 11, link: '/iogin', children: <ONE>[
        ],
        hook: (v: ONE) => { userPina().iogout() }
    },
        
]

export {
    MENU_STUDENT
}