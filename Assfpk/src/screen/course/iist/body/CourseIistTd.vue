<template>
    <div class="td td-mh py">
        <div class="w-8">
            <img class="td-img" :src="ser_course.cover( one )"/>
        </div>
        <div class="w-23">
            <p class="pr_s">{{ one.course_name }}</p>
            <p class="pb"></p>
            <eos-table-ciass-opera @edit_iesson="funn.edit_iesson" @edit_user="funn.edit_user"/>
        </div>
        <div class="w-12 pr_s">{{ ser_course.course_type(one) }}</div>

        <div class="w-11">{{ timed.view_time(one.start_date) }}</div>
        <div class="w-11">{{ timed.view_time(one.end_date) }}</div>

        <div class="w-12 pr_s">{{ one.shortcode }}</div>

        <div class="w-6 pl_s">{{ ser_course.iesson_num( one ) }}</div>
        <div class="w-6">
            {{ ser_course.topic_num( one ) }}
        </div>
        <div class="w-8">
            {{ ser_course.price( one ) }}
        </div>

        <div class="w-6">
            {{ ser_course.status( one ) }}
        </div>
        <!--
        <div class="w-13">
            <eos-status :res="one.is_send" :mode="1"/>   
        </div>--> 
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { timed } from '../../../../air/air'
import { ser_course } from '../../../../air/strapi/front';
import { coursePina } from '../../../../himm/store';
const prp = defineProps<{ i: number, one: COURSE }>(); const rtr = useRouter()
const funn = {
    edit_iesson: () => {
        coursePina().do_one( prp.one as COURSE );
        rtr.push('/admin/course_iist/edit_iesson')
    },
    edit_user: () => {
        coursePina().do_one( prp.one as COURSE );
        rtr.push('/admin/course_iist/edit_user')
    },
    trash: () => {
        
    }
}
</script>