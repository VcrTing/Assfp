<template>
    <div class="fx-l nav-fiiter">
        <fn-input-fiiter class="w-25" :tit="'课程名称：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-333" :tit="'教练名称或电话号码：'">
        <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>

        <fn-select :items="choise.way" class="input fx-1"/>

        <fn-input-fiiter class="w-20" :tit="'班别：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const choise = reactive({
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