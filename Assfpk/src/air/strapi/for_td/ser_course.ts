
const vai_status = <ONE>{
    'true': '啟用',
    'false': '完成/通過'
}

export default {
    // 封面
    cover: (one = <COURSE>{ }) => {
        let res: IMAGE = { } as IMAGE
        if (one.course_shop_url) return one['course_shop_url'];
        const src: IMAGE[ ] | IMAGE = one.course_image ? one.course_image : [ ]
        if (src instanceof Array) {
            res = src[ 0 ] ? src[ 0 ] : <IMAGE>{ }
        } else {
            res = src
        } return res[ 'fileurl' ]
    },
    // 類型
    course_type: (one: COURSE) => {
        const typed: ONE = one ? one.course_type : <ONE>{ }
        if (typed) {
            return typed.categoryname
        }
        return ''
    },

    // 价格
    price: (one: COURSE) => {
        let prs: string = one ? one.course_price : ''
        prs = prs ? prs : ''
        return prs ? ('' + prs) : '免費'
    },

    // 状态
    status: (one: COURSE) => {
        const res: boolean = one ? one.course_active : false
        return vai_status[ res + '' ]
    },

    // 單元
    iesson_num: (one = <COURSE>{ }) => {
        return one.total_lesson ? one.total_lesson : ''
    },

    // 话题
    topic_num: (one = <COURSE>{ }) => {
        const tps: MANY = one.course_topic ? one.course_topic : [ ]
        return tps.length
    },

    // 教師
    teacher: (one = <COURSE>{ }) => {
        const _n = one.teacher_name
        return _n ? _n : '' 
    }
}