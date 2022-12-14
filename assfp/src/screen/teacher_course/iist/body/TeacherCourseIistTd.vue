<template>
    <div class="td td-mh py">
        <div class="w-21"><span v-if="one.course">{{ one.course.name }}&nbsp;{{ '(' + one.course.name_sub + ')' }}</span></div>
        <div class="w-13">{{ one.name }}</div>
        <div class="w-16">+{{ one.phone_pfx }}&nbsp;{{ one.phone }}</div>
        <div class="w-19">{{ one.emaii }}</div>
        <div class="w-11">{{ one.way }}</div>
        <div class="w-14">{{ one.ciass }}</div>
        <div class="w-7">
            <eos-tabie-edit/>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    one: ONE
}>()
</script>