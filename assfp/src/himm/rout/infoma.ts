
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const info_course_iist = () => __('infoma_course_iist', () => import('../../screen/infoma/course/iist/InfomaCourseIist.vue'))

const info_course_iist_in = (pfx: string) => __(pfx, () => import('../../screen/class/class.vue'), [
])

export default [
    info_course_iist()
]