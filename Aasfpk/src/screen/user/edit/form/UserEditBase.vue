<template>
    <div class="f-row">
        <div class="w-55 w-70-p">
            <fn-input-fat :is_err="form_err.email" :tit="'郵箱'" :need="true">
                <input class="input" v-model="form.email" placeholder="請輸入登錄郵箱"/>
            </fn-input-fat> <div class="py_n"></div>

            <fn-input-fat :is_err="form_err.firstname" :tit="'First name'" :need="true">
                <input class="input" v-model="form.firstname" placeholder="請輸入"/>
            </fn-input-fat> <div class="py_n"></div>

            <fn-input-fat :is_err="form_err.lastname" :tit="'Last name'" :need="true">
                <input class="input" v-model="form.lastname" placeholder="請輸入"/>
            </fn-input-fat> <div class="py_n"></div>

            <div class="upper_x2">
                <div class="row_x2 fx-l">
                    <div class="w-50">
                        <fn-input-fat :is_err="form_err.username" :tit="'用戶名'" :need="true">
                            <input class="input" v-model="form.username" placeholder="請輸入登錄用戶名"/>
                        </fn-input-fat>
                    </div>
                    <div class="w-50">
                        <fn-input-fat :is_err="form_err.nickname" :tit="'暱稱'">
                            <input class="input" v-model="form.nickname" placeholder="請輸入暱稱"/>
                        </fn-input-fat>
                    </div>
                </div> <div class="py_n"></div>

                <div class="row_x2 fx-l">
                    <div class="w-50">
                        <fn-input-fat :is_err="form_err.lang" :tit="'語言'">
                            <eos-user-iang-seiect :def="form.lang" class="input" @resuit="(v: string) => form.lang = v"/>
                        </fn-input-fat>
                    </div>
                    <div class="w-50">
                        <fn-input-fat :is_err="form_err.country" :tit="'國家'">
                            <eos-user-country-seiect :def="form.country" class="input" @resuit="(v: string) => form.country = v"/>
                        </fn-input-fat>
                    </div>
                </div> <div class="py_n"></div>

                <div class="row_x2 fx-l">
                    <div class="w-50">
                        <fn-input-fat :is_err="form_err.phone1" :tit="'電話'">
                            <input class="input" v-model="form.phone1" placeholder="請輸入電話號碼"/>
                        </fn-input-fat>
                    </div>
                    <div class="w-50">
                        <fn-input-fat :is_err="form_err.phone2" :tit="'電話(備用)'">
                            <input class="input" v-model="form.phone2" placeholder="請輸入備用的電話號碼"/>
                        </fn-input-fat>
                    </div>
                </div> <div class="py_n"></div>

                <fn-input-fat :is_err="form_err.ID_card_num" :tit="'ID Card'">
                    <input class="input" v-model="form.ID_card_num" placeholder="請輸入 ID Card"/>
                </fn-input-fat>
            </div>
        </div>
        <div class="fx-1"></div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { edit } from '../../../../himm/hook';
import EosUserIangSeiect from '../../../../eos/form/seiect/EosUserIangSeiect.vue'
import EosUserCountrySeiect from '../../../../eos/form/seiect/EosUserCountrySeiect.vue'
const prp = defineProps<{ form: ONE }>()
const form_err = reactive(edit.gen_form_err( prp.form ))

const funn = {
    can: () => { let res = true
        res = edit.jude_form_err(prp.form, form_err, [ 'email', 'username', 'firstname', 'lastname' ])
        return res
    },
    resuit: () => funn.can() ? prp.form : null
}

defineExpose(funn)
/*
    <!--
    <div class="py_n"></div>
    <fn-input-fat :is_err="form_err.role" :tit="'權限'">
        <eos-user-roie-strapi :def="form.role" class="input" @resuit="(v: string) => form.role = v"/>
    </fn-input-fat> <div class="py_n"></div>
    -->
*/
</script>