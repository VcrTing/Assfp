<template>
    <div class="fx-l">
        <div class="w-26 w-30-p pr_x4">
            <img class="br" :src="ser_course.cover(one)"/>
        </div>
        <div class="fx-1">
            <h2>{{one.course_name}}</h2>
            <div class="pt">
                <div>
                    開課時間:&nbsp;{{ timed.view_time(one.start_date) }}
                </div>
                <div>
                    結束時間:&nbsp;{{ timed.view_time(one.end_date) }}
                </div>
                <div class="pt_s">
                    課程類別:&nbsp;{{ ser_course.course_type(one) }}
                </div>
                <div class="pt_s">
                    授課教師:&nbsp;{{ ser_course.teacher(one) }}
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import timed from '../../../../air/timed';
import { ser_course } from '../../../../air/strapi/front';
const prp = defineProps<{ one: COURSE }>()
const iessonL = () => {
    const iss: ONE = prp.one.lessons
    if (iss && iss.data) { return iss.data.length }
    return 0
}
</script>