<template>
    <div class="ip-time-doubie">
        <div class="fx-l w-100">
            <fn-date-picker :_pchd="pchd_1 ? pchd_1 : '开始日期'" :form="time_1"/>
            <span class="pl_s iptd_icon">
                <i class="bi bi-chevron-right"></i>
            </span>
            <fn-date-picker :_pchd="pchd_2 ? pchd_2 : '截止日期'" :form="time_2"/>
        </div>
        <div class="ip-time-icon">
            <i class="bi bi-calendar"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import { defineComponent, reactive, ref, watch } from 'vue'
const prp = defineProps<{
    def_1?: string,
    is_r?: boolean,
    pchd_1?: string,
    pchd_2?: string
}>()

const now = (): string => moment(new Date()).format('yyyy-MM-DD')
const time_1 = reactive({
    time: prp.def_1 ? prp.def_1 : now()
})
const time_2 = reactive({
    time: prp.def_1 ? prp.def_1 : now()
})
</script>

<style lang="sass" scoped>
.iptd_icon
    transform: translateX(-12px)
</style>