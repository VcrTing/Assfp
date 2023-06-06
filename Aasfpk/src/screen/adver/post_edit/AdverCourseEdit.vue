<template>
    <layout-page-amplify class="bg-FFF">
        <template #opera>
            <eos-post-edit-top-buttons @view="() => { }" @back="() => { }">
                <eos-card-temp class="w-20 ip-mh br" @resuit="(n: number) => aii.temp = n" :def="1"/>
                <div class="px_s"></div>
            </eos-post-edit-top-buttons>
        </template>
        <template #top>
            <icp-top-edit :typed="aii.temp" :post="aii.post"/>
        </template>
        <template #cont>
            <div class="pt"></div>
            <cp-adver-head-edit 
                :one="aii.post" 
                :need_type="(aii.temp === 1 || aii.temp === 3)" 
                class="w-66 w-75-p"/>
            <icp-notice-edit 
                class="w-50 w-66-p" 
                :temp="aii.temp" 
                :one="aii.post_course"/>
            <icp-course-cont-edit 
                :temp="aii.temp" 
                :one="aii.post"/>
            <eos-post-buttons 
                @trash="funn.trash" 
                @submit="funn.submit"/>
        </template>

        <template #pan>
            <fn-post-fxdpan :is_fixed_panner="aii.fxdpan">
                <icp-pan-edit/>
                <icp-pan-send-record :many="[
                { number: 'SP 0001', publish: '2022-12-12 12:12' },
                { number: 'SP 0002', publish: '2022-12-16 12:12' }
                ]"/>
            </fn-post-fxdpan>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import IcpCourseContEdit from './cont/IcpCourseContEdit.vue'
import IcpTopEdit from './center/IcpTopEdit.vue'
import IcpNoticeEdit from './center/IcpNoticeEdit.vue'
import CpAdverHeadEdit from '../../../compnt/adver/head/CpAdverHeadEdit.vue'

import IcpPanEdit from './pan/IcpPanEdit.vue'
import IcpPanSendRecord from './pan/IcpPanSendRecord.vue'
import FnPostFxdpan from '../../../funny/layout/post/FnPostFxdpan.vue'

const _def = 'https://img1.baidu.com/it/u=3601772273,3243303024&fm=253&fmt=auto&app=138&f=JPEG?w=1603&h=500'
const aii = reactive({
    temp: 1, review: true, fxdpan: true,
    post: {
        cover: _def,
        tit: '精緻大腿鍛鍊，助力您擁有完美精緻的大腿', next_publish: '2022-12-12 12:12', 
        author: '劉易斯', type: 'adver',

        cont_1: '精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿', img_1: _def,
        cont_2: '精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。', img_2: _def,

        course_iist_fiie: '/uplaod/course_iist_2022-12-12.pdf',
    },
    post_course: {
        notice: '精緻大腿課程，快來報名！', price: '9999', price_now: '888', is_vip: false,
    }
})

const funn = {
    submit: () => {
        console.log('提交 數據 =', aii.post)
    },
    trash: () => {
        console.log('刪除 數據 =', aii.post)
    }
}
</script>
