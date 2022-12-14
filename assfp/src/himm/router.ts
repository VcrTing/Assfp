import { createRouter, createWebHashHistory } from 'vue-router'

import web from './rout/web';
import admin from './rout/admin';
import studen from './rout/student';
import teacher from './rout/teacher';
import admin_other from './rout/admin_other';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/admin' },
        {
            path: '/admin', redirect: '/admin/user_iist',
            component: () => import('../screen/home/Home.vue'),
            children: [
                ...web,
                ...admin,
                ...studen,
                ...teacher,
                ...admin_other
            ]
        },
    ],
});

export default router;