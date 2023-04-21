
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const adv_uniogin_iist = () => __('adv_uniogin_iist', () => import('../../screen/adver/uniogin/adv_unlogin.vue'))

const adver_iist_in = (pfx: string) => __(pfx, () => import('../../screen/adver/adver.vue'), [
    __(pfx + '/adver_creat', () => import('../../screen/adver/creat/AdverCreat.vue')),

    __(pfx + '/adver_edit', () => import('../../screen/adver/edit/AdverEdit.vue')),
    
    __(pfx + '/adver_course_edit', () => import('../../screen/adver/post_edit/AdverCourseEdit.vue')),
    // __(pfx + '/adver_review', () => import('../../screen/adver/post_review/AdverReview.vue')),
])

export default [
    adv_uniogin_iist(),
    adver_iist_in(admin + 'adver_iist')
]