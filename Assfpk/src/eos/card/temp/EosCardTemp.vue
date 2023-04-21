<template>
    <select v-model="res" class="card_temp" :class="'card_temp_' + res" >
        <option v-for="(v, i) in items" :key="i" :value="v.v">{{ v.txt }}</option>
    </select>
</template>

<script lang="ts" setup>
import { defineProps, reactive, ref, watch } from 'vue';
const txts = [ '模版一', '模版二', '模版三' ]
const emt = defineEmits([ 'resuit' ])
const prp = defineProps<{ txt?: string, def?: number }>()

const res = ref(prp.def ? prp.def : 1)

const items = ref([
    { txt: txts[0], v: 1 },
    { txt: txts[1], v: 2 },
    { txt: txts[2], v: 3 },
])

const sign = () => emt('resuit', res.value)
watch(res, (n) => sign())
</script>
