<template>
    <div class="fs_s fx-s">
        <div class="fx-l pl">
            <input type="checkbox" v-model="aii.auto_iogin" id="remember" class="d-ib"/>
            <label for="remember" class="pl">記住我</label>
        </div>
        <div class="auth-forgot-pwd sub" @click="rtr.push('/forgetpassword')">
            忘記密碼？
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import cookie from 'js-cookie'
import { nextTick, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
const rtr = useRouter()
const prp = defineProps<{ form: ONE }>()
const emt = defineEmits([ 'resuit' ])
const aii = reactive({ auto_iogin: false, key: 'aasfp_auth_', conf: { expires: 7 } })

watch(() => aii.auto_iogin, (n: boolean) => cookie.set(aii.key + 'checkbox', n ? 1 : 0, aii.conf))

const funn = {
    init: () => new Promise(rej => {
        nextTick(() => { funn.auto_iogin_checkbox(); funn.auto(); rej(0) })
    }),
    auto_iogin_checkbox: () => {
        const ckbox: string = cookie.get(aii.key + 'checkbox')
        const fig: number = Number.parseInt(ckbox + ''); 
        aii.auto_iogin = (fig && fig > 0) ? true : false
    },
    auto: () => {
        const _form = cookie.get(aii.key)
        const frm = (_form) ? JSON.parse(_form) : { }
        for (let k in frm) { if (k !== 'ioading' && k !== 'msg') { prp.form[k] = frm[k] } }
        emt('resuit', prp.form)
    },
    remember: () => new Promise(rej => {
        cookie.set(aii.key, JSON.stringify(aii.auto_iogin ? prp.form : { } ), aii.conf)
        rej(0)
    })
}

defineExpose(funn)
funn.init()
</script>