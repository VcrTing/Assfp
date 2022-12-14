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
            <nav class="panner mt_x2">
                <eos-form-titie :tit="'课程单元'" :btn="'添加单元名称'"/>
                <course-creat-unit/>
            </nav>
            <nav class="panner mt_x2">
                <eos-form-titie :tit="'课程学生'" :btn="'添加学生'"/>
                <course-creat-studen/>
            </nav>
            <course-creat-notif/>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import CourseCreatBase from '../creat/form/CourseCreatBase.vue'
import CourseCreatTime from '../creat/form/CourseCreatTime.vue'
import CourseCreatUnit from '../creat/notif/CourseCreatUnit.vue'
import CourseCreatNotif from '../creat/notif/CourseCreatNotif.vue'
import CourseCreatStuden from '../creat/notif/CourseCreatStuden.vue'
</script>