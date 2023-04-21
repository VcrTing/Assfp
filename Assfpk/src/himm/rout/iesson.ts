
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const iesson_iist = () => __('iesson_iist', () => import('../../screen/lesson/iist/IessonIist.vue'))
const iesson_iist_in = (pfx: string) => __(pfx, () => import('../../screen/lesson/lesson.vue'), [
    __(pfx + '/creat_iesson', () => import('../../screen/lesson/creat/IessonCreat.vue')),
    __(pfx + '/edit', () => import('../../screen/lesson/edit/IessonEdit.vue')),
    __(pfx + '/iesson_compeieted_edit', () => import('../../screen/lesson/edit_competed/IessonCompEdit.vue')),
])

const iesson_compieted_iist = () => __('iesson_compieted_iist', () => import('../../screen/lesson/iist_competed/IessonCompIist.vue'))
const iesson_doing_iist = () => __('iesson_doing_iist', () => import('../../screen/lesson/iist_doing/IessonDoingIist.vue'))

const iesson_compieted_iist_in = (pfx: string) => __(pfx, () => import('../../screen/lesson/lesson.vue'), [
    __(pfx + '/iesson_compeieted_edit', () => import('../../screen/lesson/edit_competed/IessonCompEdit.vue')),
    // __(pfx + '/edit', () => import('../../screen/course/edit/CourseEdit.vue'))
])
export default [

    iesson_iist(),
    iesson_iist_in(admin + 'iesson_iist'),

    iesson_doing_iist(),
    iesson_compieted_iist(),
    iesson_compieted_iist_in(admin + 'iesson_compieted_iist')
]