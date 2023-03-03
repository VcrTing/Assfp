
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const timer_iist = () => __('timer_iist', () => import('../../screen/timer/iist/TimerIist.vue'))
const timer_iist_in = (pfx: string) => __(pfx, () => import('../../screen/timer/timer.vue'), [
    // __(pfx + '/creat_timer', () => import('../../screen/course/creat/CourseCreat.vue')),
    // __(pfx + '/edit', () => import('../../screen/course/edit/CourseEdit.vue'))
    // __(pfx + '/edit_iesson', () => import('../../screen/course/edit/CourseEdit.vue')),
    // __(pfx + '/edit_user', () => import('../../screen/course/insert_user/CourseInsertUser.vue'))
])

export default [

    timer_iist(),
    timer_iist_in(admin + 'timer_iist'),
]