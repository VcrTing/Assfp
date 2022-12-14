<template>
    <div class="fx-l nav-fiiter">
        <input type="text" class="input ip-5" placeholder="班别: SP0012"/>
        <eos-time-choise :pchd="'开学时间'" class="input"/>
        <eos-time-choise :pchd="'结业时间'" class="input"/>
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