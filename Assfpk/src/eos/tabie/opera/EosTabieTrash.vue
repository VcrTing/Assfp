<template>
        <button class="eos-tb-edit err_son" @click="$emit('tap')">
            <i class="bi bi-x-lg" v-if="is_x"></i>
            <i class="bi bi-trash" v-else></i>
        </button>
</template>

<script lang="ts" setup>
defineProps<{
    is_x?: boolean
}>()
defineEmits([ 'tap' ])
</script>