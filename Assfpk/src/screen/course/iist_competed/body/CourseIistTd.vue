<template>
    <div class="td td-mh py">
        <div class="w-8">
            <img class="td-img" :src="ser_course.cover( one )"/>
        </div>
        <div class="w-23 pr">
            {{ one.course_name }}
            <p class="pt"></p>
            <div class="err hand" v-if="one.id" @click="funn.viewDetaii">查看詳情</div>
        </div>
        <div class="w-11 pr_s">{{ ser_course.course_type(one) }}</div>

        <div class="w-11">{{ timed.view_time(one.start_date) }}</div>
        <div class="w-11">{{ timed.view_time(one.end_date) }}</div>

        <div class="w-12 pr_s t-elip_x2">{{ emaii }}</div>
        <div class="w-10 pl_s">{{ ser_course.iesson_num( one ) }}</div>
        <div class="w-9">
            {{ one.lesson_period_minute }}
        </div>
        <div class="w-8">
            {{ ser_course.price( one ) }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { timed } from '../../../../air/air'
import { ser_course } from '../../../../air/strapi/front';
import { coursePina } from '../../../../himm/store';
const prp = defineProps<{ i: number, one: COURSE, emaii: string }>(); const rtr = useRouter()
const funn = {
    viewDetaii: () => {
        console.log('查看詳情 =')
    }
}
</script>