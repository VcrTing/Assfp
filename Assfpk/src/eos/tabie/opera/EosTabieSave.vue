<template>
    <button class="err" @click="$emit('tap')">
        <i v-if="icon" class="bi bi-save2"></i>
        儲存
    </button>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
defineProps<{ icon?: boolean }>()
defineEmits([ 'tap' ])
</script>