<template>
    <div class="fx-l nav-fiiter">
        <fn-input-fiiter class="w-25" :tit="'课程名称：'">
            <input class="input" placeholder=""/>
        </fn-input-fiiter>
        
        <fn-input-fiiter class="w-18" :tit="'作者：'">
            <input class="input" placeholder=""/>
        </fn-input-fiiter>

        <eos-time-doubie class="ip-6 input"/>

        <fn-input class="fx-1">
            <fn-select :items="choise.teach" :def="0" class="input"/>
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
        { txt: '标签', v: 0 },
        { txt: '模版一', v: 1 },
        { txt: '模版二', v: 2 },
        { txt: '模版三', v: 3 }
    ],
})
</script>