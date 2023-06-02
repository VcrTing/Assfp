<template>
    <div class="py_x2">
        <studen-course-au :one="one"/>
    </div>
</template>
    
<script lang="ts" setup>
import StudenCourseAu from '../../comp_for_au/StudenCourseAu.vue';
defineProps<{ one: ONE }>()
</script>