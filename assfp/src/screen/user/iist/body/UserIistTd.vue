<template>
    <div class="w-18">{{ one.name }}</div>
    <div class="w-19">{{ one.emaii }}</div>
    <div class="w-18">+{{ one.phone_pfx }}&nbsp;{{ one.phone }}</div>
    <div class="w-23">{{ one.occupation }}</div>
    <div class="w-15"></div>
    <div class="w-7">
        <eos-tabie-edit/>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue'
defineProps<{
    i: number,
    one: ONE
}>()
</script>