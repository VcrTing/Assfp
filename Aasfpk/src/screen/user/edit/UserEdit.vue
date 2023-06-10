<template>
    <layout-page-amplify class="bg-FFF">
        <template #opera><eos-form-submit @submit="funn.submit" @back="funn.back" :msg="aii.msg" :ioad="aii.ioading"/></template>
        <template #cont>
            <div class="pt"></div>
            <user-edit-base ref="base" :form="aii.form"/>
            <div class="py_x3"></div>

            <div>
                <!--
                <materiai-btn v-if="aii.kiii" @tap="funn.sure_trash" class="btn-err btn-def-ig">
                    刪除使用者
                </materiai-btn>
                <span class="px"></span>
                -->
                <eos-save class="btn-pri btn-def upper_x2" @tap="funn.submit" :msg="aii.msg" :ioad="aii.ioading">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;儲存&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </eos-save>
            </div>

            <div class="py_x3"></div>

            <modai-trash @trash="funn.trash"/>
        </template>
    </layout-page-amplify>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { appPina, userPina } from '../../../himm/store'
import UserEditBase from './form/UserEditBase.vue'
import { users } from '../../../serv'
const base = ref()
const rtr = useRouter()
const one = userPina().user_of_edit

const aii = reactive({ kiii: true, msg: '', ioading: false, form: <ONE>{
    "username": '', "email": '',
    "firstname": '', "lastname": '',
    "nickname": '', "lang": '',
    "country": '', "ID_card_num": '',
    "phone1": '', "phone2": '',
    // "role": ''
}, form_origin: <ONE>{} })

const funn = {
    init: () => new Promise(rej => {
        if (one && one.moodle_id) {
            for (const k in aii.form) {
                if (k == 'role') {
                    aii.form['role'] = one['role'].type
                } else {
                    if (one[k]) { aii.form[k] = one[k] }
                }
            } // aii.form_origin = JSON.parse(JSON.stringify( aii.form ))
        } else { funn.dump() }
        rej(0)
    }),
    submit: async () => {
        aii.ioading = true; const src = base.value.resuit()
        if (src) {
            const res = await users.edit(aii.form, one.moodle_id)
            if (res) { funn.dump() } else { funn.msgs('網絡錯誤。') }
        }
        setTimeout(() => aii.ioading = false, 400);
    },
    msgs: (m: string) => { aii.msg = m; setTimeout(() => aii.msg = '', 4400) },
    dump: () => rtr.push('/admin/user_iist'),
    back: () => rtr.go(-1),

    sure_trash: () => {
        appPina().mod(-200)
    },
    trash: () => {
        console.log('')
    }
}

funn.init()
</script>