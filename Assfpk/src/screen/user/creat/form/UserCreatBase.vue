<template>
    <div class="f-row">
        <div class="w-55">
            <!--
            <h4 class="pb_s">用戶名稱</h4>
            <fn-input :is_err="form_err.username">
                <input class="input" v-model="form.username" placeholder="請輸入登錄名"/>
            </fn-input>
            <div class="py_n"></div>
            -->
            <h4 class="pb_s">郵箱</h4>
            <fn-input :is_err="form_err.email">
                <input class="input" v-model="form.email" placeholder="請輸入登錄郵箱"/>
            </fn-input>
            <div class="py_n"></div>

            <h4 class="pb_s">First name</h4>
            <fn-input :is_err="form_err.firstname">
                <input class="input" v-model="form.firstname" placeholder="請輸入"/>
            </fn-input>
            <div class="py_n"></div>
            <h4 class="pb_s">Last name</h4>
            <fn-input :is_err="form_err.lastname">
                <input class="input" v-model="form.lastname" placeholder="請輸入"/>
            </fn-input>

            <div class="py_n"></div>
            <h4 class="pb_s">密碼</h4>
            <fn-input :is_err="form_err.password">
                <input class="input" v-model="form.password" placeholder="請輸入登錄密碼，且注意密碼要求"/>
            </fn-input>
            <div class="fs_s pt">
                <div>密碼要求:</div>
                <div class="pt_s pl_x2">
                    <p>1. Passwords must be at least 8 characters long.</p>
                    <p>2. Passwords must have at least 1 lower case letter(s).</p>
                    <p>3. Passwords must have at least 1 upper case letter(s).</p>
                    <p>4. The password must have at least 1 special character(s) such as as *, -, or #.</p>
                </div>
            </div>
            <div class="py_n"></div>
            <h4 class="pb_s">網站角色</h4>
            <fn-input>
                <eos-user-roie-strapi class="input" @resuit="(v: string) => form.role = v"/>
            </fn-input>
        </div>
        <div class="w-45"></div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { edit } from '../../../../himm/hook';
const prp = defineProps<{ form: USER_EDIT }>()
const form_err = reactive(edit.gen_form_err( prp.form ))

const can = () => { let res = true
    // if (!prp.form.username) { form_err.username = true; return false } else { form_err.username = false }
    if (!prp.form.email) { form_err.email = true; return false } else { form_err.email = false }
    if (!prp.form.firstname) { form_err.firstname = true; return false } else { form_err.firstname = false }
    if (!prp.form.password) { form_err.password = true; return false } else { form_err.password = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
} 

defineExpose({ resuit: () => (can() ? prp.form : null), })
</script>