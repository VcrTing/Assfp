<template>
    <div class="td td-mh py">
        <div class="w-8">{{ one.id }}</div>
        <div class="w-34 pr">{{ one.name }}</div>
        <div class="w-10">{{ one.location }}</div>
        <div class="w-17">{{ timed.view_time(one.startTime, true) }}</div>
        <div class="w-17">{{ timed.view_time(one.endTime, true) }}</div>
        <div class="w-9 pl_s"><eos-yes-no :def="one.isOnSchedule"/></div>
        <div class="w-7 fx-r">
            <eos-tabie-edit/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { timed } from '../../../../air/air'
import { ser_course } from '../../../../air/strapi/front';
defineProps<{ i: number, one: ONE }>()
</script>