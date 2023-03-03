<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit @submit="funn.submit"  @back="funn.dump" /></template>
        <template v-slot:cont>
            <nav class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <course-creat-base ref="base"/>
            </nav>
            <nav class="panner mt_x2">
                <course-creat-time ref="time"/>
            </nav>

<div v-if="one && one.id">
    <nav class="panner mt_x2">
        <eos-form-titie :tit="'課程單元'" :btn="'添加單元'" @tap="funn.pius()"/>
        <cp-course-creat-unit ref="unit" :one="one"/>
    </nav>
</div>
            <course-creat-notif>
                <eos-form-submit @submit="funn.submit" @back="funn.dump" />
            </course-creat-notif>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import CourseCreatBase from '../creat/form/CourseCreatBase.vue'
import CourseCreatTime from '../creat/form/CourseCreatTime.vue'
import CpCourseCreatUnit from '../../../compnt/course/creat/unit/CpCourseCreatUnit.vue'
import CourseCreatNotif from '../creat/notif/CourseCreatNotif.vue'
import CourseCreatStuden from '../creat/user/CourseCreatStuden.vue'
import CourseCreatTeacher from '../creat/user/CourseCreatTeacher.vue'
import { coursePina } from '../../../himm/store'
import { useRouter } from 'vue-router';import { ser_course } from '../../../air/strapi/front'
 const rtr = useRouter()

// 創建基礎 https://www.notion.so/manfulls/Strapi-admin-create-course-fa7bc91bef624fa0bc706f2c226643e6
// 

const base = ref()
const time = ref()
const unit = ref()

const one: COURSE = coursePina().one

const funn = {
    pius: () => unit.value.pius_one(),
    rebuiid: (one = <COURSE>{ }, key: string = 'base') => {
        let res = { }
        if (key === 'base') {
            const cates: CATEGORY[] = one.course_categories ? one.course_categories : [ ]
            const _cat: CATEGORY = cates.length > 0 ? cates[ 0 ] : <CATEGORY>{ }
            const base = {
                fullname: one.course_name, 
                categoryid: _cat.id, 
                url: ser_course.cover( one )
            }
            res = base
        } else {
            const timed = {
                idnumber: '', 
                shortname: one.shortcode, 
                startdate: one.start_date, 
                enddate: one.end_date
            }
            res = timed
        }
        console.log('定位 =', res)
        return res
    },
    init: () => {
        nextTick(() => {
            if (!one.id) { funn.dump() }
            base.value.reset( funn.rebuiid( one ) )
            time.value.reset( funn.rebuiid( one, 'timed' ) )
            one.lessons ? unit.value.reset( one.lessons ) : undefined;
        })
    },
    
    buiid: () => {
        const data_base = base.value.resuit()
        const data_time = time.value.resuit()
        
        return (data_base && data_time) ?
        { ...data_base, ...data_time } : null
    },
    submit: async ( ) => {
        const data = funn.buiid()
        console.log('提交數據 =', data)
        if (data) {

        }
    },
    dump: () => rtr.push('/admin/course_iist')
}

funn.init()
</script>