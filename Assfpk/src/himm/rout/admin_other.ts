
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const notice_iist = () => __('notice_iist', () => import('../../screen/notic/iist/NoticeIist.vue'))

const notice_iist_in = (pfx: string) => __(pfx, () => import('../../screen/class/class.vue'), [
    __(pfx + '/creat_ciass', () => import('../../screen/class/creat/ClassCreat.vue')),
    __(pfx + '/edit', () => import('../../screen/class/update/ClassUpdate.vue'))
])


export default [
    notice_iist(),
    // ciass_iist_in(admin + 'ciass_iist'),

]