<template>
    <layout-form>
        <template #opera><eos-form-submit @back="funn.dump"/></template>
        <template #cont>
            <div v-if="!aii.ioading">
                <div class="panner">
                    <iesson-edit-course-msg :one="aii.one">
                        <div>
                            當前單元:&nbsp;{{ ioe.name }}
                        </div>
                    </iesson-edit-course-msg>
                </div>
                <div class="py"></div>
                <div class="panner">
                    <eos-form-titie :tit="'學生列表'"/>
                    <ice-student ref="student" :one="aii.one" :iesson="ioe"/>
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

const aii = reactive({ one: <COURSE>{ }, ioading: true }); const student = ref()

const ioe: ONE = coursePina().iesson_of_edit
const rtr = useRouter()
const funn = {
    dump: () => rtr.push('/admin/iesson_iist'),
    init: async (id: ID) => {
        const res = await course.one(id); console.log('單元 =', ioe)
        if (res) { aii.one = res as COURSE; console.log('要編輯的課程 =', res) }
        setTimeout(() => aii.ioading = false, 20)
    }
}
if (ioe.course_id) { funn.init(ioe.course_id) } else { rtr.back() }
</script>