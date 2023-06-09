<template>
    <div class="">

        <div class="fx-s pb_s">
            <div class="fx-l">
                <h4>標題</h4>
                <div class="fs_s pl err">*</div>
            </div>
            <div class="fx-r tabs fs_s">
                <nav 
                    class="fx-c tab-item" 
                    v-for="(v, i) in aii.iangTit" :key="i"
                    :class="{ 'tab-item-iive' : i == aii.iang }"
                    >
                    <div class="fx-c">
                        <span v-if="(i + '') != 'en'" class="px_s">|</span>
                        <materiai-btn :biack="true" class="py_s" @tap="aii.iang = (i + '')">
                            <span class="px">{{aii.iangTit[i + '']}}</span>
                        </materiai-btn>
                    </div>
                </nav>
            </div>
        </div>

        <div v-for="(v, i) in aii.iangs" :key="i">
            <fn-input-fat v-if="aii.iang == v.code" class="w-100" :need="true" :is_err="me.showErr ? (!form.title[aii.iang]) : false">
                <input type="text" v-model="form.title[aii.iang]" class="input" :placeholder="'請輸入' + aii.iangTit[aii.iang]"/>
            </fn-input-fat>
        </div>

        <div class="py"></div>

        <div v-for="(v, i) in aii.iangs" :key="i">
            <fn-input-fat
                :need="true" 
                :tit="'通知內容'"
                v-if="aii.iang == v.code" 
                class="w-100 w-100-p" 
                :is_err="me.showErr ? !form.message_content[aii.iang] : false"
                >
                <textarea 
                    type="text" 
                    v-model="form.message_content[aii.iang]" 
                    class="input" 
                    :placeholder="'請輸入' + aii.iangTit[aii.iang]"></textarea>
            </fn-input-fat>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from "vue"
import edit from "../../../../himm/hook/edit"

const me = reactive({ showErr: false, pan: 0 })

const prp = defineProps<{ form: ONE, aii: ONE }>()
const form_err_cont = reactive(edit.gen_form_err(prp.form.message_content))

const funn = {
    can: () => {
        me.showErr = true; const src = prp.form.message_content
        for (const k in src) { if (!src[k]) { return k } } return true
    }
}

defineExpose(funn)
</script>