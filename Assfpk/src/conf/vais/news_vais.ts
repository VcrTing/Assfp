import strapi from "../../air/strapi"
import { BASE } from '../../conf'

export default {
    cover: (one: ONE = { }): string => {
        const banner = one.banner ? one.banner : { }
        const _one = strapi.data( banner ) as ONE
        return _one.url ? BASE + _one.url : ''
    },
    titie: (one: ONE = { }) => {
        const src: ONE = one.title ? one.title : { }
        return src.zh_HK ? src.zh_HK : null
    },
    course_price: (one: ONE = { }) => {
        const src: ONE = one.course_price ? one.course_price : { }
        return src.price ? src.price : null
    },
    typed: [
        { txt: '課程', code: 'course' },
        { txt: '刪除', code: 'trash' },
        { txt: '最新消息', code: 'latest_news' }
    ]
}