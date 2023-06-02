<template>
    <div class="pt">
        <div class="td-of-form panner-x">
            <div class="w-10 sus">{{ i + 1 }}</div>
            <div class="w-48 pr">
                <fn-input :is_err="form_err.userid">
                    <eos-user-seiect :roie="'student'" @resuit="(v: STUDENT) => {
                        one.userid = v.moodle_id;
                        one.user = v;
                        funn.sameUser()
                    }"/>
                </fn-input>
            </div>
            <div class="w-32 err">
                {{ aii.msg }}
            </div>

            <nav class="w-10 t-r" v-if="!ioading">
                <eos-tabie-save @tap="funn.save" :icon="true"/>
                <span class="px_s"></span>
                <span class="err" @click="() => { funn.can() ? undefined : $emit('trash', i); }">取消</span>
            </nav>
            <nav class="w-10 t-r" v-else>
                <span class="sus">加載中...</span>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineEmits, defineProps } from 'vue'
import { edit } from '../../../../../himm/hook';
const emt = defineEmits([ 'save', 'trash' ])
const prp = defineProps<{ one: ONE, i: number, ioading: boolean, _many: MANY }>()

const aii = reactive({ msg: '' })

const funn = {
    sameUser: () => {
        let iong = 0
        prp._many.map((e: ONE) => { if (e.userid == prp.one.userid) { iong += 1 } })
        if (iong > 1) { aii.msg = '已存在相同的學生'; return true } else { aii.msg = '' } return false
    },
    can: () => { 
        let res = true; const one = prp.one
        if (!one.user) { form_err.userid = true; return false } else { form_err.userid = false }

        if (funn.sameUser()) { form_err.userid = true; return false }  
        else { form_err.userid = false; aii.msg = '' }

        Object.values( form_err ).map( e => { if (e) { res = false } }); 
        return res
    },
    save: () => funn.can() ? emt('save', prp.one) : undefined,
}

const form_err = reactive(edit.gen_form_err(prp.one))

/*
        // if (!edit.ser_timed(one, form_err, 'timestart_str')) return false;
        // if (!edit.ser_timed(one, form_err, 'timeend_str')) return false;

<div class="w-24">
    <fn-input :is_err="form_err.timestart">
        <eos-time-group class="input" :def="one.timestart_str" @resuit="(v: string) => one.timestart_str = v"/>
    </fn-input>
</div>
<div class="w-24">
    <fn-input :is_err="form_err.timeend">
        <eos-time-group class="input" :def="one.timeend_str" @resuit="(v: string) => one.timeend_str = v"/>
    </fn-input>
</div>

<!--
<input class="input" v-model="one.timestart_str" placeholder="年-月-日 時:分"/>
-->
<!--
<input class="input" v-model="one.timeend_str" placeholder="年-月-日 時:分"/>
-->
<!--
<div class="w-13">
    
    <fn-input :is_err="form_err.suspend">
        <input class="input" type="number" v-model="one.suspend" placeholder="suspend"/>
        <select v-model="one[ 'suspend' ]" class="input">
            <option value="1">是</option>
            <option value="0">否</option>
        </select>
    </fn-input>
</div>
-->
*/
</script>