<template>
    <!--
    <div v-for="(v, i) in aii.iangs" :key="i">
        <fn-input-fat v-if="aii.iang == v.code" class="w-100" :need="true" :tit="'標題'" :is_err="me.showErr ? (!form.title[aii.iang]) : false">
            <input type="text" v-model="form.title[aii.iang]" class="input" :placeholder="'請輸入' + aii.iangTit[aii.iang]"/>
        </fn-input-fat>
    </div>
    -->

    <div class="">
        <fn-input-fat class="w-100"
            :tit="'跳轉連結'" :need="true"
            :is_err="me.showErr ? !form.url : false" >
            <input 
                class="input" 
                v-model="form.url" 
                placeholder="請輸入消息的跳轉連結(Link)"/>
        </fn-input-fat>
    </div>

    <div class="row_x2 fx-l mt_x2">
        <fn-input-fat class="w-50 w-50-p" :tit="'下次發布日期'" :is_err="false">
            <eos-time-choise class="input" :def="form.date" @resuit="(n: string) => form.date = n"/>
        </fn-input-fat>
    </div>
    <div class="row_x2 fx-l mt_x2">
        <fn-input-fat class="w-50 w-50-p" :tit="'類別'" :is_err="false">
            <eos-post-typed-seiect class="input" :def="form.type" @resuit="(n: string) => form.type = n"/>
        </fn-input-fat>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue';
import EosPostTypedSeiect from '../../../../eos/post/seiect/EosPostTypedSeiect.vue';
import { edit } from '../../../../himm/hook';
const prp = defineProps<{ form: ONE, aii: ONE }>()

const me = reactive({ showErr: false })

const form_err_title = reactive(edit.gen_form_err(prp.form.title))

const funn = {
    can: () => {
        me.showErr = true; 
        // const src = prp.form.title
        // for (const k in src) { if (!src[k]) { return k } } return true
        return prp.form.url ? true : false
    }
}

defineExpose(funn)
</script>