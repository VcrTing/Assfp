<template>
    <div class="td" :class="{ 'def_x2': !one.isActive }">
        <div class="w-32">
            <span v-if="funn.ser_adver_tit()">{{ funn.ser_adver_tit() }}</span>
            <span v-else>{{ funn.ser_adver_tit(adver_vais.EN) }}</span>
        </div>
        <div class="w-16">
            {{ timed.view_time( one.startDate ) }}
        </div>
        <div class="w-16">
            {{ timed.view_time( one.endDate ) }}
        </div>
        <div class="w-11">
            {{ one.sorting_order }}
        </div>
        <div class="w-10">
            <span class="sts-succ" v-if="one.isActive">啟用</span>
            <span class="sts-err" v-else>未啟用</span>
        </div>
        <div class="w-18 fx-r err">
            <div class="mr hand" @click="funn.copy">創建副本</div>
            <div class="hand" @click="funn.edit">编辑</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import { timed } from '../../../../air/air'
import adver_vais from '../../../../conf/vais/adver_vais';
import { adverPina } from '../../../../himm/store';
const prp = defineProps<{
    i: number,
    one: ONE
}>()
const rtr = useRouter()
const funn = {
    copy: () => {
        adverPina().do_adver_of_copy(prp.one as ADVER)
        rtr.push('/admin/adver_iist/adver_creat')
    },
    edit: () => {
        adverPina().do_adver_of_edit(prp.one as ADVER)
        rtr.push('/admin/adver_iist/adver_edit')
    },
    ser_adver_tit: (k = adver_vais.HK) => { const src = prp.one[k]; return src ? src.title : '' }
}
</script>