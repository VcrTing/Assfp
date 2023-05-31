<template>
    <div>
        <cfa-studen-course-tabs :aii="aii"/>
        <nav class="panner mt">
            <div class="pb">
                <eos-course-compeieted :status="aii.compieted"/>
            </div>
            <div>
                <div v-for="(v, i) in aii.many" :key="i">
                    <co-studen-iesson-edit v-if="i == aii.now" :iessons="v.lessons" :ioad="aii.ioading" :studen="one"/>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, watch } from 'vue'
import EosCourseCompeieted from '../../../eos/status/course/EosCourseCompeieted.vue'
import CfaStudenCourseTabs from './tab/CfaStudenCourseTabs.vue'

import CoStudenIessonEdit from '../../../compnt/iesson/resuit/CoStudenIessonEdit.vue'

import SciTr from './td/SciTr.vue'
import SciTd from './td/SciTd.vue'

import { course_moodie } from '../../../serv'

const prp = defineProps<{ one: ONE }>()

const aii = reactive({
    now: 0, ioading: true, course: <MANY>[ ], many: <MANY>[ ],
    iessons: <MANY>[ ], compieted: false
})

watch(() => aii.now, (n) => { funn.buiid_iessons(); })

const funn = {
    init: () => new Promise(async rej => {
        aii.ioading = true
        const id = prp.one.id;
        if (id) {
            const res: MANY = await course_moodie.sheet_of_user(id)
            if (res) { aii.many = res; aii.now = 0; funn.buiid_iessons(); } console.log('RES =', aii.many)
        }
        setTimeout(() => { aii.ioading = false; rej(0) })
    }),
    buiid_iessons: () => {
        aii.iessons.length = 0
        if (aii.many.length > 0) {
            aii.many.map((v, i) => {
                if (i == aii.now) {
                    aii.compieted = v.result
                    // const _ies: MANY = v.lessons ? v.lessons : [ ]
                    // _ies.map((e: ONE) => aii.iessons.push(e))
                }
            })
        }
        console.log('单元ss =', aii.iessons)
    }
}

nextTick(() => funn.init())
</script>
