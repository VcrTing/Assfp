<template>
    <div>
        <div class="row_x2 fx-l">
            <fn-input class="w-50 w-50-p" :tit="'First name'" :is_err="form_err.firstname">
                <input type="text" v-model="form.firstname" class="input" placeholder="請輸入"/>
            </fn-input>
            <fn-input class="w-25 w-50-p" :tit="'Last name'" :is_err="form_err.lastname">
                <input type="text" v-model="form.lastname" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>

        <div class="row_x2 fx-l pt_x2">
            <fn-input class="w-50 w-50-p" :tit="'用戶名'" :is_err="form_err.username">
                <input type="text" v-model="form.username" class="input" placeholder="請輸入"/>
            </fn-input>
            <fn-input class="w-50 w-50-p" :tit="'郵箱'" :is_err="form_err.email">
                <input type="text" v-model="form.email" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>

        <div class="row_x2 fx-l pt_x2">

            <fn-input class="w-50 w-50-p" :tit="'登錄密碼'" :is_err="form_err.password">
                <input type="text" v-model="form.password" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>

        <div class="fs_s pt">
            <div>密碼要求:</div>
            <div class="pt_s pl_x2">
                <p>1. Passwords must be at least 8 characters long.</p>
                <p>2. Passwords must have at least 1 lower case letter(s).</p>
                <p>3. Passwords must have at least 1 upper case letter(s).</p>
                <p>4. The password must have at least 1 special character(s).</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { edit } from "../../../../himm/hook";
import vai from "../../../../air/vai";

const form = reactive(<ONE>{ firstname: '', lastname: '', username: '', email: '', password: '', role: 'student' })
const form_err = reactive(edit.gen_form_err( form ))

const can = function() { let res = true
    edit.jude_form_err(form, form_err, Object.keys(form_err))
    if (!vai.val_password(form.password)) { form_err.password = true; return false } else { form_err.password = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] }  } 
})
</script>