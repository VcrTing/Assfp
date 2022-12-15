<template>
    <div class="td" :class="{ 'def_x2': !one.status }">
        <div class="w-32">
            <p>{{ one.ciass.name }}</p>
            <p class="pb">{{ one.ciass.name_sub }}</p>
            <eos-table-ciass-opera/>
        </div>
        <div class="w-14">
            {{ one.author }}
        </div>
        <div class="w-19 pr">
            {{ one.publish }}
        </div>
        <div class="w-25 pr_x2">
            <eos-card-temp :temp="one.tag" />
        </div>
        <div class="w-13">
            <fn-select class="input" :items="choise.status" :def="one.status"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { timed } from '../../../../air/air'
defineProps<{
    i: number,
    one: ONE
}>()
const choise = reactive({
    status: [
        { txt: '启用', v: true },
        { txt: '未启用', v: false },
    ]
})
</script>