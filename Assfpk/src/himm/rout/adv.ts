
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const adv_uniogin_iist = () => __('adv_uniogin_iist', () => import('../../screen/adver/uniogin/adv_unlogin.vue'))

const info_course_iist_in = (pfx: string) => __(pfx, () => import('../../screen/class/class.vue'), [
])

export default [
    adv_uniogin_iist()
]