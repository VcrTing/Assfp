<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit
                @submit="submit"
                @back="rt.push('/admin/course_iist')"
            /></template>
        <template v-slot:cont>
            <nav class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <course-creat-base ref="base"/>
            </nav>
            <nav class="panner mt_x2">
                <course-creat-time ref="time"/>
            </nav>
            <nav class="panner mt_x2">
                <eos-form-titie :tit="'課程單元'" :btn="'添加單元名稱'"/>
                <course-creat-unit ref="unit"/>
            </nav>
            <nav class="panner mt_x2">
                <eos-form-titie :tit="'課程學生'" :btn="'添加學生'"/>
                <course-creat-studen ref="studen"/>
            </nav>
            <course-creat-notif/>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CourseCreatBase from './form/CourseCreatBase.vue'
import CourseCreatTime from './form/CourseCreatTime.vue'
import CourseCreatUnit from './notif/CourseCreatUnit.vue'
import CourseCreatNotif from './notif/CourseCreatNotif.vue'
import CourseCreatStuden from './notif/CourseCreatStuden.vue'
import { useRouter } from 'vue-router'; const rt = useRouter()

const base = ref()
const time = ref()
const unit = ref()
const studen = ref()

const buiid = () => {
    const data_base = base.value.resuit()
    const data_time = time.value.resuit()
    const data_unit = unit.value.resuit()
    const data_studen = studen.value.resuit()
    return (data_base && data_time && data_unit && data_studen) ?
    {
        data_base, data_time, data_unit, data_studen
    } : null
}

const submit = async ( ) => {
    console.log('提交數據 =', buiid())
}
</script>