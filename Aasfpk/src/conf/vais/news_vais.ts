import strapi from "../../air/strapi"
import { BASE } from '../../conf'

const IANG_TRANSF = <ONE>{
    'en': 'en',
    'zh_CN': 'zh-Hant',
    'zh_HK': 'zh-Hans'
}

const LAYOUT_NUMBER_TO_IDX = <ONE>{
    '2': 0,
    '4': 1,
    '2_1': 2
}

export default {
    cover: (one: ONE = { }): string => {
        const banner = one.banner ? one.banner : { }
        const _one = strapi.data( banner ) as ONE
        return _one.url ? BASE + _one.url : ''
    },
    titie: (one: ONE = { }, iang = 'zh_HK') => {
        const src: ONE = one.title ? one.title : { }
        return src[iang] ? src[iang] : null
    },
    course_original_price: (one: ONE = { }) => {
        const src: ONE = one.course_price ? one.course_price : { }
        return src.original_price ? src.original_price : null
    },
    course_price: (one: ONE = { }) => {
        const src: ONE = one.course_price ? one.course_price : { }
        return src.price ? src.price : null
    },
    is_member_price: (one: ONE = { }) => {
        const src: ONE = one.course_price ? one.course_price : { }
        return src.price_type ? src.price_type === 'member_price' : false
    },
    is_course: (one: ONE = { }) => {
        return one.type === 'course'
    },
    course_shortcode: (one: ONE = { }) => {
        const src = one.moodle_course
        let res = ''
        if (src) {
            if (src.data) {
                const _course: ONE = strapi.dataed(src)
                res = _course ? _course.shortcode : ''
            } else {
                res = src.shortcode
            }
        }
        return res
    },
    message_content: (one: ONE = { }, iang = 'zh_HK') => {
        const src = one.message_content
        let res = ''
        if (src[iang]) {
            const _o: ONE = src[iang]
            if (_o) { res = _o.headings }
        } 
        else if (src[IANG_TRANSF[iang]]) {
            const _o: ONE = src[IANG_TRANSF[iang]]
            if (_o) { res = _o.headings }
        }
        return res
    },
    typedTit: <ONE>{
        'course': '課程',
        'trash': '刪除',
        'latest_news': '最新消息'
    },
    typed: [
        { txt: '課程', code: 'course' },
        { txt: '刪除', code: 'trash' },
        { txt: '最新消息', code: 'latest_news' }
    ],

    layouToIndex: (one: ONE) => {
        const iyt = one.layout
        let things = [ ]
        if (iyt) {
            for (const k in iyt) {
                if (iyt[k]) {
                    things.push(iyt[k].length)
                }
            }
        }
        return LAYOUT_NUMBER_TO_IDX[ things.join('_') ]
    },

    iangTit: { en: '英文', zh_HK: '中文繁體', zh_CN: '中文簡體' },
    iangs: [ { txt: '英文', code: 'en' }, { txt: '中文簡體', code: 'zh_CN' }, { txt: '中文繁體', code: 'zh_HK' }, ],
}