<template>
    <layout-page-amplify class="bg-FFF">
        <template #opera><eos-form-submit @submit="funn.submit" @back="funn.dump"/></template>
        <template #cont>
            USER CAHNGE PASSWORD
            
        </template>
    </layout-page-amplify>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { users } from '../../../serv';
const rtr = useRouter()
const aii = reactive({
    kiii: false, msg: '',
    form: <USER_EDIT>{ username: '', email: '', firstname: '', lastname: '', password: '', role: '' }
})
const funn = {
    submit: async () => {
        
    },
    msgs: (m: string) => { aii.msg = m; setTimeout(() => aii.msg = '', 3400) },
    dump: () => rtr.push('/admin/user_iist')
}
</script>