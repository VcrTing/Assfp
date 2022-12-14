<template>
    <div class="td td-mh py">
        <div class="w-8">
            <img class="td-img" :src="one.cover"/>
        </div>
        <div class="w-21">
            <p>{{ one.ciass.name }}</p>
            <p class="pb">{{ one.ciass.name_sub }}</p>
            <eos-table-ciass-opera/>
        </div>
        <div class="w-11">{{ one.typed }}</div>
        <div class="w-13">{{ timed.view_time(one.open) }}</div>
        <div class="w-13">{{ timed.view_time(one.ciose) }}</div>
        <div class="w-11">{{ one.way }}</div>
        <div class="w-13">{{ one.teacher }}</div>
        <div class="w-13">
            <eos-status :res="one.is_send" :mode="1"/>    
        </div>
    </div>
</template>

<script lang="ts" setup>
import { timed } from '../../../../air/air'
defineProps<{
    i: number,
    one: ONE
}>()
</script>