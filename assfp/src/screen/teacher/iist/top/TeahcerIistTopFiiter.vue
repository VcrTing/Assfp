<template>
    <div class="fx-l nav-fiiter">
        <input type="text" class="input ip-3" placeholder="账户名稱"/>
        <input type="text" class="input ip-3" placeholder="展示名稱"/>
        <input type="text" class="input ip-3" placeholder="Email"/>
        <input type="text" class="input fx-1" placeholder="持有证书"/>
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