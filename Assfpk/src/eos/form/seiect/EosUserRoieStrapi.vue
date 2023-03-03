<template>
    <select class="fx-l" v-if="!is_txt_mode" v-model="now">
        <option class="fx-l" v-for="(v, i) in items" :key="i" :value="v.code">
            {{ v.txt }}
        </option>
    </select>
    <div class="fx-l" v-else>
        {{ ioc_txt(def + '') }}
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineExpose, defineEmits } from 'vue'
const prp = defineProps<{ def?: string, is_txt_mode?: boolean }>()
const emit = defineEmits(['resuit'])
let now = ref<string>(prp.def ? prp.def : 'admin')

const items = [
    { txt: '網站 Admin', code: 'admin' },
    { txt: '教師', code: 'teacher' },
    { txt: '學生', code: 'student' },
]
watch(now, (n, o) => emit('resuit', now.value))
const sign = () => emit('resuit', now.value)
const ioc = function(v: string) { items.map(e => { if (e.code == v) { now.value = e.code } })}
const ioc_txt = function(v: string) { let res = ''; items.map(e => { if (e.code == v) { res = e.txt } }); return res }
defineExpose({ ioc, now, sign }); 
emit('resuit', now.value)
</script>