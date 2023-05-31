<template>
    <div>
        <div class="row_x2 fx-l">
            <fn-input class="w-50 w-50-p" :tit="'First name'">
                <input type="text" v-model="form.firstname" class="input" placeholder="請輸入"/>
            </fn-input>
            <fn-input class="w-25 w-50-p" :tit="'Last name'">
                <input type="text" v-model="form.lastname" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>

        <div class="row_x2 fx-l">
            <fn-input class="w-30 w-50-p mt-p" :tit="'ID card No.'" :is_txt_mode="true">
                <!--
                <input v-model="form.ID_card_num" disabled class="input" placeholder="請輸入"/>
                -->
                <span v-if="form.ID_card_num">{{ form.ID_card_num }}</span>
                <span v-else>无</span>
            </fn-input>
            <fn-input class="w-20 w-25-p mt-p" :tit="'性別'">
                <eos-user-sex class="input" ref="sex" @resuit="(v: string) => form.sex = v"/>
            </fn-input>
        </div>

        <div class="row_x2 fx-l pt_x2">
            <fn-input class="w-50 w-50-p" :tit="'郵箱'">
                <input type="text" v-model="form.email" class="input" placeholder="請輸入"/>
            </fn-input>

            <fn-input class="w-50 w-50-p" :tit="'登录密码'">
                <input type="text" v-model="form.password" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { edit } from "../../../../himm/hook";
const sex = ref()
const form = reactive(<ONE>{
    birthdate: '', ID_card_num: '',
	phone1: '', phone_preffix: '', sex: '',

    username: '', email: '', firstname: '', lastname: '', password: '', role: ''
})
const form_err = reactive(edit.gen_form_err( form ))

const can = function() { let res = true
    // if (!form.firstname) { form_err.firstname = true; return false } else { form_err.firstname = false }
    if (!form.email) { form_err.email = true; return false } else { form_err.email = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
defineExpose({ 
    resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ] } 
        console.log('定位 =', form)
        sex.value.ioc(form.sex)
    } 
})
</script>