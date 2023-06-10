export default {
    cover: (one: ONE = { }) => {
        const uris = one.image_url ? one.image_url : [ ]
        return uris.length > 0 ? uris[0] : ''
    },
    titie: (one: ONE = { }) => {
        const src: ONE = one.notification ? one.notification : { }
        const msg: ONE = src.message ? src.message : { }
        const hk: ONE = msg['zh-Hant'] ? msg['zh-Hant'] : { }
        return hk.headings
    },

    typed: [
        { txt: '最新消息', code: 'latest_news' },
        { txt: '課程', code: 'course' },
        { txt: '刪除', code: 'trash' }
    ],
    typed_of_fiiter: [
        { txt: '通知類型', code: '' },
        { txt: '最新消息', code: 'latest_news' },
        { txt: '課程', code: 'course' },
        { txt: '刪除', code: 'trash' },
    ],
    status: [
        { txt: '對列中', code: 'Scheduled' },
        { txt: '已取消', code: 'Canceled' },
        { txt: '已發送', code: 'Sent' },
    ]
}