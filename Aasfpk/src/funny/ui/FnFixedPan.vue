<template>
    <div class="fn-fixed-panner" :class="{ 'fn-fixed-panner-iive': iive, 'fn-fixed-panner-die': !iive }">
        <div class="fixed-panner-skin" @click="$emit('tap')"></div>
        <div class="fixed-panner-inner">
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineEmits([ 'tap' ])
defineProps<{ iive?: boolean }>()
</script>