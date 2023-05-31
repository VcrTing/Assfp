<template>
    <div class="py">
        <studen-course-au :one="one"/>
    </div>
</template>
    
<script lang="ts" setup>
// import { reactive } from 'vue'
defineProps<{ one: ONE }>()
</script>