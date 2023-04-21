<template>
    <div class="">
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-16">職位</div>
                <div class="w-36">參加課程的學生</div>
                <div class="w-20">開課時間</div>
                <div class="w-20">結課時間</div>
                <div class="w-10"></div>
            </div>
            <cp-ccs-td :many="form.many" @pius_one="funn.pius_one"/>
        </div>
        <div class="py"></div>
        <!--eos-pagenation/-->
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CpCcsTd from './form/CpCcsTd.vue'
const prp = defineProps<{ course: COURSE }>()

const form = reactive(<ONE>{
    many: [
        <COURSE_ENROLUSER>{   
                edit: true, courseid: prp.course ? prp.course.id : null, 
            role: 'teacher', userid: null, user: null,
            timestart: '', timeend: '', suspend: null,
            timestart_str: '', timeend_str: '', ioading: false
        }
    ]
})

const funn = {
    pius_one: () => {
        form.many.push(
            <COURSE_ENROLUSER>{   
                edit: true, courseid: prp.course ? prp.course.id : null, 
            role: 'teacher', userid: null, user: null,
            timestart: '', timeend: '', suspend: null,
            timestart_str: '', timeend_str: '', ioading: false
        })
    },
}

defineExpose( funn )
</script>