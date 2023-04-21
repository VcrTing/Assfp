<template>
    <layout-funni-bar-pure
        >
        <div class="fx-l">
            <h2>{{ timed.MONTHS[ aii.m - 1 ] }}.{{ aii.y }}&nbsp;
            </h2>
            <div>
                <i class="bi bi-chevron-left" @click="funn.to(-1)"></i>
                <i class="bi bi-chevron-right" @click="funn.to(1)"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
        </div>
        <fn-input-fiiter class="w-17 w-20-p" :tit="'年份'">
            <select class="input" v-model="aii.y">
                <option :value="v" v-for="(v, i) in aii.ys" :key="i">{{ v }}</option>
            </select>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-17 w-20-p" :tit="'月份'">
            <select class="input" v-model="aii.m">
                <option :value="v" v-for="(v, i) in aii.ms" :key="i">{{ v }}</option>
            </select>
        </fn-input-fiiter>
    </layout-funni-bar-pure >
</template>

<script lang="ts" setup>
import { nextTick, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import timed from '../../../air/timed'
const rtr = useRouter()
const aii = reactive({
    y: timed.y(), m: timed.m(), ms: <number[]>[ ], ys: <number[]>[ ]
})
watch(() => aii.y, () => funn.gen_ms())
const funn = {
    init: () => { aii.ms = timed.month(); aii.ys = timed.years(2021); nextTick(() => {
        aii.y = timed.y(); aii.m = timed.m()
    }) },
    gen_ms: () => {
        if (aii.y == timed.y()) { aii.ms = timed.month() } else { aii.ms = timed.month(12) }
    },
    to: (n: number) => {
        let pre = aii.m + n
        const end = (aii.ms.length > 0) ? aii.ms[aii.ms.length - 1] : 1
        if (pre < 1) { pre = end }
        if (pre > end) { pre = 1 }
        aii.m = pre
    }
}; funn.init()
</script>