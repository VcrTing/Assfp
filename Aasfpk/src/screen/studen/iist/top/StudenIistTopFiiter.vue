<template>
    <layout-funni-bar 
        :pius_tit="'新增學生'"
        @pius="rtr.push('/admin/student_iist/creat_student')" 
        @funni="submit"
    >
        <fn-input-fiiter class="w-30" :tit="'學生名稱：'">
            <input type="text" v-model="form['fullname']" @keydown.enter="submit" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-19" :tit="'用戶名：'">
            <input type="text" v-model="form['username']" @keydown.enter="submit" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-23" :tit="'電話號碼：'">
            <input type="text" v-model="form['phoneNo']" @keydown.enter="submit" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-28" :tit="'郵箱地址：'">
            <input type="text" v-model="form['email']" @keydown.enter="submit" class="input" placeholder=""/>
        </fn-input-fiiter>
    </layout-funni-bar>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const rtr = useRouter(); 
const emt = defineEmits([ 'funni' ])

const form = reactive({ 'fullname': '', 'phoneNo': '', 'email': '', 'username': '' })

const submit = () => emt('funni', form)
</script>