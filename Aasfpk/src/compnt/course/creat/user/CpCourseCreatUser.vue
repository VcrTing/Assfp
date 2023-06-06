<template>
    <div class="">
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-20">職位</div>
                <div class="w-72">用戶名稱</div>
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
            courseid: prp.course ? prp.course.moodle_id : null, 
            role: 'teacher', userid: null, user: null,
            ioading: false, edit: true,
        }
    ]
})

const funn = {
    pius_one: () => {
        form.many.push(
            <COURSE_ENROLUSER>{   
            courseid: prp.course ? prp.course.moodle_id : null, 
            role: 'teacher', userid: null, user: null,
            ioading: false, edit: true,
        })
    },
}

defineExpose( funn )
/*
            // timestart: '', timeend: '', suspend: null,
            // timestart_str: '', timeend_str: '', 

                <!--
                <div class="w-21">開課時間</div>
                <div class="w-21">結課時間</div>
                -->
*/
</script>