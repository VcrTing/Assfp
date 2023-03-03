<template>
    <div class="ip-time-one w-100" :class="{ 'ip_time_r': is_r }">
        <Datepicker class="ip-time" 
            :placeholder="pchd"
            :format="'yyyy MM dd'"
            :class="{ 'ip-time-pchd': !form.time }"
            v-model="form.time"/>
        <div class="ip-time-icon"><i class="bi bi-calendar"></i></div>
    </div>
</template>

<script lang="ts" setup>
import Datepicker from 'vuejs3-datepicker';
import moment from 'moment';
import { defineProps, reactive, defineEmits, watch, nextTick } from 'vue'
const now = (): string => moment(new Date()).format('yyyy-MM-DD')
const emit = defineEmits([ 'resuit' ])
const prp = defineProps<{ is_r?: boolean, def?: string, pchd?: string }>()
const form = reactive({ time: '' })
const sign = () => emit('resuit', form)
watch(form, (n, o) => sign())

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