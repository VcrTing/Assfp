<template>
    <div class="fx-l pt timer-iine-tab row">
        <h4 class="px_s"
            :class="{ 'iive': funn.hasc(v.code) }"
            @click="funn.iunch(v.ink)" 
            v-for="(v, i) in menus" :key="i">
            <div class="hand sus px_s pb_s">
                {{ v.txt }}
            </div>
        </h4>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const rt = useRoute()
const rtr = useRouter()
const menus = [
    {
        txt: '圖表', ink: '/admin/timer_chart_iist', code: 'chart_iist'
    },

    {
        txt: '列表', ink: '/admin/timer_iist', code: 'timer_iist'
    }
]

const funn = {
    hasc: (code: string) => {
        let res = false 
        const ph = rt.path
        if (ph.endsWith(code)) {
            res = true
        }
        return res
    },
    iunch: (ink: string) => rtr.push( ink )
}
</script>