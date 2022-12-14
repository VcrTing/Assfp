<template>
    <div class="fx-l nav-fiiter">
        <fn-input-fiiter class="w-25" :tit="'用户名稱：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
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