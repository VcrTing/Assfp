<template>
    <div class="w-8" @click="funn.view()">
        <img class="td-img" v-if="one.moodle_course" :src="funn.cover()"/>
    </div>
    <div class="w-19 pr">
        <span class="hand" @click="funn.view()">
            {{ one.moodle_course.course_name }}
        </span>
    </div>
    <div class="w-22 pr">
        <span class="hand" @click="funn.view()">
            {{ one.name }}
        </span>
    </div>

    <div class="w-13 pr_s">
        {{ timed.view_time(one.startTime, true) }}
    </div>
    <div class="w-14 pr_s">
        {{ timed.view_time(one.endTime, true) }}
    </div>
    <div class="w-17 t-elip_x3 pr_s">
        {{ one.location }}
    </div>
    <div class="w-7">
        <eos-iesson-schedule :def="one.isOnSchedule + ''" :is_txt_mode="true"/>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ser_course, ser_student } from '../../../../air/strapi/front'
import timed from '../../../../air/timed';
import EosIessonSchedule from '../../../../eos/status/EosIessonSchedule.vue';
import { appPina, coursePina } from '../../../../himm/store';

const prp = defineProps<{
    i: number, one: IESSON // STUDENT | ONE
}>()

const funn = {
    cover: () => {
        return ser_course.cover(prp.one.moodle_course as COURSE)
    },
    edit: () => {

    },
    view: () => { coursePina().do_one_timer( prp.one ); appPina().do_pan(50) }
}
</script>