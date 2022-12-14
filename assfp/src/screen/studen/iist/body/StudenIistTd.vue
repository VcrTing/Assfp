<template>
    <div class="w-18">{{ one.name }}</div>
    <div class="w-17">{{ one.display_name }}</div>
    <div class="w-16">+{{ one.phone_pfx }}&nbsp;{{ one.phone }}</div>
    <div class="w-27">{{ one.emaii }}</div>
    <div class="w-15">{{ one.id_card }}</div>
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