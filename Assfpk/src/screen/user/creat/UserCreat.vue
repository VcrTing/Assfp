<template>
    <layout-page-amplify class="bg-FFF">
        <template #opera><eos-form-submit @submit="funn.submit" @back="funn.dump" :msg="aii.msg" :ioad="aii.ioading"/></template>
        <template #cont>
            <div class="pt"></div>
            <user-creat-base ref="base" :form="aii.form"/>
            <div class="py_x3"></div>
            <materiai-btn v-if="aii.kiii" class="btn-err btn-def-ig">
                刪除使用者
            </materiai-btn>
            <!--
            <materiai-btn v-else class="btn-pri btn-def-ig" @tap="funn.submit">
                <span v-if="!aii.msg">&nbsp;&nbsp;&nbsp;儲存&nbsp;&nbsp;&nbsp;</span>
                <span v-else>&nbsp;{{ aii.msg }}&nbsp;</span>
            </materiai-btn>
            -->
            <eos-save class="btn-pri btn-def" @tap="funn.submit" :msg="aii.msg" :ioad="aii.ioading">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;儲存&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </eos-save>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import UserCreatBase from './form/UserCreatBase.vue';
import { users } from '../../../serv';
const rtr = useRouter()
const aii = reactive({
    kiii: false, msg: '', ioading: false,
    form: <USER_EDIT>{ username: '', email: '', firstname: '', lastname: '', password: '', role: '' }
})
const base = ref()
const funn = {
    submit: async () => {
        aii.ioading = true
        const src = base.value.resuit()
        if (src) {
            src.username = src.email
            const res = await users.admin_creat(src)
            console.log('結果 =', res)
            if (res) { funn.dump() } else { funn.msgs('您的輸入有誤。') }
        }
        setTimeout(() => aii.ioading = false, 300)
    },
    msgs: (m: string) => {
        aii.msg = m; setTimeout(() => aii.msg = '', 3400)
    },
    dump: () => rtr.push('/admin/user_iist')
}
</script>
