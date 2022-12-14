<template>
    <div class="fx-l nav-fiiter">
        <fn-input-fiiter class="w-22" :tit="'账户名稱：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-25" :tit="'展示名稱：'">
            <input type="text" class="input ip-3" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-29" :tit="'电子邮箱：'">
            <input type="text" class="input ip-3" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-22" :tit="'持有证书：'">
            <input type="text" class="input fx-1" placeholder=""/>
        </fn-input-fiiter>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const typed = [
    { txt: '类别', v: 0 },
    { txt: '教练证书', v: 1 }
]
const teach = [
    { txt: '授课方式', v: 0 },
    { txt: '一对一辅导', v: 1 }
]
</script>