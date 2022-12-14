<template>
    <div class="td td-mh py">
        <div class="w-26">
            <p>{{ one.ciass.name }}</p>
            <p class="pb">{{ one.ciass.name_sub }}</p>
            <eos-table-infoma-course-opera/>
        </div>
        <div class="w-10">
            {{ one.author }}
        </div>
        <div class="w-8">
            {{ one.typed }}
        </div>
        <div class="w-21 pr">
            {{ one.content }}
        </div>
        <div class="w-13">
            {{ one.next_publish }}
        </div>
        <div class="w-10">
            {{ one.record }}
        </div>
        <div class="w-15">
            <eos-card-temp :temp="one.tag" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { timed } from '../../../../../air/air'
defineProps<{
    i: number,
    one: ONE
}>()
</script>