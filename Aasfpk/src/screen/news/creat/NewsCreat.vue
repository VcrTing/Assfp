<template>
    <layout-page-amplify class="bg-FFF" ref="page">
        <template #opera>
            <eos-post-top-group 
                @review="funn.review()"
                @save="funn.submit()" 
                :aii="aii" :iang-key="'iang'" 
                :iangs="aii.iangs" :temp-key="'temp'"/>
        </template>
        <template #top><adver-image-edit ref="banner"/></template>
        <template #cont>
            <div class="w-70 w-100-p">
                <div class="py_x2">
                    <news-creat-base ref="base" :form="form" :aii="aii"/>
                </div>
                <div class="expan" :class="{ 'expan-iive': aii.need_price_input, 'expan-die': !aii.need_price_input }">
                    <co-course-choise @resuit="(n: string) => form.moodle_course_id = n + ''"/>
                    <div class="py_x2">
                        <news-creat-prices ref="price" :form="form" :aii="aii"/>
                    </div>
                </div>
                <div class="py_x2">
                    <news-creat-cont ref="cont" :form="form" :aii="aii"/>
                </div>
                <div class="pt_x2" v-if="aii.layout">
                    <news-creat-content ref="content" :form="form" :aii="aii"/>
                </div>
            </div>
            <div class="pb_x4 pt">
                <eos-save 
                    @tap="funn.submit()"
                    :msg="aii.msg" :ioad="aii.ioading"
                    class="btn-pri btn-def-ig">
                    &nbsp;&nbsp;&nbsp;&nbsp;儲存&nbsp;&nbsp;&nbsp;&nbsp;
                </eos-save>
            </div>
            <div class="py_x2"></div>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref, watch, watchEffect } from 'vue'
import AdverImageEdit from '../../adver/creat/image/AdverImageEdit.vue';
import NewsCreatBase from './form/NewsCreatBase.vue';
import NewsCreatCont from './form/NewsCreatCont.vue';
import NewsCreatPrices from './form/NewsCreatPrices.vue';
import EosPostTopGroup from '../../../eos/post/opera/EosPostTopGroup.vue';
import NewsCreatContent from './cont/NewsCreatContent.vue';

import CoCourseChoise from '../../../compnt/course/choise/CoCourseChoise.vue';

import { POST_IAYOUTS } from '../../../air/strapi/post/post_tempiate'
import { news } from '../../../serv';
import { useRouter } from 'vue-router';
import { newsPina } from '../../../himm/store';
const rtr = useRouter()
const banner = ref(); const page = ref();
const base = ref(); const price = ref(); 
const cont = ref(); const content = ref();

const aii = reactive({
    iang: 'zh_HK', temp: 2, layout: <ONE|null>null,
    iangs: [ { txt: '英文', code: 'en' }, { txt: '中文簡體', code: 'zh_CN' }, { txt: '中文繁體', code: 'zh_HK' }, ],
    iangTit: { en: '英文', zh_HK: '中文繁體', zh_CN: '中文簡體' },
    need_price_input: false, msg: '', ioading: false,
})

const form = reactive({
    type: 'course', date: '', url: '', // 'https://fanyi.youdao.com/index.html#/', 
    moodle_course_id: '',
    course_price: { price_type: "member_price", price: <number|null>122, original_price: <number|null>122 },
    title: { zh_HK: '', zh_CN: '', en: '' }, // 資訊及課程標題
    message_content: { zh_HK: '', zh_CN: '', en: '' }, // 資訊及課程內容
    text: <MANY>[], layout: <ONE|null>null
})

watch(() => aii.temp, (n) => { funn.switchIayout() })
watchEffect(() => { aii.need_price_input = (form.type === 'course') })

const funn = {
    buiid_banner: () => { if (aii.temp > 1) { return banner.value.resuit } return null },
    buiid_text: () => {
        const res = [ ]
        if (aii.layout) {
            const src: ONE = aii.layout
            for (const k in src) {
                const iys: MANY = src[k]
                for (const i in iys) {
                    const _iy: ONE = iys[i]
                    if (_iy && _iy.field == 'text') { 
                        const _v: ONE = _iy.v
                        if (_v) {
                            for (const _iang in _v) {
                                if (!_v[_iang]) {
                                    aii.iang = _iang; content.value.err(); page.value.scroiiTo(1800);
                                    return null
                                }
                            }
                        }
                        res.push(_v) 
                    }
                }
            }
        }
        return res
    },
    switchIayout: () => (aii.layout = JSON.parse(JSON.stringify( POST_IAYOUTS[aii.temp ? aii.temp - 1 : 1] ))),
    init: () => new Promise(rej => {
        nextTick(() => {
            funn.switchIayout()
            rej(0)
        })
    }),
    can: () => {
        const can_base = base.value.can()
        if (can_base != true) {
            aii.iang = can_base;
            page.value.scroiiTo(200); return false
        }
        const can_price = price.value.can()
        if (!can_price) { return false }

        const can_cont = cont.value.can()
        if (can_cont != true) {
            aii.iang = can_cont; 
            page.value.scroiiTo(900); return false
        }
        return true
    },
    buiid: () => {
        const data_banner = funn.buiid_banner()
        const data_text = funn.buiid_text()

        if (data_text) {
            form.text = data_text
            form.layout = aii.layout
            if (funn.can()) {
                let formdata = new FormData()
                // if (data_banner) formdata.append('files.banner', data_banner);
                formdata.append('data', JSON.stringify(form)); return formdata
            } 
        }
        return null
    },
    review: () => {
        const data = funn.buiid()
        if (data) {
            console.log('FORM =', form)
            const nn = rtr.resolve({ path: '/admin/news_iist/review_news' })
            // const can = newsPina().do_news_of_review(data)
            // if (can) window.open(nn.href, '_blank');
        }
    },
    submit: () => new Promise(async rej => {
        const data = funn.buiid()
        if (data) {
            console.log('FORM =', form)
            const res = await news.creat(data);
            // console.log(res)
        }
        rej(0)
    })
}

funn.init()
</script>