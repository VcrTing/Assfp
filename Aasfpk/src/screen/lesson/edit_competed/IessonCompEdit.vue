<template>
    <layout-form :space="true">
        <template #opera><eos-form-submit :kiii_save="true" @back="funn.back"/></template>
        <template #cont>
            <div >
                <div class="panner">
                    <iesson-edit-course-msg :one="aii.course">
                        <div>
                            當前單元:&nbsp;{{ iesson_of_edit.name }}
                        </div>
                    </iesson-edit-course-msg>
                </div>
                <div class="py"></div>
                <div class="panner">
                    <eos-form-titie :tit="'學生列表'"/>
                    <div v-if="!aii.ioading">
                        <ice-student ref="student" :one="aii.one" :iesson="iesson_of_edit"/>
                    </div>
                    <div v-else>
                        <eos-ioading/>
                    </div>
                </div>
            </div>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import IessonEditCourseMsg from '../edit/course/IessonEditCourseMsg.vue';
import IceStudent from './student/IceStudent.vue';
import course from '../../../serv/couse/course';
import { coursePina } from '../../../himm/store';
import strapi from '../../../air/strapi';
import { storeToRefs } from 'pinia';

const aii = reactive({ one: <COURSE>{ }, course: <COURSE>{}, ioading: true }); const student = ref()

const { iesson_of_edit } = storeToRefs(coursePina())
const rtr = useRouter()
const funn = {
    back: () => rtr.go(-1),
    dump: () => rtr.push('/admin/iesson_iist'),
    init: () => new Promise(async rej => {
        aii.ioading = true;
        const ioe = iesson_of_edit.value; 
        const id = ioe.course_id
        if (!id) { rtr.back() } else {
            const cs = ioe.moodle_course
            if (cs) { aii.course = cs.data ? strapi.dataed(cs) as COURSE : cs }
        }
        const res = await course.one(id);
        if (res) { aii.one = res as COURSE; console.log('要編輯的課程 =', res) }
        setTimeout(() => aii.ioading = false, 20)
        rej(0)
    })
}
funn.init()
</script>