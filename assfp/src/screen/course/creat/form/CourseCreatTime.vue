<template>
    <div class="f-row">
        <div class="w-48">
            <fn-input :tit="'開學時間'" class="mb_x">
                <eos-time-choise class="input" :pchd="'請選擇'"/>
            </fn-input>
            <fn-input :tit="'結課時間'" class="mb_x">
                <eos-time-choise class="input" :pchd="'請選擇'"/>
            </fn-input>
            <fn-input :tit="'每禮拜上堂日子'" class="mb_x">
                <fn-select class="input" :items="form.teach_day"/>
            </fn-input>
            <fn-input :tit="'每禮拜上堂時數'" class="mb_x">
                <input type="number" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>
        <div class="w-4"></div>
        <div class="w-48">
            <fn-input :tit="'教練展示名稱'" class="mb_x">
                <input class="input" placeholder="請輸入名稱" />
            </fn-input>
            <fn-input :tit="'授課方式'" class="mb_x">
                <fn-select class="input" :items="form.teach"/>
            </fn-input>
            <fn-input :tit="'每禮拜上堂時間'" class="mb_x">
                <eos-time-choise class="input" :pchd="'請選擇'"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'

const form = reactive({
    teach: [
        { txt: '授課方式', v: 0 },
        { txt: '壹對壹輔導', v: 1 }
    ],
    teach_day: [
        { txt: '請選擇', v: 0 },
        { txt: '星期一', v: 1 },
        { txt: '星期二', v: 2 }
    ]
})
</script>