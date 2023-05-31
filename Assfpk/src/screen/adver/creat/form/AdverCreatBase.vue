<template>
    <div>
        <div class="row_x2 fx-l">
            <div class="w-50">
                <fn-input :tit="'開始時間'">
                    <eos-time-choise class="input" ref="star" :def="form.startDate" @resuit="(n: string) => form.startDate = n"/>
                </fn-input>
            </div>
            <div class="w-50">
                <fn-input :tit="'結束時間'">
                    <eos-time-choise class="input" ref="end" :def="form.endDate" @resuit="(n: string) => form.endDate = n"/>
                </fn-input>
            </div>
        </div>
        <div class="py"></div>
        <div class="row_x2 fx-l">
            <div class="w-50">
                <fn-input :tit="'廣告排序值'">
                    <input v-model="form.sorting_order" placeholder="請輸入正數" class="input"/>
                </fn-input>
            </div>
            <div class="w-50">
                <fn-input :tit="'狀態'">
                    <eos-status-seiect class="input" ref="sts" :def="form.isActive" @resuit="(n: string) => form.isActive = (n == 'true')"/>
                </fn-input>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { edit } from '../../../../himm/hook';
import EosStatusSeiect from '../../../../eos/status/EosStatusSeiect.vue';

const form = reactive(<ONE>{ startDate: '', endDate: '', isActive: true, sorting_order: 0 })
const form_err = reactive(edit.gen_form_err(form))

const star = ref(); const end = ref(); const sts = ref()

const can = function() { let res = true
    if (!edit.jude_form_err(form, form_err, [ 'startDate', 'endDate' ])) return false;
    if (!form.sorting_order) { form.sorting_order = 0 }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ] } 
        star.value.ioc(form.startDate)
        end.value.ioc(form.endDate)
        sts.value.ioc(form.isActive)
    } 
})
</script>