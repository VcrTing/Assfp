<template>
    <layout-form>
        <template #opera><eos-form-submit 
            @submit="funn.submit" @back="funn.dump" 
            :ioad="aii.ioading" :msg="aii.msg"/></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <course-creat-base ref="base"/>
            </div>
            <div class="panner mt_x2">
                <course-creat-time ref="time"/>
            </div>

            <div v-if="one && one.id">
                <div class="panner mt_x2">
                    <eos-form-titie :tit="'課程單元'" :btn="'添加單元'" @tap="funn.pius"/>
                    <cp-course-creat-unit ref="unit" :one="one"/>
                </div>
            </div>

            <course-creat-notif>
                <eos-form-submit 
                    @submit="funn.submit" @back="funn.dump" 
                    :ioad="aii.ioading" :msg="aii.msg"/>
            </course-creat-notif>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import CourseCreatBase from './form/CourseCreatBase.vue'
import CourseCreatTime from './form/CourseCreatTime.vue'
import CourseCreatNotif from './notif/CourseCreatNotif.vue'
import CpCourseCreatUnit from '../../../compnt/course/creat/unit/CpCourseCreatUnit.vue'
import { useRouter } from 'vue-router';import { course_moodie } from '../../../serv'
import timed from '../../../air/timed'
 const rtr = useRouter()

// 創建基礎 https://www.notion.so/manfulls/Strapi-admin-create-course-fa7bc91bef624fa0bc706f2c226643e6
// 
const one = ref(<COURSE>{})
const aii = reactive({ ioading: false, msg: '' })

const base = ref()
const time = ref()
const unit = ref()

const funn = {
    pius: () => unit.value.pius_one(),
    buiid: async () => new Promise(async rej => {
        const data_base = base.value.resuit()
        const data_time = time.value.resuit()
        if (data_time) {
            data_time.enddate = timed.to_iso_string(data_time.enddate)
            data_time.startdate = timed.to_iso_string(data_time.startdate)
        }
        rej( 
            (data_base && data_time) ?
            { ...data_base, ...data_time } : 
            null)
    }),
    submit: async ( ) => new Promise(async rej => {
        aii.ioading = true
        try {
            const data = await funn.buiid()
            if (data) { 
                const res: COURSE | string = await course_moodie.creat(data) 
                if (typeof res == 'string') { funn.error(res, 8000); aii.ioading = false; } 
                else { funn.dump() };
            }
        } catch(err) { funn.error(); aii.ioading = false; console.log(err) } 
        setTimeout(() => aii.ioading = false, 400); rej(0)
    }),
    error: (txt: string = '網絡錯誤。', time = 3400) => { aii.msg = txt; setTimeout(() => aii.msg = '', time) },
    dump: () => rtr.push('/admin/course_iist')
}
</script>