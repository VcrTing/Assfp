<template>
    <div class="fx-l nav-fiiter">
        <fn-input-fiiter :tit="'班别：'" class="w-25">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-25" :tit="'开学时间：'">
            <eos-time-choise :pchd="''" class="input"/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-25" :tit="'结业时间：'">
            <eos-time-choise :pchd="''" class="input"/>
        </fn-input-fiiter>
        <div class="fx-1"></div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const form = reactive({
    typed: [
        { txt: '类别', v: 0 },
        { txt: '教练证书', v: 1 }
    ],
    teach: [
        { txt: '授课方式', v: 0 },
        { txt: '一对一辅导', v: 1 }
    ],
})
</script>