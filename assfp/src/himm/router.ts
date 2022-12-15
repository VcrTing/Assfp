import { createRouter, createWebHashHistory } from 'vue-router'

import web from './rout/web';
import adv from './rout/adv';

import infoma from './rout/infoma';
import studen from './rout/student';
import teacher from './rout/teacher';
import admin_other from './rout/admin_other';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/admin' },
        {
            path: '/admin', redirect: '/admin/user_iist',
            component: () => import('../screen/Home.vue'),
            children: [
                ...adv,
                ...web,
                ...infoma,
                ...studen,
                ...teacher,
                ...admin_other
            ]
        },
        {
            path: '/iogin',
            component: () => import('../compnt/auth/iogin/Iogin.vue')
        }
    ],
});

export default router;