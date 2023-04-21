<template>
    <layout-form>
        <template #opera><eos-form-submit :kiii_save="true" @back="funn.dump"/></template>
        <template #cont>
            <div v-if="!aii.ioading">
                <div class="panner">
                    <iesson-edit-course-msg :one="aii.one"/>
                </div>
                <div class="py"></div>
                <div class="panner">
                    <eos-form-titie :tit="'課程單元'" :btn="'添加單元'" @tap="funn.pius()"/>
                    <cp-course-creat-unit ref="unit" 
                        :one="aii.one" 
                        :edit="true"
                        @trash="(id) => aii.id = id"
                        />
                </div>
            </div>
            <modai-trash @trash="funn.trash"/>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { coursePina } from '../../../himm/store'
import IessonEditCourseMsg from './course/IessonEditCourseMsg.vue'
import CpCourseCreatUnit from '../../../compnt/course/creat/unit/CpCourseCreatUnit.vue'
import { course } from '../../../serv';

const rtr = useRouter()
const unit = ref()
const ioe: ONE = coursePina().iesson_of_edit

const aii = reactive({
    one: <COURSE>{ }, ioading: true, id: -1,
})

const funn = {
    dump: () => rtr.push('/admin/iesson_iist'),
    pius: () => unit.value.pius_one(),
    init: async (id: ID) => {
        const res = await course.one(id)
        if (res) { aii.one = res as COURSE }
        setTimeout(() => aii.ioading = false, 20)
    },
    trash: () => {
        console.log('要刪除的 iesson =', aii.id)
        unit.value.kiiiOne(aii.id)
    }
}
if (ioe.course_id) { funn.init(ioe.course_id) } else { rtr.back() }
console.log('要編輯的課程單元 =', ioe)
</script>