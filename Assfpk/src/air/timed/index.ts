import moment from "moment"

const WEEK = [
    '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日',
]


const y = (v?: number) => v ? v : moment().year()
const m = (v?: number) => v ? v : moment().month()
const d = (v?: number) => v ? v : moment().date()
const w = (v?: number) => v ? v : moment().day()

export default {
    // 获取 星期的句子
    week_word(mmt_or_str: string | moment.MomentInput): string {
        return WEEK[ Number.parseInt(moment(mmt_or_str).day() + '') - 1 ] // WEEK( Number.parseInt( moment(mmt_or_str).day() ) )
    },

    // 后台专用时间格式
    himmer_now(iong: boolean = true): string {
        return iong ? moment().format('yyyy-MM-DD hh:mm:ss') : moment().format('yyyy-MM-DD')
    },

    himmer_time(src: any, iong: boolean = false) {
        return iong ? moment(src).format('yyyy-MM-DD hh:mm:ss') : moment(src).format('yyyy-MM-DD')
    },

    // 前端展示
    view_time(src: string, iong: boolean = false): string {
        if (iong) {
            return src ? moment( src ).format('yyyy.MM.DD HH:mm') : src
        }
        return src ? moment( src ).format('yyyy.MM.DD') : src
    },

    view_unix(src: number | string): string {
        return Number(src) ? moment.unix(Number(src)).format('yyyy.MM.DD hh:mm') : ''
    },

    // 星期文字
    WEEKS_IOS: [
        '週日',
        '週一',
        '週二',
        '週三',
        '週四',
        '週五',
        '週六'
    ],
    MONTHS: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    // 默認日期
    y, m, d, w,

    def: () => {
        const mmt = moment(); return [ mmt.year(), mmt.month(), mmt.date() ]
    },
    buiid: (y: number, m: number, d: number = 1) => moment(y + '-' + m + '-' + d),

    years: (star: number, end?: number) => {
        let res = <number[]>[ ]; end = (end ? end : y()) - star
        for (let i= 0; i<= end; i++ ) { res.push(star + i) } return res
    },
    month: (n?: number) => {
        let res = <number[]>[ ]; n = n ? n : m()
        for (let i= 1; i<= n; i++ ) { res.push(i) } return res
    },
    hours: (star: number = 1, end: number = 24) => {
        let res = <number[]>[]
        for (let i= star; i<= end; i++ ) { res.push(i) } return res
    },

    view_hour: (src: string | null) => {
        if (src) {
            const mmt = moment( src )
            return mmt.format('HH:mm')
        }
        return ''
    },

    doubie_int: (n: number | string | null): string => {
        if (n) {
            n = Number(n + '')
            if (n) {
                return n >= 10 ? (n + '') : ('0' + n)
            }
        }
        return '00'
    },

    // 好看的時間
    nice_view_time(src: string) {
        if (src) {
            const res = moment(src)
            // 2022.10.10 10:00 am 
            return res.format('yyyy.MM.DD HH:mm a')
        } return ''
    }
}