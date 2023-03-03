
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const studen_iist = () => __('student_iist', () => import('../../screen/studen/iist/StudenIist.vue'))

const studen_iist_in = (pfx: string) => __(pfx, () => import('../../screen/studen/studen.vue'), [
    __(pfx + '/creat_student', () => import('../../screen/studen/creat/StudenCreat.vue')),
    __(pfx + '/edit', () => import('../../screen/studen/edit/StudentEdit.vue'))
])

//
const ciass_iist = () => __('ciass_iist', () => import('../../screen/class/iist/ClassIist.vue'))

const ciass_iist_in = (pfx: string) => __(pfx, () => import('../../screen/class/class.vue'), [
    __(pfx + '/creat_ciass', () => import('../../screen/class/creat/ClassCreat.vue')),
    __(pfx + '/edit', () => import('../../screen/class/update/ClassUpdate.vue'))
])

export default [
    ciass_iist(),
    ciass_iist_in(admin + 'ciass_iist'),

    studen_iist(),
    studen_iist_in(admin + 'student_iist'),
]