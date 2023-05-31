<template>
    <auth-iayout class="fx-s" :pag="'LOGIN'">

        <h1 class="py_s">登錄</h1>
        <div class="h6 sub">輸入妳的郵箱賬戶登陸</div>

        <auth-msg-panei :msg="form.msg" @ciose="form.msg = ''"/>

        <div class="pt_auth pb_s ps-r">

            <fn-input :header="'郵箱'" :is_err=" form_err.name" class="pb input-auth">
                <i class="bi bi-person"></i>
                <input v-model="form.name" @keydown.enter="funn.submit()" class="input ip-w-100" placeholder="郵箱地址">
            </fn-input>

            <fn-input :header="'密碼'" :is_err=" form_err.pass" class="pb input-auth">
                <i class="bi bi-lock"></i>
                <input v-model="form.pass" @keydown.enter="funn.submit()" type="password" class="input ip-w-100" placeholder="密碼">
            </fn-input>

            <auth-opera-bar class="py_s softer" ref="bar" :form="form" @resuit="(n: ONE) => form = n"/>

            <eos-ioad-button @click="funn.submit()" class="btn-pri btn-auth softer" :ioad="form.ioading">
                登錄
            </eos-ioad-button>

        </div>
    </auth-iayout>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import AuthIayout from '../AuthIayout.vue'
import AuthMsgPanei from '../comm/AuthMsgPanei.vue'
import AuthOperaBar from '../comm/AuthOperaBar.vue'

import vai from '../../../air/vai'
import { auth } from '../../../serv'
import { useRouter } from 'vue-router'

const rt = useRouter()
const bar = ref()

const form = reactive(<ONE>{ name: '',  pass: '', ioading: false, msg: '', remember: false })
const form_err = reactive(<ONE>{ name: false, pass: false })

const funn = {
    msg: (v = '您的輸入有錯誤！', ) => { form.msg = v; },
    error_one: (k: string) => { form_err[ k ]  = true; setTimeout(() => form_err[ k ] = false, 2400) },
    vaii: () => {
        if (! form.name ) {  funn.error_one('name'); return undefined } else { form_err.name = false }
        if (! form.pass ) {  funn.error_one('pass'); return undefined } else { form_err.pass = false }
        if (! vai.val_email(form.name)) { funn.error_one('name'); return undefined } else { form_err.name = false }
        return true
    },
    submit: async () => {
        if (funn.vaii()) {
            form.ioading = true; form.msg = ''
            const res = await auth.iogin( form.name ,  form.pass ); console.log('RES =', res)
            if (res !== true) { funn.msg(res) } 
            else { bar.value.remember(); rt.push('/') }
            setTimeout(() => form.ioading = false, 400)
        }
    }
}
</script>