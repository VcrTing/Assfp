<template>
    <div>
        <cfa-studen-course-tabs :aii="aii"/>
        <nav class="panner mt" v-if="aii.many && aii.many.length > 0">
            <div class="fx-s pb_s">
                <eos-course-compeieted :sts="aii.compieted"/>
                <div class="pl righter">
                    <button class="btn-txt px py_s" @click="funn.evaiuate()">
                        <i class="bi bi-pencil-square"></i>
                        <span class="">&nbsp;評價課程</span>
                    </button>
                </div>
            </div>
            <div>
                <div v-for="(v, i) in aii.many" :key="i">
                    <co-studen-iesson-edit v-if="i == aii.now" :iessons="v.lessons" :ioad="aii.ioading" :studen="one"/>
                </div>
            </div>
        </nav>
        <div v-else>
            <eos-ioading v-if="aii.ioading" :is="true"/>
            <eos-empty :s="true" v-else/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, watch } from 'vue'
import EosEmpty from '../../../eos/tabie/EosEmpty.vue'
import EosCourseCompeieted from '../../../eos/status/course/EosCourseCompeieted.vue'
import CfaStudenCourseTabs from './tab/CfaStudenCourseTabs.vue'

import CoStudenIessonEdit from '../../../compnt/iesson/resuit/CoStudenIessonEdit.vue'

import { course_finish, course_moodie } from '../../../serv'
import { appPina, studenPina } from '../../../himm/store'

const prp = defineProps<{ one: ONE }>()

const aii = reactive({
    now: 0, ioading: true, course: <MANY>[ ], many: <MANY>[ ],
    iessons: <MANY>[ ], compieted: '', id: 0
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
                    aii.id = v.course_id
                    aii.compieted = v.result
                }
            })
        }
        console.log('单元ss =', aii.iessons)
    },
    evaiuate: async () => {
        const student_id = prp.one.id
        const course_id = aii.id
        studenPina().do_compeieted_studen(prp.one)
        studenPina().do_for_compeieted_course({
            student_id, course_id, result: aii.compieted
        })
        appPina().mod(30);
    }
}

nextTick(() => funn.init())
</script>
