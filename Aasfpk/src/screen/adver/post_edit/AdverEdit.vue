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
            <cp-adver-head-edit :one="aii.post" :need_type="(aii.temp === 1 || aii.temp === 3)" class="w-66 w-75-p"/>
            <icp-cont-edit :temp="aii.temp" :one="aii.post"/>
            <eos-post-buttons @trash="funn.trash" @submit="funn.submit"/>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import IcpContEdit from './cont/IcpContEdit.vue'
import IcpTopEdit from './center/IcpTopEdit.vue'
import CpAdverHeadEdit from '../../../compnt/adver/head/CpAdverHeadEdit.vue'
const _def = 'https://img1.baidu.com/it/u=3601772273,3243303024&fm=253&fmt=auto&app=138&f=JPEG?w=1603&h=500'
const aii = reactive({
    temp: 2, review: true,
    post: {
        cover: _def,
        tit: '精緻大腿鍛鍊，助力您擁有完美精緻的大腿', next_publish: '2022-12-12 12:12', 
        author: '劉易斯', type: 'adver',

        cont_1: '精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿', img_1: _def,
        cont_2: '精緻大腿鍛鍊，助力您擁有完美精緻的大腿。精緻大腿鍛鍊，助力您擁有完美精緻的大腿。', img_2: _def,
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
