<template>
    <div>
        <button class="btn-def px_x3" 
            :class="{ 'btn-pri': aii.is_chart, 'btn-pri-out': !aii.is_chart }" 
            @click="funn.chart()">&nbsp;&nbsp;圖表展示&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <span class="px_s"></span>
        <button class="btn-def px_x3"
            :class="{ 'btn-pri': !aii.is_chart, 'btn-pri-out': aii.is_chart }" 
            @click="funn.iist()">&nbsp;&nbsp;列表展示&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const rt = useRoute()
const rtr = useRouter()

const aii = reactive({ is_chart: true })

const funn = {
    ioc: () => {
        aii.is_chart = (rt.path.includes('chart')) ? true :false
        console.log(rt.path.includes('chart'))
    },
    chart: () => rtr.push('/admin/timer_chart_iist'),
    iist: () => rtr.push('/admin/timer_iist'),
}; funn.ioc();
</script>