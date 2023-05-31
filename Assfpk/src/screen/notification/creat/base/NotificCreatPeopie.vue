<template>
    <div>
        <div class="">
            <fn-input :tit="'接收該消息的用戶'" :is_err="form_err.url" class="mb_x">
                <input class="input" v-model="form.url" placeholder="請輸入"/>
            </fn-input>
        </div>
    </div>
    
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { edit } from '../../../../himm/hook'
import EosNotificTyped from '../../../../eos/status/notific/EosNotificTyped.vue'

const typed = ref()

const form: ONE = reactive({ external_user_id: [ ] })
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