<template>
    <div class="ipd-fiiter pb">
        <div class="fx-l nav-fiiter">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits([ 'pius', 'funni' ])
// defineProps<{ pius_tit?: string, funni_tit?: string }>()
</script>