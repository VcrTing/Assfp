<template>
    <div class="td td-mh py">
        <div class="w-30 pr">{{ one.name }}</div>
        <div class="w-24 t-elip_x3 pr">{{ one.location }}</div>
        <div class="w-15">{{ timed.view_time(one.startTime, true) }}</div>
        <div class="w-15">{{ timed.view_time(one.endTime, true) }}</div>
        <div class="w-9 pl_s">
            <eos-iesson-schedule :def="one.isOnSchedule + ''" :is_txt_mode="true"/>
        </div>
        <div class="w-9 fx-r">
            <div class="err hand" @click="funn.finish()">完成單元</div>
            <span class="px_s"></span>
            <eos-tabie-edit @tap="funn.edit()"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { timed } from '../../../../air/air'
import { ser_course } from '../../../../air/strapi/front';
import { coursePina } from '../../../../himm/store';
import EosIessonSchedule from '../../../../eos/status/EosIessonSchedule.vue';
const prp = defineProps<{ i: number, one: ONE }>()
const rtr = useRouter();
const funn = {
    finish: () => new Promise(rej => {
        coursePina().do_iesson_of_edit( prp.one )
        rtr.push('/admin/iesson_iist/iesson_compeieted_edit')
        rej(0)
    }),
    edit: () => new Promise(rej => {
        coursePina().do_iesson_of_edit( prp.one )
        rtr.push('/admin/iesson_iist/edit')
        rej(0)
    })
}
</script>