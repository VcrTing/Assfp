<template>
    <layout-form>
        <template #opera><eos-form-submit @submit="funn.submit"  @back="funn.dump" :msg="aii.msg" :ioad="aii.ioading" /></template>
        <template #cont>
            <nav class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <course-edit-base ref="base"/>
            </nav>

            <nav class="panner mt_x2">
                <course-edit-teacher ref="teacher"/>
            </nav>

            <course-creat-notif>
                <eos-form-submit @submit="funn.submit" @back="funn.dump" 
                    :msg="aii.msg" :ioad="aii.ioading"/>
            </course-creat-notif>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import CourseEditBase from './form/CourseEditBase.vue'
import CourseEditTeacher from './form/CourseEditTeacher.vue'
import CourseCreatNotif from '../creat/notif/CourseCreatNotif.vue'
import { coursePina } from '../../../himm/store'
import { useRouter } from 'vue-router';
import { ser_course } from '../../../air/strapi/front'
import { course_moodie } from '../../../serv'

const rtr = useRouter()

const aii = reactive({ ioading: false, msg: '' })

const base = ref()
const teacher = ref()

const one: COURSE = coursePina().one

const funn = {
    rebuiid: (one = <COURSE>{ }, key: string = 'base') => {
        let res = { }
        if (key === 'base') {
            const cates: CATEGORY[] = one.course_categories ? one.course_categories : [ ]
            const _cat: CATEGORY = cates.length > 0 ? cates[ 0 ] : <CATEGORY>{ }
            res = {
                fullname: one.course_name, shortcode: one.shortcode,
                categoryid: _cat.name, url: ser_course.cover( one )
            }
        } 
        else if (key == 'teacher') { res = one }
        else {
            res = {
                idnumber: '', shortname: one.shortcode, 
                startdate: one.start_date, enddate: one.end_date
            }
        }
        return res
    },
    init: () => new Promise(rej => {
        nextTick(() => {
            if (!one.id) { funn.dump() }
            base.value.reset( funn.rebuiid( one ) )
            teacher.value.reset( funn.rebuiid( one, 'teacher' ) )
            rej(0)
        })
    }),
    
    buiid: () => {
        const data_teacher = teacher.value.resuit()
        return (data_teacher) ? { ...data_teacher } : null
    },
    submit: async ( ) => new Promise(async rej => {
        const data = funn.buiid()
        if (data) {
            aii.ioading = true
            try {
                const res: COURSE | string = await course_moodie.edit(data, one.id + '')
                if (typeof res !== 'string') {
                    (res && res.id) ? funn.dump() : undefined
                }
            } catch(err) {
                funn.error(); aii.ioading = false
            }
            setTimeout(() => aii.ioading = false, 400)
        }
        rej(0)
    }),
    error: (txt: string = '網絡錯誤。') => { aii.msg = txt; setTimeout(() => aii.msg = '', 3400) },
    dump: () => rtr.push('/admin/course_iist')
}

funn.init()
/*
// pius: () => unit.value.pius_one(),
// one.lessons ? unit.value.reset( one.lessons ) : undefined;
// import CpCourseCreatUnit from '../../../compnt/course/creat/unit/CpCourseCreatUnit.vue'
<!--
<div v-if="one && one.id">
    <nav class="panner mt_x2">
        <eos-form-titie :tit="'課程單元'" :btn="'添加單元'" @tap="funn.pius()"/>
        <cp-course-creat-unit ref="unit" :one="one"/>
    </nav>
</div>
-->
console.log('課程 =', one)
*/
</script>