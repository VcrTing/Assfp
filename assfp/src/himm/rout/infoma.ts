
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const info_course_iist = () => __('infoma_course_iist', () => import('../../screen/infoma/course/iist/InfomaCourseIist.vue'))

const info_course_iist_in = (pfx: string) => __(pfx, () => import('../../screen/class/class.vue'), [
    __(pfx + '/post_review', () => import('../../screen/infoma/course/post/InfomaCoursePost.vue')),
    __(pfx + '/post_edit', () => import('../../screen/infoma/course/post_edit/InfomaCoursePostEdit.vue')),
])

export default [
    info_course_iist(),
    info_course_iist_in(admin + 'infoma_course_iist'),
]