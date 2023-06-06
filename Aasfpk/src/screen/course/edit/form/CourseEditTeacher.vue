<template>
    <div class="f-row">
        <div class="w-100">
            <fn-input :tit="'教師展示名稱'" :is_err="form_err.teacher_name" class="mb_x">
                <input class="input" placeholder="請輸入教師的展示名稱" @blur="form_err.teacher_name = false" v-model="form.teacher_name"/>
            </fn-input>
        </div>
        <div class="w-100">
            <fn-input :tit="'課程描述'" class="mb_x" :is_err="form_err.description">
                <textarea class="input" rows="5" placeholder="請輸入課程的描述" v-model="form.description"></textarea>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { edit } from '../../../../himm/hook';

const form = reactive(<ONE>{ teacher_name: '', description: '' })
const form_err = reactive(edit.gen_form_err( form ))

const can = function() { let res = true
    if (!form.teacher_name) { form_err.teacher_name = true; return false } else { form_err.teacher_name = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ]; } 
    } 
})
</script>