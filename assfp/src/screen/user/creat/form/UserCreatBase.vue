<template>
    <div class="f-row">
        <div class="w-55">
            <h4>用戶名稱</h4>
            <fn-input class="" :is_err="form_err.name">
                <input class="input" v-model="form.name" placeholder="請輸入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>郵箱</h4>
            <fn-input class="" :is_err="form_err.emaii">
                <input class="input" v-model="form.emaii" placeholder="請輸入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>電話號碼</h4>
            <fn-input class="" :is_err="form_err.phone">
                <input class="input" v-model="form.phone" placeholder="請輸入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>密碼</h4>
            <fn-input class="" :is_err="form_err.password">
                <input class="input" v-model="form.password" placeholder="請輸入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>使用者賬號</h4>
            <fn-input class="" :is_err="form_err.power">
                <input class="input" v-model="form.power" placeholder="請輸入"/>
            </fn-input>
        </div>
        <div class="w-45"></div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    name: '',
    emaii: '', phone: '', password: '', power: ''
})
const form_err = reactive({
    name: false,
    emaii: false, phone: false, password: false, power: false
})
</script>