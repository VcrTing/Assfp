<template>
    <div class="pt">
        <div class="td-of-form px-0">
            <div class="w-20">
                <fn-input :is_err="form_err.role">
                    <eos-user-roie class="input" @resuit="(v: string) => { one.role = v }"/>
                </fn-input>
            </div>
            <div class="w-52">
                <fn-input :is_err="form_err.userid">
                    
                    <eos-user-seiect :roie="one.role ? one.role : 'teacher'" @resuit="(v: STUDENT) => {
                        one.userid = v.moodle_id;
                        one.user = v;
                    }"/>
                </fn-input>
            </div>

            <div class="w-20">

            </div>

            <nav class="w-10 t-r" v-if="!ioading">
                <eos-tabie-save @tap="funn.save"/>
                <span class="px_s"></span>
                <eos-tabie-trash @tap="() => { funn.can() ? undefined : $emit('trash', i); }"/>
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
const prp = defineProps<{ one: COURSE_ENROLUSER, i: number, ioading: boolean }>()

const funn = {
    can: () => { let res = true; const one = prp.one
        if (!one.user) { form_err.userid = true; return false } else { form_err.userid = false }
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    },
    save: () => funn.can() ? emt('save', prp.one) : undefined,
}

const form_err = reactive(edit.gen_form_err(prp.one))

/*
        // if (!edit.ser_timed(one, form_err, 'timestart_str')) return false;
        // if (!edit.ser_timed(one, form_err, 'timeend_str')) return false;

    <!--
    <div class="w-21">

        <fn-input :is_err="form_err.timestart">
            <eos-time-group class="input" :def="one.timestart_str" @resuit="(v: string) => one.timestart_str = v"/>
        </fn-input>
    </div>
    <div class="w-21">
        
        <fn-input :is_err="form_err.timeend">
            <eos-time-group class="input" :def="one.timeend_str" @resuit="(v: string) => one.timeend_str = v"/>
        </fn-input>
    </div>
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