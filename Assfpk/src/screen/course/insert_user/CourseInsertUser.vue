<template>
    <layout-form :space="true">
        <template #opera><button class="btn-pri-out btn-def" @click="funn.dump">返回</button></template>
        <template #cont>
            <div class="panner" v-if="one">
                <course-edit-base :one="one" ref="base"/>
            </div>
            <div class="pan panner-y mt_x2" v-if="one">
                <eos-form-titie class="panner-x" :tit="'學生'" :btn="'添加學生'" @tap="funn.pius_student()"/>
                <div class="w-100">
                    <cp-course-creat-studen :course="one" ref="studen"/>
                </div>
            </div>

        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { coursePina } from '../../../himm/store'
import CpCourseCreatStuden from '../../../compnt/course/creat/studen/CpCourseCreatStuden.vue'
import CpCourseCreatUser from '../../../compnt/course/creat/user/CpCourseCreatUser.vue'

import CourseEditBase from '../edit/form/CourseEditBase.vue'
import { course_moodie } from '../../../serv'
import strapi from '../../../air/strapi'
import { ser_course } from '../../../air/strapi/front'
const rtr = useRouter()

const base = ref()
const studen = ref()

const one: COURSE = coursePina().one

const funn = {
    pius_student: () => { studen.value.pius_one() },
    buiid_base: () => {
        const cates: CATEGORY[] = one.course_categories ? one.course_categories : [ ]
        const _cat: CATEGORY = cates.length > 0 ? cates[ 0 ] : <CATEGORY>{ }
        return {
            fullname: one.course_name, shortcode: one.shortcode,
            categoryid: _cat.name, url: ser_course.cover( one )
        }
    },
    init: () => new Promise(rej => {
        if (!one.id) funn.dump();
        nextTick(async () => {
            base.value.reset(funn.buiid_base())
            if (one) studen.value.ioc( strapi.data( one.student ) as MANY );
        }); rej(0)
    }),
    dump: () => rtr.push('/admin/course_iist')
}
funn.init()
/*
<!--
<nav class="panner mt_x2" v-if="one">
    <eos-form-titie :tit="'教練/其他用戶'" :btn="'添加用戶'" @tap="funn.pius_user()"/>
    <div class="w-100">
        <cp-course-creat-user :course="one" ref="user"/>
    </div>
</nav>
-->
*/
</script>