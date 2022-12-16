<template>
    <div class="row_x2 fx-l">
        <fn-input class="w-22 w-25-p" :tit="'班別'">
            <input type="text" class="input" placeholder="請輸入"/>
        </fn-input>
        <fn-input class="w-22 w-25-p" :tit="'開學時間'">
            <eos-time-choise class="input" :pchd="'請選擇'"/>
        </fn-input>
        <fn-input class="w-22 w-25-p" :tit="'結業時間'">
            <eos-time-choise class="input" :pchd="'請選擇'"/>
        </fn-input>
        <fn-input class="w-22 w-25-p" :tit="'人數'">
            <input type="number" class="input" placeholder="請輸入"/>
        </fn-input>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from 'vue'

</script>