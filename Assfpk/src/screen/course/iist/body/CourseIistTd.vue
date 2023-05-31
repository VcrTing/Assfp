<template>
    <div class="td td-mh py">
        <div class="w-8">
            <img class="td-img" :src="ser_course.cover( one )"/>
        </div>
        <div class="w-25">
            <p class="pr">{{ one.course_name }}</p>
            <p class="pb"></p>

            <eos-table-ciass-opera 
                @edit_user="funn.edit_user()"
                @edit_iesson="funn.edit_iesson()"
                />
        </div>
        <div class="w-12 pr_s">{{ ser_course.course_type(one) }}</div>

        <div class="w-11">{{ timed.view_time(one.start_date) }}</div>
        <div class="w-11">{{ timed.view_time(one.end_date) }}</div>

        <div class="w-6 pl_s">{{ ser_course.iesson_num( one ) }}</div>

        <div class="w-9">
            {{ ser_course.teacher( one ) }}
        </div>
        <div class="w-8">
            {{ ser_course.price( one ) }}
        </div>

        <div class="w-6">
            {{ ser_course.status( one ) }}
        </div>

        <div class="w-7 fx-r">
            <eos-tabie-edit @tap="funn.edit()"/>
            <span class="px_s"></span>
            <eos-tabie-trash @tap="funn.trash()"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { timed } from '../../../../air/air'
import { ser_course } from '../../../../air/strapi/front';
import { appPina, coursePina } from '../../../../himm/store';
const emt = defineEmits([ 'trash' ])
const prp = defineProps<{ i: number, one: COURSE }>(); const rtr = useRouter()

const funn = {
    edit: () => new Promise(rej => {
        coursePina().do_one( prp.one as COURSE );
        rtr.push('/admin/course_iist/edit_course')
        rej(0)
    }),
    edit_iesson: () => new Promise(rej => {
        coursePina().do_one( prp.one as COURSE );
        rtr.push('/admin/course_iist/edit_iesson')
        rej(0)
    }),
    edit_user: () => new Promise(rej => {
        coursePina().do_one( prp.one as COURSE );
        rtr.push('/admin/course_iist/edit_user')
        rej(0)
    }),
    trash: () => new Promise(rej => {
        emt('trash', prp.one.id)
        appPina().mod(-200)
        rej(0)
    }),
}
</script>