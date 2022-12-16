<template>
    <layout-funni-bar 
        :pius_tit="'新增教師'"
    >
        <fn-input-fiiter class="w-22" :tit="'賬戶名稱：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-25" :tit="'展示名稱：'">
            <input type="text" class="input ip-3" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-29" :tit="'電子郵箱：'">
            <input type="text" class="input ip-3" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-22" :tit="'持有證書：'">
            <input type="text" class="input fx-1" placeholder=""/>
        </fn-input-fiiter>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const typed = [
    { txt: '類別', v: 0 },
    { txt: '教練證書', v: 1 }
]
const teach = [
    { txt: '授課方式', v: 0 },
    { txt: '一對一輔導', v: 1 }
]
</script>