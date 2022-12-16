<template>
    <layout-funni-bar 
        :pius_tit="'新增 班級'"
    >
        <fn-input-fiiter :tit="'班別：'" class="w-25">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-25" :tit="'開學時間：'">
            <eos-time-choise :pchd="''" class="input"/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-25" :tit="'結業時間：'">
            <eos-time-choise :pchd="''" class="input"/>
        </fn-input-fiiter>
        <div class="fx-1"></div>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const form = reactive({
    typed: [
        { txt: '類別', v: 0 },
        { txt: '教練證書', v: 1 }
    ],
    teach: [
        { txt: '授課方式', v: 0 },
        { txt: '一對一輔導', v: 1 }
    ],
})
</script>