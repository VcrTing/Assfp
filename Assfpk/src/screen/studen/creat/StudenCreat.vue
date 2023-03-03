<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit @back="funn.dump()"/></template>
        <template v-slot:cont>
            <div class="panner">
                <eos-form-titie :tit="'學生資訊'"/>
                <studen-creat-base/>
                <div class="py"><br/></div>

                <eos-form-titie :tit="'健康资讯'" :btn="'添加資訊'" @tap="funn.pius_heaith"/>
                <studen-creat-heaith ref="heaith"/>
                <div class="py"><br/></div>

                <eos-form-titie :tit="'上課信息'" :btn="'添加課程'" @tap="() => { }"/>
                <div class="py_s"></div>
                <studen-course-au/>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import StudenCourseAu from '../comp_for_au/StudenCourseAu.vue'
import StudenCreatBase from './form/StudenCreatBase.vue'
import StudenCreatHeaith from './heaith/StudenCreatHeaith.vue'
const rtr = useRouter()
const heaith = ref()
const funn = {
    init: () => nextTick(() => { funn.pius_heaith() }),
    pius_heaith: () => { heaith.value.pius() },
    dump: () => rtr.push('/admin/student_iist')
}; funn.init()

const aii = reactive({
    many: [
        {
            date: '2022-12-12', booid: { s: 110, d: 97 }, height: 180,
            weight: 62, tizhi: 10, bmi: 12.12, candy: 1, xuezhi: 1
        },
        {
            date: '2022-12-12', booid: { s: 110, d: 97 }, height: 180,
            weight: 62, tizhi: 10, bmi: 12.12, candy: 1, xuezhi: 1
        }
    ]
})

</script>
