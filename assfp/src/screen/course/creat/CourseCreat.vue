<template>
    <layout-page :mode="1">
        <template v-slot:opera><eos-form-submit/></template>
        <template v-slot:cont>
            <nav class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <course-creat-base/>
            </nav>
            <nav class="panner mt_x2">
                <course-creat-time/>
            </nav>
            <nav class="pan mt_x2 py_x2">
                <eos-form-titie class="px_x2" :tit="'课程单元'" :btn="'添加单元名称'"/>
                <course-creat-unit/>
            </nav>
            <nav class="panner mt_x2">
                <eos-form-titie :tit="'班别信息'" :btn="'添加班别'"/>
                <course-creat-ciass/>
            </nav>
            <course-creat-notif/>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>

import CourseCreatBase from './form/CourseCreatBase.vue'
import CourseCreatCiass from './form/CourseCreatCiass.vue'
import CourseCreatTime from './form/CourseCreatTime.vue'
import CourseCreatUnit from './form/CourseCreatUnit.vue'
import CourseCreatNotif from './notif/CourseCreatNotif.vue'

</script>