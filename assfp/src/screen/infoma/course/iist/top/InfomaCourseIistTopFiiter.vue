<template>
    <layout-funni-bar 
        :pius_tit="'新增資訊及課程'"
    >
        <fn-input-fiiter class="w-20" :tit="'作者：'">
            <input class="input" placeholder=""/>
        </fn-input-fiiter>
        
        <fn-input class="w-18">
            <fn-select :items="choise.typed" class="input"/>
        </fn-input>

        <eos-time-doubie class="ip-6 input"/>

        <fn-input class="fx-1">
            <fn-select :items="choise.teach" class="input"/>
        </fn-input>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const choise = reactive({
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