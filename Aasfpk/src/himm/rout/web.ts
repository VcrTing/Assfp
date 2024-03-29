
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const dashboard = () => __('dashboard', () => import('../../screen/dashoard/dashboard.vue'))
//
const user_iist = () => __('user_iist', () => import('../../screen/user/iist/UserIist.vue'))

const user_iist_in = (pfx: string) => __(pfx, () => import('../../screen/user/user.vue'), [
    __(pfx + '/creat_user', () => import('../../screen/user/creat/UserCreat.vue')),
    __(pfx + '/edit', () => import('../../screen/user/edit/UserEdit.vue')),
])

// 
const reset_password = () => __('reset_password', () => import('../../screen/user/change_password/UserChangePassword.vue'))

export default [
    dashboard(),
    user_iist(),
    user_iist_in(admin + 'user_iist'),

    reset_password()
]