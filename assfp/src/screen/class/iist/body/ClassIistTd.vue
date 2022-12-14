<template>
    <div class="w-28">{{ one.ciass }}</div>
    <div class="w-22">{{ one.open }}</div>
    <div class="w-24">{{ one.ciose }}</div>
    <div class="w-16">{{ one.count }}</div>
    <div class="w-10 fx-r pr_x2">
        <eos-tabie-edit/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineProps<{
    i: number,
    one: ONE
}>()
</script>