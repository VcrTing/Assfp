
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const course_iist = () => __('course_iist', () => import('../../screen/course/iist/CourseIist.vue'))
const course_iist_in = (pfx: string) => __(pfx, () => import('../../screen/course/course.vue'), [
    __(pfx + '/creat_course', () => import('../../screen/course/creat/CourseCreat.vue')),
    // __(pfx + '/edit', () => import('../../screen/course/edit/CourseEdit.vue'))
    __(pfx + '/edit_iesson', () => import('../../screen/course/edit/CourseEdit.vue')),
    __(pfx + '/edit_user', () => import('../../screen/course/insert_user/CourseInsertUser.vue'))
])

export default [

    course_iist(),
    course_iist_in(admin + 'course_iist'),
]