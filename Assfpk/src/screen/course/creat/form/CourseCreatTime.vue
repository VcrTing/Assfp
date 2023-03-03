<template>
    <div class="f-row">
        <div class="w-48">
            <fn-input :tit="'開課時間'" :is_err="form_err.startdate" class="mb_x">
                <eos-time-choise ref="star_time" class="input" @resuit="(v: ONE) => {
                    form.startdate = v.time;    
                }" :pchd="'請選擇'"/>
            </fn-input>

            <fn-input :tit="'課程代碼'" :is_err="form_err.idnumber" class="mb_x">
                <input v-model="form.idnumber" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>
        <div class="w-4"></div>
        <div class="w-48">
            <fn-input :tit="'結課時間'" class="mb_x" :is_err="form_err.enddate">
                <eos-time-choise ref="end_time" class="input" @resuit="(v: ONE) => {
                    form.enddate = v.time;    
                }" :pchd="'請選擇'"/>
            </fn-input>

            <fn-input :tit="'課程簡易名稱'" class="mb_x" :is_err="form_err.shortname">
                <input v-model="form.shortname" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const star_time = ref()
const end_time = ref()

const form = reactive(<ONE>{
    idnumber: '', startdate: '', enddate: '', shortname: ''
})

const form_err = reactive({
    idnumber: false, startdate: false, enddate: false, shortname: false
})

const can = function() { let res = true
    if (!form.startdate) { form_err.startdate = true; return false } else { form_err.startdate = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}
defineExpose({ 
    resuit: () => (can() ? form : undefined), 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ]; } 
        v['startdate'] ? star_time.value.ioc(v['startdate']) : undefined;
        v['enddate'] ? end_time.value.ioc(v['enddate']) : undefined;
    } 
})
</script>