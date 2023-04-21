<template>
    <div class="td td-mh py">
        <div class="w-8">{{ one.id }}</div>
        <div class="w-32 pr">{{ one.name }}</div>
        <div class="w-10">{{ one.location }}</div>
        <div class="w-17">{{ timed.view_time(one.startTime, true) }}</div>
        <div class="w-17">{{ timed.view_time(one.endTime, true) }}</div>
        <div class="w-9 pl_s">
            <eos-iesson-schedule :def="one.isOnSchedule + ''" :is_txt_mode="true"/>
        </div>
        <div class="w-9 fx-r">
            <div class="err hand" @click="() => {
                coursePina().do_iesson_of_edit( one )
                rtr.push('/admin/iesson_iist/iesson_compeieted_edit')
                }">完成單元</div>
            <span class="px_s"></span>
            <eos-tabie-edit @tap="() => {
                coursePina().do_iesson_of_edit( one )
                rtr.push('/admin/iesson_iist/edit')
                }"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { timed } from '../../../../air/air'
import { ser_course } from '../../../../air/strapi/front';
import { coursePina } from '../../../../himm/store';
import EosIessonSchedule from '../../../../eos/status/EosIessonSchedule.vue';
defineProps<{ i: number, one: ONE }>()
const rtr = useRouter();
</script>