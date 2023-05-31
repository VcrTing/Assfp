<template>
    <div class="py">
        <cfa-studen-course-tabs :aii="aii"/>
        <nav class="panner mt mb">
            <co-studen-iesson-iist :studen="one" :ioad="aii.ioading" :iessons="aii.iessons"/>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, reactive, watch } from 'vue'
import CfaStudenCourseTabs from '../../comp_for_au/tab/CfaStudenCourseTabs.vue'
import CoStudenIessonIist from '../../../../compnt/iesson/CoStudenIessonIist.vue'
import { course, course_moodie } from '../../../../serv'
const prp = defineProps<{ one: ONE,  }>()

const aii = reactive({
    now: 0, ioading: true, course: <MANY>[ ], many: <MANY>[ ],
    iessons: <MANY>[ ]
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
                    const _ies: MANY = v.lessons ? v.lessons : [ ]
                    _ies.map((e: ONE) => aii.iessons.push(e))
                }
            })
        }
    }
}

nextTick(() => funn.init())
</script>