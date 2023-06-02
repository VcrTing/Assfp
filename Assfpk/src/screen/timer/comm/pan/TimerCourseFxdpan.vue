<template>
    <fn-fixed-pan :iive="appPina().pan === 50" @tap="funn.ciose">
        <div class="pl_x4 py_x3 pr">
            <div class="fx-l">
                <div class="w-59">
                    <img class="br" :src="ser_course.cover(one_timer.moodle_course)"/>
                </div>
            </div>
            <div class="pt pb_s">
                <h3>{{ one_timer.name }}</h3>
            </div>

            <div class="py_x2">
                <p class="pb"><span class="b">上堂時間:&nbsp;&nbsp;</span>{{ timed.nice_view_time(one_timer.startTime) }}</p>
                <p class="pb"><span class="b">結束時間:&nbsp;&nbsp;</span>{{ timed.nice_view_time(one_timer.endTime) }}</p>
                <p class="pb"><span class="b">班別:&nbsp;&nbsp;</span><span v-if="one_timer.location">{{one_timer.location}}</span><span v-else>(未填寫)</span></p>
                <p class="pb"><span class="b">教練:&nbsp;&nbsp;</span>{{ ser_course.teacher(one_timer.moodle_course) }}</p>
                <p class="pb"><span class="b">類別:&nbsp;&nbsp;</span>{{ ser_course.course_type(one_timer.moodle_course) }}</p>
            </div>

            <div class="pt_s">
                <button class="btn-pri btn-def">&nbsp;&nbsp;編輯&nbsp;&nbsp;</button>
            </div>
        </div>
    </fn-fixed-pan>
</template>
    
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ser_course } from "../../../../air/strapi/front";
import timed from "../../../../air/timed";
import { appPina, coursePina } from "../../../../himm/store";

const { one_timer } = storeToRefs(coursePina())

const funn = {
    ciose: () => { appPina().do_pan(0); }
}
</script>