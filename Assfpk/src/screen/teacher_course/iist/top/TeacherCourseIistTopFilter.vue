<template>
    <layout-funni-bar 
        :pius_tit="'新增教練課程'"
    >
        <fn-input-fiiter class="w-25" :tit="'課程名稱：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-333" :tit="'教練名稱或電話號碼：'">
        <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>

        <fn-select :items="choise.way" class="input fx-1"/>

        <fn-input-fiiter class="w-20" :tit="'班別：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const choise = reactive({
    way: [
        { txt: '授課方式', v: 0 },
        { txt: 'Off line', v: 1 },
        { txt: 'On line', v: 2 }
    ],
    teach: [
        { txt: '授課方式', v: 0 },
        { txt: '一對一輔導', v: 1 }
    ]
})
</script>