
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }


//
const teacher_course_iist = () => __('teacher_course_iist', () => import('../../screen/teacher_course/iist/TeacherCourseIist.vue'))

//
const teacher_iist = () => __('teacher_iist', () => import('../../screen/teacher/iist/TeacherIist.vue'))

const teacher_iist_in = (pfx: string) => __(pfx, () => import('../../screen/teacher/teacher.vue'), [
    __(pfx + '/teacher_creat', () => import('../../screen/teacher/creat/TeacherCreat.vue')),
    // __(pfx + '/edit', () => import('../../screen/course/edit/CourseEdit.vue'))
])
export default [
    teacher_iist(),
    teacher_iist_in(admin + 'teacher_iist'),
    teacher_course_iist()
]