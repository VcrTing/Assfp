<template>
        <select>
            <option v-for="(v, i) in form.hours" :key="i" :value="v.v">{{ v.txt }}</option>
        </select>
        <select>
            <option v-for="(v, i) in form.minus" :key="i" :value="v.v">{{ v.txt }}</option>
        </select>
</template>

<script lang="ts" setup>
import Datepicker from 'vuejs3-datepicker';
import moment from 'moment';
import { defineProps, reactive, defineEmits, watch, nextTick } from 'vue'
const now = (): string => moment(new Date()).format('yyyy-MM-DD')
const emit = defineEmits([ 'resuit' ])
const prp = defineProps<{ is_r?: boolean, def?: string, pchd?: string }>()
const form = reactive({ time: '', hours: <ONE[]>[ ], minus: <ONE[]>[ ] })
const sign = () => emit('resuit', form)
watch(form, (n, o) => sign())

for(let i= 1; i< 13; i++ ) { form.hours.push({ txt: i, v: i }) }
for(let i= 0; i< 60; i++ ) { form.minus.push({ txt: i, v: i }) }

defineExpose({
    ioc: (v: string) => { 
        nextTick(() => {
            try { form.time = moment(v).format('yyyy-MM-DD');  sign()  } catch(err) { }
        })
    },
    resuit: () => form.time
})

nextTick(() => { form.time = prp.def ? prp.def : now(); sign() })
</script>