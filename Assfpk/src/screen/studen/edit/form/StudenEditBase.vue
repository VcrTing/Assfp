<template>
    <div>
        <div class="row_x2 fx-l">
            <fn-input class="w-60 w-60-p" :tit="'昵稱（Nick name）'">
                <input type="text" v-model="form.nickname" class="input" placeholder="請輸入"/>
            </fn-input>

            <fn-input class="w-40" :tit="'性別'">
                <eos-user-sex class="input" ref="sex" @resuit="(v: string) => form.sex = v"/>
            </fn-input>
        </div>
        <div class="row_x2 fx-l pt_x2">
            <fn-input class="w-60" :tit="'Location'">
                <input type="text" v-model="form.location" class="input" placeholder="請輸入"/>
            </fn-input>

            <fn-input class="w-40" :tit="'出生年月'">
                <eos-time-choise class="input" ref="birth" :def="form.birthdate" @resuit="(n: string) => form.birthdate = n"/>
            </fn-input>
        </div>
        <div class="row_x2 fx-l pt_x2">
            <fn-input class="w-333 w-333-p" :tit="'狀態'">
                <eos-marry-status class="input" :def="form.status" @change="(n: string) => form.status = n"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { edit } from "../../../../himm/hook";
import EosMarryStatus from "../../../../eos/status/studen/EosMarryStatus.vue";

const sex = ref(); 
const form = reactive(<ONE>{ birthdate: '', sex: '', nickname: '', location: '', status: '' })

const form_err = reactive(edit.gen_form_err( form ))

const can = function() { let res = true
    if (!form.nickname) { form_err.nickname = true; return false } else { form_err.nickname = false }
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