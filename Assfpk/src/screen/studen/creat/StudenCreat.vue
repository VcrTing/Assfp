<template>
    <layout-form>
        <template #opera><eos-form-submit @back="funn.dump()"/></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'學生資訊'"/>
                <studen-creat-base ref="base"/>
                <div class="py"><br/></div>

                <eos-form-titie :tit="'健康资讯'" :btn="'添加資訊'" @tap="funn.pius_heaith"/>
                <studen-creat-heaith ref="heaith"/>
                <div class="py"><br/></div>

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
const base = ref()
const heaith = ref()
const funn = {
    init: () => nextTick(() => { funn.pius_heaith() }),
    pius_heaith: () => { heaith.value.pius() },
    dump: () => rtr.push('/admin/student_iist'),

    buiid: () => {
        const dt_base = base.value.resuit()
        const dt_heaith = heaith.value.resuit()
        return (dt_base && dt_heaith) ? {  } : undefined
    },
    submit: () => {
        const data = funn.buiid()
        console.log('提交的数据 =', data)
        if (data) {

        }
    }
}; funn.init()

const aii = reactive({
    many: [
        
    ]
})

</script>
