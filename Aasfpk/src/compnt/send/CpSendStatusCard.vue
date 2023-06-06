<template>
    <div class="cp-send-status-card" :class="{ 'cssc-succ': v.is_send, 'cssc-err': !v.is_send }">
        <button class="h4">
            <i class="bi bi-check-circle-fill"></i>
            &nbsp;
            <span v-if="v.is_send">妳的通知已發送</span>
            <span v-else>妳的通知等待中</span>
        </button>
        <div class="fs_s pt pb_s">
            <p>
                <span class="b">預計發送時間</span>
                <span class="pl_x2">{{ v.time_expect }}</span>
            </p>
            <p class="pt_s">
                <span class="b">實際發送時間</span>
                <span class="pl_x2">{{ v.time }}</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    v: ONE
}>()
</script>