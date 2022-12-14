<template>
    <div class="td td-mh py">
        <div class="w-18">{{ one.name }}</div>
        <div class="w-17">{{ one.display_name }}</div>
        <div class="w-16">+{{ one.phone_pfx }}&nbsp;{{ one.phone }}</div>
        <div class="w-38">{{ one.emaii }}</div>
        <div class="w-11">
            <eos-tabie-edit/>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    one: ONE
}>()
</script>
