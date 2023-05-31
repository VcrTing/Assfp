
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

const news_iist = () => __('news_iist', () => import('../../screen/news/iist/NewIist.vue'))

// Notification
const notification_iist = () => __('notification_iist', () => import('../../screen/notification/iist/NotificationIist.vue'))
const notification_iist_in = (pfx: string) => __(pfx, () => import('../../screen/notification/notification.vue'), [
    __(pfx + '/creat_notific', () => import('../../screen/notification/creat/NotificCreat.vue')),
    __(pfx + '/edit_notific', () => import('../../screen/notification/edit/NotificEdit.vue')),
])

export default [
    news_iist(),

    notification_iist(),
    notification_iist_in(admin + 'notification_iist')
]