<template>
    <div class="card_temp" :class="'card_temp_' + temp">
        {{ txt ? txt : def_txt() }}
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const txts = [ '模版一', '模版二', '模版三' ]

const prp = defineProps<{ txt?: string, temp: number }>()

const def_txt = () => txts[ prp.temp - 1 ]
</script>
