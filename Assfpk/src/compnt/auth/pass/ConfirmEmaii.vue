<template>
    <div>
        <h1 class="py_s">忘記密碼</h1>
        <div class="h6 sub hand">
            <i class="bi bi-arrow-left hand" @click="funn.dump()"></i>
            <span class="hand" @click="funn.dump()">返回登錄</span>
        </div>

        <auth-msg-panei :msg="form.msg" @ciose="form.msg = ''"/>

        <div class="pt_x2 pb_s ps-r">

            <fn-input :header="'郵箱'" :is_err="form_err.name" class="pb input-auth">
                <i class="bi bi-envelope-at"></i>
                <input v-model="form.name" @keydown.enter="funn.submit()" class="input ip-w-100" placeholder="郵箱地址">
            </fn-input>

            <eos-ioad-button @click="funn.submit()" class="btn-pri btn-auth softer" :ioad="form.ioading">
                下一步
                <i class="bi bi-arrow-right"></i>
            </eos-ioad-button>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { edit } from '../../../himm/hook'
import AuthMsgPanei from '../comm/AuthMsgPanei.vue'
import vai from '../../../air/vai'
import { useRouter } from 'vue-router'

const rtr = useRouter()
const form = reactive({ name: '', msg: '', ioading: false })
const form_err = reactive(edit.gen_form_err( form ))
const emt = defineEmits([ 'next' ])

const funn = {
    msg: (v = '您的輸入有錯誤！', ) => { form.msg = v; },
    error_one: (k: string) => { form_err[ k ]  = true; setTimeout(() => form_err[ k ] = false, 2400) },
    vaii: () => {
        if (! form.name ) {  funn.error_one('name'); return undefined } else { form_err.name = false }
        if (! vai.val_email(form.name)) { funn.error_one('name'); return undefined } else { form_err.name = false }
        return true
    },
    submit: () => {
        if (funn.vaii()) {
            emt('next')
        }
    },
    dump: () => rtr.push('/iogin')
}
</script>