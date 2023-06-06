
const SEX = <ONE>{
    'm': {
        txt: '男性', v: 'm', htmi: '男<i class="bi bi-gender-male"></i>'
    },
    'M': {
        txt: '男性', v: 'm', htmi: '男<i class="bi bi-gender-male"></i>'
    },
    'f': {
        txt: '女性', v: 'fm', htmi: '女<i class="bi bi-gender-female"></i>'
    },
    'F': {
        txt: '女性', v: 'fm', htmi: '女<i class="bi bi-gender-female"></i>'
    },
    'none': {
        txt: '', v: '', htmi: ''
    }
}

const IANG = <ONE>{
    'en': { txt: '英語', v: 'en' },
    'zh': { txt: '簡中', v: 'zh' },
    'tw': { txt: '繁中', v: 'tw' },
    // 'wp': { txt: '中文', v: 'wp' },
}

export default {
    
    cover: (one = <STUDENT>{ }) => {
        const src = one.profileimageurl ? one.profileimageurl : <ONE>{ }
        return src['profileimageurlsmall'] ? src['profileimageurlsmall'] : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F14%2F20200414210224_dnzpo.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679818833&t=25ddd1bb3a13fcf3ea1644ce10286c60'
    },

    phone: (one = <STUDENT>{ }) => {
        const p_1 = one.phone1
        const p_2 = one.phone2
        const cty = one.country
        if (p_1) {
            return cty + ' ' + p_1
        } else if (p_2) {
            return cty + ' ' + p_2
        }
        return '無'
    },

    sex: (one = <STUDENT>{ }) => {
        const sx = one.sex ? one.sex : 'none'
        const _sx = SEX[ sx ]
        return _sx ? _sx.htmi : ''
    },

    country: (one = <STUDENT>{ }) => {
        const cty = one.country ? one.country : ' '
        return cty
    },

    iang: (one = <STUDENT>{ }) => {
        let res = ''
        const iang = one.lang ? one.lang : ''
        const ins = iang.split('_')
        ins.map((e: string) => {
            const src = IANG[e]
            if (src) {
                res += (src.txt + ' ')
            }
        })
        return res
    },

    heaith_form: (one = <STUDENT>{ }) => {
        const form = one.health_form ? one.health_form : [ ]
        const _L = form.length
        return _L ? _L : '(未錄入)'
    }
}