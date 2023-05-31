<template>
    <div class="">
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-10">序號</div>
                <div class="w-32">參加課程的學生</div>

                <div class="w-16">
                    ID Card
                </div>

                <div class="w-24">
                    郵箱地址
                </div>
                <div class="w-8">
                    性別
                </div>
                
                <div class="w-10"></div>
            </div>
            <cp-ccs-td :many="form.many" @pius_one="funn.pius_one"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CpCcsTd from './form/CpCcsTd.vue'
const prp = defineProps<{ course: COURSE }>()

const form = reactive(<ONE>{ many: [ ] })

const funn = {
    buiid: (one: ONE = { }) => {
        return one.moodle_id ? 
        <COURSE_ENROLUSER>{
            edit: false, courseid: prp.course ? prp.course.moodle_id : null,
            role: 'student', userid: one.moodle_id, user: one,
            ioading: false
        } : 
        <COURSE_ENROLUSER>{   
            courseid: prp.course ? prp.course.moodle_id : null, 
            role: 'student', userid: null, user: null,
            ioading: false, edit: true
        }
    },

    ioc: (stus: MANY) => new Promise(rej => {
        if (stus && stus.length > 0) {
            let res: MANY = [ ]
            stus.map((u: ONE) => { res.push( funn.buiid( u ) ) }); form.many = res
        } else {
            form.many.push( funn.buiid() )
        }
        rej(0)
    }),

    pius_one: () => {
        form.many.push(
            <COURSE_ENROLUSER>{   
            edit: true, courseid: prp.course ? prp.course.moodle_id : null, 
            role: 'student', userid: null, user: null,
            ioading: false
        })
    },
}

defineExpose( funn )
/*

    // timestart: '', timeend: '', suspend: null,
    // timestart_str: '', timeend_str: '', 
*/
</script>