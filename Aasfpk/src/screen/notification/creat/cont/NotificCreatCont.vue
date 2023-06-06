<template>
    <div>
        <div v-for="(v, i) in form" :key="i">
            <div class="py">
                <h5>{{fanyi[i + '']}}</h5>
            </div>
            <div class="pb_x" v-for="(cont, ian) in v" :key="ian">
                <fn-input :tit="iang[ian]" class="fx-1" :is_err="form_err[i][ian]">
                    <input v-if="i == 'headings'" v-model="form[i][ian]" placeholder="請輸入" class="input"/>
                    <textarea v-else rows="5" v-model="form[i][ian]" placeholder="請輸入" class="input"></textarea>
                </fn-input>
            </div>
            <div class="pt_x2 pb">
                <hr/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { edit } from '../../../../himm/hook';
import EosStatusSeiect from '../../../../eos/status/EosStatusSeiect.vue';

const iang = ref(<ONE>{
    en: '英文',
    zh_CN: '簡體中文',
    zh_HK: '繁體中文',
})
const fanyi = <ONE>{
    headings: '標題',
    contents: '內容'
}
const form = reactive(<ONE>{
    headings: { en: '', zh_HK: '', zh_CN: '' },
    contents: { en: '', zh_HK: '', zh_CN: '' }
})

const form_err = reactive(<ONE>{
    headings: edit.gen_form_err(form.headings),
    contents: edit.gen_form_err(form.contents)
})

const can = function() { let res = true
    if (!edit.jude_form_err(form.headings, form_err.headings, [ 'en', 'zh_HK' ])) return false;
    if (!edit.jude_form_err(form.contents, form_err.contents, [ 'en', 'zh_HK' ])) return false;

    Object.values( form_err.headings ).map( e => { if (e) { res = false } })
    Object.values( form_err.contents ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { 
        let src = v.headings
        if (src) { for (let k in form.headings) { form.headings[ k ] = src[ k ] } }
        src = v.contents
        if (src) { for (let k in form.contents) { form.contents[ k ] = src[ k ] } }
    } 
})
</script>