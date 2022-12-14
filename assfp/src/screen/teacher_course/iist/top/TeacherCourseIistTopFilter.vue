<template>
    <div class="fx-l nav-fiiter">
        <input type="text" class="input ip-4" placeholder="课程名称"/>
        <input type="text" class="input ip-4" placeholder="教练名称或电话号码"/>
        <fn-select :items="form.way" class="input ip-3"/>
        <input type="text" class="input fx-1" placeholder="班别"/>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
    way: [
        { txt: '授课方式', v: 0 },
        { txt: 'Off line', v: 1 },
        { txt: 'On line', v: 2 }
    ],
    teach: [
        { txt: '授课方式', v: 0 },
        { txt: '一对一辅导', v: 1 }
    ]
})
</script>