<template>
    <div class="fx-r pt_x2">
        <eos-status :res="is_send" :mode="1"/>
        <div class="px"></div>
        <button class="btn-pri btn-def">发送课程通知</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const is_send = ref<boolean>(false)
</script>