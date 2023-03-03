<template>
    <layout-page-amplify class="bg-FFF">
        <template v-slot:opera><eos-form-submit @submit="funn.submit" @back="funn.dump"/></template>
        <template v-slot:cont>
            <div class="pt"></div>
            <user-creat-base ref="base" :form="aii.form"/>
            <div class="py_x3"></div>
            <button v-if="aii.kiii" class="btn-err btn-def-ig">
                刪除使用者
            </button>
            <button v-else class="btn-pri btn-def-ig" @click="funn.submit">
                <span v-if="!aii.msg">&nbsp;&nbsp;&nbsp;儲存&nbsp;&nbsp;&nbsp;</span>
                <span v-else>&nbsp;{{ aii.msg }}&nbsp;</span>
            </button>
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
    kiii: false, msg: '',
    form: <USER_EDIT>{ username: '', email: '', firstname: '', lastname: '', password: '', role: '' }
})
const base = ref()
const funn = {
    submit: async () => {
        const src = base.value.resuit()
        if (src) {
            src.username = src.email
            const res = await users.admin_creat(src)
            if (res) { funn.dump() } else { funn.msgs('您的輸入有誤。') }
        }
    },
    msgs: (m: string) => {
        aii.msg = m; setTimeout(() => aii.msg = '', 3400)
    },
    dump: () => rtr.push('/admin/user_iist')
}
</script>
