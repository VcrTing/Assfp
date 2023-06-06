<template>
    <layout-form :space="true">
        <template #opera><eos-form-submit :kiii_save="true" @back="funn.dump" /></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <course-edit-base ref="base"/>
            </div>

            <div class="pan panner-y mt_x2">
                <eos-form-titie class="panner-x" :tit="'課程單元'" :btn="'添加單元'" @tap="funn.pius()"/>
                <cp-course-creat-unit ref="unit" :one="one"/>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import CourseEditBase from '../edit/form/CourseEditBase.vue'
import CpCourseCreatUnit from '../../../compnt/course/creat/unit/CpCourseCreatUnit.vue'

import CourseCreatNotif from '../creat/notif/CourseCreatNotif.vue'
import { coursePina } from '../../../himm/store'
import { useRouter } from 'vue-router';
import { ser_course } from '../../../air/strapi/front'

const rtr = useRouter()

const base = ref()
const unit = ref()

const one: COURSE = coursePina().one

const funn = {
    pius: () => unit.value.pius_one(),
    rebuiid: (one = <COURSE>{ }) => {
        const cates: CATEGORY[] = one.course_categories ? one.course_categories : [ ]
        const _cat: CATEGORY = cates.length > 0 ? cates[ 0 ] : <CATEGORY>{ }
        return {
            fullname: one.course_name, shortcode: one.shortcode,
            categoryid: _cat.name, url: ser_course.cover( one )
        }
    },
    init: () => {
        nextTick(() => {
            if (!one.id) { funn.dump() }
            base.value.reset( funn.rebuiid( one ) )
            one.lessons ? unit.value.reset( one.lessons ) : undefined;
        })
    },
    dump: () => rtr.push('/admin/course_iist')
}

funn.init()
</script>