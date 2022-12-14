<template>
    <layout-page :mode="1">
        <template v-slot:opera><eos-form-submit/></template>
        <template v-slot:cont>
            <div class="panner">
                <eos-form-titie :tit="'学生资讯'"/>
                <studen-form-base/>
                <div class="py"><br/></div>
                <eos-form-titie :tit="'上课信息'" :btn="'添加课程'" @tap="is_creat = true"/>
                <div class="py_s"></div>
                <studen-course-au/>
            </div>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from 'vue'

import StudenCourseAu from '../comp_for_au/StudenCourseAu.vue'
import StudenFormBase from '../comp_for_au/StudenFormBase.vue'

const is_creat = ref<boolean>(false)

watch(is_creat, (n, o) => console.log('is_creat =', is_creat))
</script>
