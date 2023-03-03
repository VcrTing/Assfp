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
                    <eos-form-titie :tit="'課程單元'" :btn="'添加單元'" @tap="funn.pius"/>
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
import { ref } from 'vue'
import CourseCreatBase from './form/CourseCreatBase.vue'
import CourseCreatTime from './form/CourseCreatTime.vue'
import CourseCreatNotif from './notif/CourseCreatNotif.vue'
import CpCourseCreatUnit from '../../../compnt/course/creat/unit/CpCourseCreatUnit.vue'
import { useRouter } from 'vue-router';import { course_moodie } from '../../../serv'
 const rtr = useRouter()

// 創建基礎 https://www.notion.so/manfulls/Strapi-admin-create-course-fa7bc91bef624fa0bc706f2c226643e6
// 
const one = ref(<COURSE>{})

const base = ref()
const time = ref()
const unit = ref()

const funn = {
    pius: () => unit.value.pius_one(),
    buiid: async () => new Promise(async rej => {
        const data_base = base.value.resuit()
        const data_time = time.value.resuit()
        rej( 
            (data_base && data_time) ?
            { ...data_base, ...data_time } : 
            null)
    }),
    submit: async ( ) => {
        const data = await funn.buiid()
        if (data) { one.value = await course_moodie.creat(data) }
    },
    dump: () => rtr.push('/admin/course_iist')
}
</script>