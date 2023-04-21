<template>
    <div>
        <fn-input-fat :tit="'標題'" :is_err="form_err.tit">
            <input class="input" v-model="one.tit" placeholder="請輸入廣告的標題"/>
        </fn-input-fat>
        <div class="w-100 py_row"></div>
        
        <div class="fx-l fx-wp">
            <fn-input-fat class="w-50 w-666-p" :tit="'下次發布時間'">
                <input class="input" v-model="one.next_publish" placeholder="年-月-日 時:分"/>
            </fn-input-fat>
            <div class="w-100 py_row"></div>

            <fn-input-fat class="w-50 w-666-p" :tit="'作者'" :is_err="form_err.author">
                <input class="input" v-model="one.author" placeholder="請輸入作者名稱"/>
            </fn-input-fat>
            <div class="w-100 py_row"></div>
        </div>

        <div class="fx-l fx-wp" v-if="need_type">
            <fn-input-fat class="w-50 w-666-p" :tit="'類別'">
                <eos-post-typed class="input" :def="one.type" @resuit="(n: string) => one.type = n"/>
            </fn-input-fat>
            <div class="w-100 py_row"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { edit } from '../../../himm/hook';
const prp = defineProps<{
    need_type?: boolean,
    one: ONE
}>()
const form_err = reactive(edit.gen_form_err( prp.one ))

const can = function() { let res = true
    if (!prp.one.tit) { form_err.tit = true; return false } else { form_err.tit = false }
    if (!prp.one.next_publish) { form_err.next_publish = true; return false } else { form_err.next_publish = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? prp.one : null), 
    reset: (v: ONE) => { 
        for (let k in prp.one) { prp.one[ k ] = v[ k ] } 
    } 
})
</script>