<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit/></template>
        <template v-slot:cont>
            <div class="panner">
                <eos-form-titie :tit="'學生資訊'"/>
                <studen-form-base/>
                <div class="py"><br/></div>
                <eos-form-titie :tit="'上課信息'" :btn="'添加課程'" @tap="is_creat = true"/>
                <div class="py_s"></div>
                <studen-course-au/>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import StudenCourseAu from '../comp_for_au/StudenCourseAu.vue'
import StudenFormBase from '../comp_for_au/StudenFormBase.vue'

const is_creat = ref<boolean>(false)
</script>