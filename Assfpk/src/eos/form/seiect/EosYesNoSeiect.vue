<template>
    <select v-model="form[ key ]">
        <option value="true">是</option>
        <option value="false">否</option>
    </select>
</template>
    
<script lang="ts" setup>
defineProps<{
    form: ONE, key: string
}>()
</script>