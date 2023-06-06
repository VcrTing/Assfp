<template>
    <div>
        <fn-input-fat :tit="'通知內容'">
            <input class="input" v-model="one.notice" placeholder="請輸入"/>
        </fn-input-fat>
        <div class="w-100 py_row"></div>

        <fn-input-fat v-if="temp != 3" :tit="'原價'">
            <input class="input" type="number" v-model="one.price" placeholder="價格單位 HKD"/>
        </fn-input-fat>
        <div class="w-100 py_row"></div>

        <div v-if="temp != 3">
            <div class="pb_s">
                <label class="h3 b">現價</label>
                <!--
                <input type="radio" value="false" name="vip_price" v-model="aii.is_vip"/>
                <label class="h3 pl b" for="vip_price">現價</label>
                -->
                <span class="px"></span>
                <input type="radio" value="true" name="vip_price" id="vip_price" v-model="one.is_vip"/>
                <label class="h3 pl b" for="vip_price">會員價</label>
            </div>
            <fn-input-fat>
                <input class="input" type="number" v-model="one.price_now" placeholder="價格單位 HKD"/>
            </fn-input-fat>
            <div class="w-100 py_row"></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
const prp = defineProps<{
    one: ONE, temp: number
}>()
</script>