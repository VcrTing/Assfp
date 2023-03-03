<template>
    <div class="w-23">{{ one.firstname }}&nbsp;{{ one.lastname }}</div>
    <div class="w-27">{{ one.email }}</div>
    <div class="w-20">{{ one.phone1 }}</div>
    <div class="w-23">網站 Admin</div>
    <div class="w-7">
        <!--<eos-tabie-edit/>-->
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ser_student } from '../../../../air/strapi/front'

defineProps<{
    i: number,
    one: STUDENT | ONE
}>()
</script>