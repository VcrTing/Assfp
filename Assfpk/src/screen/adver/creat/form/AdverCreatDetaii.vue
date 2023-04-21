<template>
    <div>
        <div v-for="(v, i) in form" :key="i">
            <div class="py">
                <h4>{{iang[i + '']}}</h4>
            </div>
            <div class="row_x2 fx-l">
                <fn-input :tit="'標題'" class="fx-1" :is_err="form_err[i].title">
                    <input v-model="v.title" placeholder="請輸入" class="input"/>
                </fn-input>

                <fn-input :tit="'介紹'" class="w-40" :is_err="form_err[i].introduction">
                    <input v-model="v.introduction" placeholder="請輸入" class="input"/>
                </fn-input>
            </div>
            <div class="pt_x">
                <fn-input :tit="'內容'" :is_err="form_err[i].description">
                    <textarea v-model="v.description" class="input" rows="7" placeholder="請輸入"></textarea>
                </fn-input>
            </div>
            <div class="pt_x3 pb">
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
    en: '英語',
    zh_CN: '簡體中文',
    zh_HK: '繁體中文',
})
const form = reactive(<ONE>{
    en: { title: '', description: '', introduction: '' },
    zh_CN: { title: '', description: '', introduction: '' },
    zh_HK: { title: '', description: '', introduction: '' },
})

const form_err = reactive(<ONE>{
    en: edit.gen_form_err(form.en),
    zh_CN: edit.gen_form_err(form.en),
    zh_HK: edit.gen_form_err(form.en)
})

const can = function() { let res = true
    if (!edit.jude_form_err(form.en, form_err.en, [ 'title', 'description' ])) return false;
    if (!edit.jude_form_err(form.zh_CN, form_err.zh_CN, [ 'title', 'description' ])) return false;
    if (!edit.jude_form_err(form.zh_HK, form_err.zh_HK, [ 'title', 'description' ])) return false;

    Object.values( form_err.en ).map( e => { if (e) { res = false } })
    Object.values( form_err.zh_CN ).map( e => { if (e) { res = false } })
    Object.values( form_err.zh_HK ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { 
        let src = v.en
        if (src) { for (let k in form.en) { form.en[ k ] = src[ k ] } }
        src = v.zh_CN
        if (src) { for (let k in form.zh_CN) { form.zh_CN[ k ] = src[ k ] } }
        src = v.zh_HK
        if (src) { for (let k in form.zh_HK) { form.zh_HK[ k ] = src[ k ] } }
    } 
})
</script>