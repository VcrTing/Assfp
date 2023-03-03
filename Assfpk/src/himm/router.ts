import { createRouter, createWebHashHistory } from 'vue-router'

import web from './rout/web';
import adv from './rout/adv';

import timer from './rout/timer';
import infoma from './rout/infoma';

import studen from './rout/student';

import iesson from './rout/iesson';
import course from './rout/course';

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
            path: '/endpoint',
            component: () => import('../compnt/save/endpoint.vue')
        }
    ],
});

export default router;