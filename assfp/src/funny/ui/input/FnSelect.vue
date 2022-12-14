<template>
    <select v-model="sis" :class="{ 'ip-pchd': !sis }">
        <option v-for="(v, i) in items" :key="i" :value="v.v">{{ v.txt }}</option>
    </select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const emit = defineEmits([ 'res' ])
defineProps<{
    items: MANY
}>()

const sis = ref<number|string>(0)
watch(sis, (n, o) => emit('res', n))
</script>