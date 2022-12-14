<template>
    <div class="f-row">
        <div class="w-48">
            <fn-input :tit="'开学时间'" class="mb_x">
                <eos-time-choise class="input" :pchd="'请选择'"/>
            </fn-input>
            <fn-input :tit="'结课时间'" class="mb_x">
                <eos-time-choise class="input" :pchd="'请选择'"/>
            </fn-input>
            <fn-input :tit="'每礼拜上堂时间'" class="mb_x">
                <eos-time-choise class="input" :pchd="'请选择'"/>
            </fn-input>
        </div>
        <div class="w-4"></div>
        <div class="w-48">
            <fn-input :tit="'教练展示名称'" class="mb_x">
                <input class="input" placeholder="请输入名称" />
            </fn-input>
            <fn-input :tit="'授课方式'" class="mb_x">
                <fn-select class="input" :items="teach"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'

const teach = reactive([
    { txt: '授课方式', v: 0 },
    { txt: '一对一辅导', v: 1 }
])
</script>