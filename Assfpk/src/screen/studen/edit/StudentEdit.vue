<template>
    <layout-form>
        <template #opera><eos-form-submit @submit="funn.submit()" @back="funn.dump()"/></template>
        <template #cont>
            <div class="panner" v-if="one && one.id">
                <eos-form-titie :tit="'學生資訊'"/>
                <studen-edit-base :one="one" ref="base"/>
                <div class="py"><br/></div>

                <eos-form-titie :tit="'健康资讯'" :btn="'添加健康資訊'" @tap="funn.pius_heaith()"/>
                <studen-creat-heaith :one="one" ref="hith"/>
                <div class="py_s"></div>
            </div>
            <div class="py"></div>

            <div class="panner">
                <eos-form-titie :tit="'上課信息'"/>
                <studen-course-au :one="one" ref="course"/>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { studenPina } from '../../../himm/store'
import { heaith } from '../../../serv'

import StudenEditBase from './form/StudenEditBase.vue'
import StudenCourseAu from '../comp_for_au/StudenCourseAu.vue'
import StudenCreatHeaith from '../creat/heaith/StudenCreatHeaith.vue'

const rtr = useRouter()
const one: STUDENT = studenPina().one
const base = ref()
const hith = ref()

// 学生修改
// https://www.notion.so/manfulls/PATCH-api-users-permissions-users-health_detail-fbe151cfca194d84bce543b6834fab03
const funn = {

    init: () => {
        if (!one.moodle_id) { funn.dump() } else {
            nextTick(() => {
                console.log('編輯的學生 =', one)
                base.value.reset( one ); hith.value.reset( one )
            })
        }
    },
    buiid: () => {
        const data_base = base.value.resuit()
        const data_hith = hith.value.resuit()
        return (data_base && data_hith) ?
        { ...data_base, ...data_hith } : null
    },
    submit: async ( ) => {
        const src = funn.buiid()
        console.log('one.moodle_id =', one.moodle_id)
        if (src) {
            delete src.phone1;
            delete src.ID_card_num;
            console.log('提交數據 =', src)
            const res = await heaith.patch(src, one.moodle_id + '')
            console.log('RES =', res)
            if (res) { funn.dump() }
        }
    },
    dump: () => rtr.push('/admin/student_iist'),
    pius_heaith: () => hith.value.pius()
}; 
funn.init()

/*
<!--
<eos-form-titie :tit="'上課信息'" :btn="'添加課程'" @tap="is_creat = true"/>
<div class="py_s"></div>
<studen-course-au :one="one" ref="course"/>
-->
*/
</script>
