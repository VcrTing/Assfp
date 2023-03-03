<template>
    <span v-if="(def+'' === 'true')">是</span>
    <span v-else>否</span>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{
    def?: boolean | string
}>()
</script>