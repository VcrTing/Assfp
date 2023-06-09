<template>
    <layout-page-amplify class="bg-FFF" ref="page">
        <template #opera>
            <eos-post-top-group-review @save="funn.submit()" :aii="aii" :iangs="aii.iangs" :iang-key="'iang'" :temp-key="'temp'"/>
        </template>
        <template #top><adver-image-edit ref="banner" :is_txt_mode="true" :def="news_vais.cover(form.news)"/></template>
        <template #cont>
            <div class="w-70 w-65-p">
                <eos-post-head :news="form.news" :aii="aii"/>
                <div class="py_s"></div>
                <eos-post-content :news="form.news" :aii="aii"/>
            </div>
            <fn-post-fxdpan :is_fixed_panner="true">
                <news-review-fx-pan :aii="aii" :news="form.news"/>
            </fn-post-fxdpan>
        </template>
    </layout-page-amplify>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref, watchEffect } from 'vue'
import { news } from '../../../serv'
import { newsPina } from '../../../himm/store'
import FnPostFxdpan from '../../../funny/layout/post/FnPostFxdpan.vue'
import NewsReviewFxPan from './pan/NewsReviewFxPan.vue'
import AdverImageEdit from '../../adver/creat/image/AdverImageEdit.vue'
import EosPostContent from '../../../eos/post/EosPostContent.vue'
import EosPostTopGroupReview from '../../../eos/post/opera/EosPostTopGroupReview.vue'
import news_vais from '../../../conf/vais/news_vais'

const banner = ref()

const aii = reactive({
    iang: 'zh_HK', temp: 2, layout: <ONE|null>null,
    iangs: news_vais.iangs, iangTit: news_vais.iangTit,
    need_price_input: false, msg: '', ioading: false,
})

const form = reactive({ news: <ONE>{ } })

const funn = {
    init: () => new Promise(async rej => {
        const src = sessionStorage.getItem('aasfp_news_review')
        if (src) {
            form.news = JSON.parse(src)
            console.log('SESSION SRC =', form.news)
        }
    }),
    buiid: () => { return null },
    submit: () => new Promise(async rej => {
        const data = funn.buiid()
        if (data) {
            console.log('FORM =', form)
            const res = await news.creat(data);
            console.log(res)
        }
        rej(0)
    })
}
nextTick(funn.init)
</script>