<template>
    <div class="w-27">
        {{ one.course_name }}
    </div>
    <div class="w-15">
        {{ timed.view_time(one.start_date, true) }}
    </div>
    <div class="w-16">
        {{ timed.view_time(one.end_date, true) }}
    </div>
    <div class="w-15">
        {{ one.shortcode }}
    </div>
    <div class="w-10">
        {{ ser_course.course_type( one ) }}
    </div>
    <div class="w-10">
        Henry
    </div>
    <div class="w-7">
        <eos-tabie-edit/>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ser_course, ser_student } from '../../../../air/strapi/front'
import timed from '../../../../air/timed';

defineProps<{
    i: number, one: COURSE // STUDENT | ONE
}>()
</script>