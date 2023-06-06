<template>
    <div>
        <div class="row_x2 fx-l">
            <div class="w-333">
                <fn-input :tit="'預計推送時間'" :is_err="form_err.expected_push_date" class="mb_x">
                    <eos-time-group class="input" :def="form.expected_push_date" @resuit="(n: string) => form.expected_push_date = n"/>
                </fn-input>
            </div>
            <div class="w-333">
                <fn-input :tit="'通知類別'" :is_err="form_err.type" class="mb_x">
                    <eos-notific-typed ref="typed" class="input" :def="form.type" @resuit="(n: string) => form.type = n"/>
                </fn-input>
            </div>
            <div class="w-333">
                <fn-input :tit="'作者'" :is_err="form_err.written_by" class="mb_x">
                    <input class="input" v-model="form.written_by" placeholder="請輸入作者名稱"/>
                </fn-input>
            </div>
        </div>
        <div class="">
            <fn-input :tit="'跳轉至Link'" :is_err="form_err.url" class="mb_x">
                <input class="input" v-model="form.url" placeholder="請輸入網絡連結，點擊該連結會跳轉至某網址"/>
            </fn-input>
        </div>
    </div>
    
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { edit } from '../../../../himm/hook'
import EosNotificTyped from '../../../../eos/status/notific/EosNotificTyped.vue'

const typed = ref()

const form: ONE = reactive({
    expected_push_date: '', written_by: '', type: '',
    url: '', 
})
const form_err: ONE = reactive(edit.gen_form_err( form ))


const can = function() { let res = true
    if (!form.fullname) { form_err.fullname = true; return false } else { form_err.fullname = false }
    if (!form.categoryid) { form_err.categoryid = true; return false } else { form_err.categoryid = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ] } 
        v['type'] ? typed.value.ioc( v['type'] ) : undefined;
    } 
})
</script>