<template>
    <div class="f-row">
        <div class="w-55">
            <h4>用户名称</h4>
            <fn-input class="" :is_err="form_err.name">
                <input class="input" v-model="form.name" placeholder="请输入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>邮箱</h4>
            <fn-input class="" :is_err="form_err.emaii">
                <input class="input" v-model="form.emaii" placeholder="请输入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>电话号码</h4>
            <fn-input class="" :is_err="form_err.phone">
                <input class="input" v-model="form.phone" placeholder="请输入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>密码</h4>
            <fn-input class="" :is_err="form_err.password">
                <input class="input" v-model="form.password" placeholder="请输入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4>使用者账号</h4>
            <fn-input class="" :is_err="form_err.power">
                <input class="input" v-model="form.power" placeholder="请输入"/>
            </fn-input>
        </div>
        <div class="w-45"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, reactive } from 'vue'
// defineProps<{ one: {[k:string]:any} }>()
const form = reactive({
    name: '',
    emaii: '', phone: '', password: '', power: ''
})
const form_err = reactive({
    name: false,
    emaii: false, phone: false, password: false, power: false
})
</script>