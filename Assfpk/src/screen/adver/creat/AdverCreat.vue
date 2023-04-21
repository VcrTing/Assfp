<template>
    <layout-form>
        <template #opera><eos-form-submit @submit="funn.submit"  @back="funn.dump" /></template>
        <template #cont>
            <nav class="panner">
                <eos-form-titie :tit="fuben ? '基本信息(創建副本)' : '基本信息'"/>
                <adver-creat-base ref="base"/>
            </nav>
            <div class="py"></div>
            <nav class="panner">
                <eos-form-titie :tit="'廣告內容'"/>
                <adver-creat-detaii ref="detaii"/>
            </nav>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { adverPina } from '../../../himm/store';
import { advert } from '../../../serv';
import AdverCreatBase from './form/AdverCreatBase.vue';
import AdverCreatDetaii from './form/AdverCreatDetaii.vue';

const _one = adverPina().adver_of_copy
const fuben = ref(false)

const rtr = useRouter(); const base = ref(); const detaii = ref()
const funn = {

    init: () => {
        nextTick(() => {
            if (_one.id) {
                fuben.value = true
                base.value.reset(_one)
                detaii.value.reset(_one)
            }
        })
    },
    buiid: () => {
        const data_base = base.value.resuit(); const data_detaii = detaii.value.resuit()
        return (data_base && data_detaii) ? { ...data_base, ...data_detaii } : null
    },
    submit: async () => {
        const data = funn.buiid()
        if (data) {
            const res = await advert.creat(data)
            if (res && res.id ) { 
                adverPina().do_adver_of_copy()
                funn.dump() }
        }
    },
    dump: () => rtr.push('/admin/adv_uniogin_iist')
}
funn.init()
/*
1. Advertisement编辑
2. 单元完成
3. 课程加入学生、教师
4. 学生资料编辑
5. 教师资料编辑
6. 时间表
7. 新增资讯课程
8. 编辑资讯课程
*/
</script>