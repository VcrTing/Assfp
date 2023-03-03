<template>
    <select class="fx-l" v-if="!is_txt_mode" v-model="now">
        <option class="fx-l" v-for="(v, i) in cates.categories" :key="i" :value="v.id">
            {{ v.name }}
        </option>
    </select>
    <div class="fx-l" v-else>
        {{ ioc_txt(def + '') }}
    </div>
</template>
 
<script setup lang="ts">
import { coursePina } from '../../../himm/store'
import { ref, watch, defineExpose, defineEmits, watchEffect } from 'vue'
const prp = defineProps<{ def?: ID, is_txt_mode?: boolean }>()
const emit = defineEmits(['resuit'])

const sign = () => emit('resuit', now.value)
const init = () => {
    const many = cates.categories
    if (many && many.length > 0) { const one: CATEGORY = many[0]; now.value = one.id }
}
const ioc = function(v: ID) { cates.categories.map((e: CATEGORY) => { if (e.id == v) { now.value = e.id } })}
const ioc_txt = function(v: string) { let res = ''; cates.categories.map((e: CATEGORY) => { if (e.name == v) { res = e.name } }); return res }

const cates = coursePina()
let now = ref<ID>()

watch(now, (n, o) => sign())
watch(() => cates.categories, (n) => { init() }); init()

sign()
defineExpose({ ioc, now, sign })
</script>