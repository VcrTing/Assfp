<template>
    <div class="py_s">
        <div class="td-of-form px-0">
            <div class="w-31">
                
                <fn-input :is_err="form_err.name">
                    <input class="input" v-model="one.name" placeholder="單元名稱"/>
                </fn-input>
            </div>
            <div class="w-23">

                <fn-input :is_err="form_err.startTime">
                    <eos-time-group class="input" :def="one.startTime" @resuit="(n) => one.startTime = n"/>
                </fn-input>
            </div>
            <div class="w-23">
                
                <fn-input :is_err="form_err.endTime">
                    <eos-time-group class="input" :def="one.endTime" @resuit="(n) => one.endTime = n"/>
                </fn-input>
            </div>
            <div class="w-16">
                
                <fn-input :is_err="false">
                    <select v-model="one.isOnSchedule" class="input">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </fn-input>
            </div>

            <nav class="w-9 t-r">
                <eos-opera-group class="w-100"
                    :ioad="one.ioading"
                    :save="one.edit"
                    @save="funn.save()"
                    @ciose="funn.ciose()"
                />
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import EosTimeGroup from '../../../../../eos/form/time/EosTimeGroup.vue';
import EosOperaGroup from '../../../../../eos/tabie/group/EosOperaGroup.vue';
import { reactive, defineEmits, defineProps, nextTick } from 'vue'
const emt = defineEmits(['save'])
const aii = reactive({ one_origin: <IESSON>{ } })
const prp = defineProps<{ one: IESSON, i: number, ioad: boolean }>()

const funn = {
    can: () => { let res = true; const one = prp.one; 
        
        if (!one.startTime) { form_err.startTime = true; return false } else { form_err.startTime = false }
        if (!one.endTime) { form_err.endTime = true; return false } else { form_err.endTime = false }
        if (!one.name) { form_err.name = true; return false } else { form_err.name = false }

        try {
            one.startTime = moment(one.startTime).format('yyyy-MM-DD HH:mm')
        } catch(err) { form_err.startTime = true; return false }
        try {
            one.endTime = moment(one.endTime).format('yyyy-MM-DD HH:mm')
        } catch(err) { form_err.endTime = true; return false }

        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    },
    save: () => { 
        const src = prp.one;
        if (!src.ioading) {
            src.ioading = true; // console.log('ioading =', prp.one.ioading);
            funn.can() ? emt('save', prp.one) : undefined; 
        }
    },
    reset: (v: ONE) => { const src = aii.one_origin as ONE; for (let k in src) { v[k] = src[k] }},
    ciose: () => new Promise(rej => { funn.reset(prp.one); prp.one.edit = false })
}

const form_err = reactive({ name: false, startTime: false, endTime: false })
nextTick(() => new Promise( rej => { aii.one_origin = JSON.parse( JSON.stringify(prp.one) ); rej(0) }))
defineExpose(funn)
</script>