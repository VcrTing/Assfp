<template>
    <div class="fx-r pt_x2">
        <!--
        <eos-status :res="is_send" :mode="1"/>
        <div class="px"></div>
        <button class="btn-die btn-def">發送課程通知</button>
        <div class="px_s"></div>
        <button class="btn-pri btn-def-ig">儲存</button>
        -->
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const is_send = ref<boolean>(false)
</script>