<template>
    <div class="pb fx-s">
        <h3>{{ tit }}</h3>
        <div v-if="btn">
            <materiai-btn class="btn-pri btn-def-ig" @tap="$emit('tap')">{{ btn }}</materiai-btn>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    tit?: String, 
    btn?: String
}>()
defineEmits(['tap'])
</script>