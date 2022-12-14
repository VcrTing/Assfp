<template>
    <div class="fx-l nav-fiiter">
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
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'

const choise = reactive({
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