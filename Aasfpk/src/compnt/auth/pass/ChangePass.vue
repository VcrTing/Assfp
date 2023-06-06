<template>
    <div>
        <h1 class="py_s">修改密碼</h1>
        <div class="h6 sub">
            <i class="bi bi-arrow-left hand" @click="$emit('back')"></i>
            <span class="hand" @click="$emit('back')">修改驗證郵箱</span>
        </div>
        <auth-msg-panei :msg="form.msg" @ciose="form.msg = ''"/>
        
        <div class="pt_auth pb_s ps-r">

            <fn-input :header="'驗證碼'" :is_err="form_err.code" class="pb input-auth">
                <i class="bi bi-shield-lock"></i>
                <input v-model="form.code" @keydown.enter="funn.submit()" class="input ip-w-100" placeholder="郵箱驗證碼">
            </fn-input>
            <fn-input :header="'密碼'" :is_err="form_err.pass" class="pb input-auth">
                <i class="bi bi-lock"></i>
                <input v-model="form.pass" @keydown.enter="funn.submit()" class="input ip-w-100" placeholder="新密碼">
            </fn-input>
            <fn-input v-if="form.pass && form.pass.length > 3" :header="'驗證密碼'" :is_err="form_err.pass" class="pb input-auth">
                <i class="bi bi-lock"></i>
                <input v-model="form.pass" @keydown.enter="funn.submit()" class="input ip-w-100" placeholder="再次輸入密碼">
            </fn-input>

            <eos-ioad-button @click="funn.submit()" class="btn-pri btn-auth softer" :ioad="form.ioading">
                提交
            </eos-ioad-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { edit } from '../../../himm/hook'
import AuthMsgPanei from '../comm/AuthMsgPanei.vue'

import vai from '../../../air/vai'
import { auth } from '../../../serv'
const emt = defineEmits([ 'back' ])
const form = reactive({ code: '', pass: '', pass_again: '', msg: '', ioading: false })
const form_err = reactive(edit.gen_form_err( form ))

const funn = {
    msg: (v = '您的輸入有錯誤！', ) => { form.msg = v; },
    error_one: (k: string) => { form_err[ k ]  = true; setTimeout(() => form_err[ k ] = false, 2400) },
    vaii: () => {
        if (! form.code ) {  funn.error_one('code'); return undefined } else { form_err.code = false }
        if (! form.pass ) {  funn.error_one('pass'); return undefined } else { form_err.pass = false }
        if (! form.pass_again ) {  funn.error_one('pass_again'); return undefined } else { form_err.pass_again = false }
        if (form.pass && form.pass_again) { if (form.pass !== form.pass_again) { funn.error_one('pass_again'); return undefined } } else { form_err.pass_again = false }
        return true
    },
    submit: async () => {
        if (funn.vaii()) {
            const res = await auth.changePass(form.code, form.pass, form.pass_again)
            if (res) {

            }
        }
    }
}
</script>