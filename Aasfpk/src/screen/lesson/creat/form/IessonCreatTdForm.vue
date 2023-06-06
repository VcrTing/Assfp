<template>
    <div class="row">
        <div class="w-10">{{idx}}</div>

        <fn-input-td class="w-25" :is_err="form_err.name">
            <input class="input" v-model="form.name" placeholder="請輸入名稱"/>
        </fn-input-td>

        <fn-input-td class="w-20" :is_err="form_err.startTime">
            <!--
            <eos-time-choise class="input" :def="form.startTime" @resuit="(n) => form.startTime = n"/>
            -->
            <eos-time-group class="input" :def="form.startTime" @resuit="(n) => form.startTime = n"/>
        </fn-input-td>

        <fn-input-td class="w-20" :is_err="form_err.endTime">
            <!--
            <eos-time-choise class="input" :def="form.endTime" @resuit="(n) => form.endTime = n"/>
            -->
            <eos-time-group class="input" :def="form.endTime" @resuit="(n) => form.endTime = n"/>
        </fn-input-td>

        <fn-input-td class="w-15" :is_err="form_err.isOnSchedule">
            <eos-iesson-schedule class="input" :def="form.isOnSchedule" @change="(n) => form.isOnSchedule = n"/>
        </fn-input-td>

        <eos-opera-group class="fx-1" :ciass="'fx-r'" 
            :save="form.edit" 
            :ioad="form.ioading" 
            @save="funn.save"
            @edit="form.edit = true" 
            @trash="$emit('trash')" />
        <!--
        <div class="w-10">操作</div>
        -->
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { edit } from '../../../../himm/hook';
import EosOperaGroup from '../../../../eos/tabie/group/EosOperaGroup.vue';
import EosTimeGroup from '../../../../eos/form/time/EosTimeGroup.vue';
import EosIessonSchedule from '../../../../eos/status/EosIessonSchedule.vue';
const prp = defineProps<{ form: ONE, idx: number }>()
const emt = defineEmits([ 'trash' ])
const form_err = edit.gen_form_err(prp.form)

const can = function() { let res = true
    const pass = [ 'edit', 'ioading', 'id', 'course_id' ]
    const src = prp.form
    for (let k in src) {
        if (pass.indexOf(k) < 0) {
            if (src[k] == '' || src[k] == null) { res = false } 
        }
    }
    return res
}

const funn = {
    save: () => {
        const _c = can();
        console.log(_c)
        console.log('儲存的 數據 =', prp.form)
    }
}

defineExpose({ 
    // resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { 
        // for (let k in form) { form[ k ] = v[ k ] } 
        // v['categoryid'] ? cate.value.ioc( v['categoryid'] ) : undefined;
    } 
})
</script>