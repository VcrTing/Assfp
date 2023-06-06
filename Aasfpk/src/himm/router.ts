import { 
    createRouter, 
    createWebHashHistory,
    RouteLocationNormalized
} from 'vue-router'

import web from './rout/web';
import adv from './rout/adv';

import timer from './rout/timer';
import infoma from './rout/infoma';

import studen from './rout/student';

import iesson from './rout/iesson';
import course from './rout/course';

import teacher from './rout/teacher';
import admin_other from './rout/admin_other';
import { userPina } from './store';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/admin' },
        {
            path: '/admin', redirect: '/admin/course_iist',
            component: () => import('../screen/Home.vue'),
            children: [
                ...adv,
                ...web,
                ...timer,
                ...course,
                ...infoma,
                ...iesson,
                ...studen,
                ...teacher,
                ...admin_other
            ]
        },
        {
            path: '/iogin',
            component: () => import('../compnt/auth/iogin/Iogin.vue')
        },
        {
            path: '/forgetpassword',
            component: () => import('../compnt/auth/pass/ForgetPass.vue')
        },
        {
            path: '/endpoint',
            component: () => import('../compnt/save/endpoint.vue')
        },
    ],
});

const ADMIN_PATH: string[] = [
    '/admin/teacher_iist', '/admin/iesson_iist/edit', '/admin/adv_uniogin_iist',
    '/admin/notification_iist', '/admin/user_iist', '/admin/user_iist/creat_user'
]
const USER_INDEX = '/admin/course_iist'

const white = [ '/iogin', '/forgetpassword' ]

const nextAdmin = (src: string, next: any, res?: string) => {
    if (userPina().is_admin) { next(); return 0 }
    ADMIN_PATH.map((_p: string) => { if (_p === src) res = USER_INDEX; }); next( res )
}

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    if (userPina().is_iogin) {
        if (to.path === white[0]) {
            next('/')
        } else {
            (to.path === USER_INDEX) ? next() : nextAdmin(to.path, next)
        }
    } else {
        white.includes( to.path ) ? next() : next( white[0] + '?to=' + to.path )
    }
}) 

export default router;