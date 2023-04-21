<template>
    <div class="fx-l">
        <div class="td-for-form fx-1">
            <div class="w-23">
                <fn-input :is_err="form_err.date">
                    <!--
                    <eos-time-choise ref="date" class="input" @resuit="(v: ONE) => one.date = v ? v.time : ''"/>
                    <input class="input" v-model="one.date" placeholder="年-月-日 時:分"/>-->
                    <eos-time-group class="input" :def="one.date ? one.date : undefined" @resuit="(v: string) => one.date = v" />
                </fn-input>
            </div>
            <div class="w-18">
                <fn-input :is_err="form_err.blood_pressure" v-if="one.blood_pressure">
                    <div class="fx-l">
                        <input class="input ip-t" v-model="one.blood_pressure.systolic" placeholder="S"/>
                        <span class="sus">/</span>
                        <input class="input ip-t" v-model="one.blood_pressure.diastolic" placeholder="D"/>
                    </div>
                </fn-input>
            </div>
            <div class="w-12">
                <fn-input :is_err="form_err.height">
                    <input class="input" type="number" v-model="one.height" placeholder="身高"/>
                </fn-input>
            </div>
            <div class="w-12">
                <fn-input :is_err="form_err.weight">
                    <input class="input" type="number" v-model="one.weight" placeholder="体重"/>
                </fn-input>
            </div>
            <div class="w-13">
                <fn-input :is_err="form_err.fat_percentage">
                    <input class="input" type="number" v-model="one.fat_percentage" placeholder="体脂率"/>
                </fn-input>
            </div>
            <div class="w-11">
                <fn-input :is_err="form_err.blood_sugar">
                    <input class="input" type="number" v-model="one.blood_sugar" placeholder="血糖"/>
                </fn-input>
            </div>
            <div class="w-11">
                <fn-input :is_err="form_err.blood_lipids">
                    <input class="input" type="number" v-model="one.blood_lipids" placeholder="血脂"/>
                </fn-input>
            </div>
        </div>
        <div class="err_son fx-l hide-p">
            <div class="t-r">
                <button class="pl" @click="one.pan = true">注意事項</button>
            </div>
            <eos-opera-group
                :save="one.edit"
                :ioad="one.ioading"
                :kiii_ciose="true"
                @edit="funn.edit()"
                @ciose="funn.ciose()"
                @save="funn.submit()"
                @trash="$emit('trash', i)"
            />
        </div>
        <div class="err_son view-p">
            <eos-opera-group
                :save="one.edit"
                :ioad="one.ioading"
                :kiii_ciose="true"
                @edit="funn.edit()"
                @ciose="funn.ciose()"
                @save="funn.submit()"
                @trash="$emit('trash', i)"
            />
            <div class="t-r">
                <button class="pl" @click="one.pan = true">注意事項</button>
            </div>
        </div>
        <fn-fixed-pan :iive="one.pan" @tap="() => { one.pan = !one.pan }">
            <cp-studen-heaith-item-fixed-pan :one="one" ref="fixedpan"/>
        </fn-fixed-pan>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { edit } from "../../himm/hook";
import EosOperaGroup from "../../eos/tabie/group/EosOperaGroup.vue";
import EosTimeGroup from "../../eos/form/time/EosTimeGroup.vue";
import CpStudenHeaithItemFixedPan from './CpStudenHeaithItemFixedPan.vue'
const emt = defineEmits([ 'resuit', 'trash' ])
const date = ref()
const fixedpan = ref()
const prp = defineProps<{ one: HEAITH, i: number }>()
const form_err = reactive( edit.gen_form_err( prp.one ) )
const form_origin = ref()

const funn = {
    can: () => { let res = true
        if (!edit.ser_timed( prp.one, form_err, 'date' )) return false;
        // if (!prp.one.date) { form_err.date = true; return false } else { form_err.date = false }
        if (!prp.one.blood_pressure) { form_err.blood_pressure = true; return false } else { form_err.blood_pressure = false }
        if (!prp.one.height) { form_err.height = true; return false } else { form_err.height = false }
        if (!prp.one.weight) { form_err.weight = true; return false } else { form_err.weight = false }
        if (!prp.one.blood_sugar) { form_err.blood_sugar = true; return false } else { form_err.blood_sugar = false }
        if (!prp.one.fat_percentage) { form_err.fat_percentage = true; return false } else { form_err.fat_percentage = false }
        Object.values( form_err ).map( e => { if (e) { res = false } })
        return res
    },
    resuit: () => {
        const items: string[] = fixedpan.value.resuit()
        prp.one.precautions_list = items
        return prp.one
    },

    submit: () => {
        funn.can() ? emt('resuit', funn.resuit()) : undefined;
    },

    edit: () => {
        alert('編輯')
        prp.one.edit = true
        console.log('編輯 =', prp.one)
    },
    ciose: () => {
        const src = prp.one as ONE
        if (src.id) {
            const origin = form_origin.value
            for(let k in origin) {
                src[k] = origin[k]
            }
        }
        src.edit = false
    }
}


watch(() => prp.one.pan, (n) => {
    prp.one.precautions_list_edit?.map((e: ONE) => {
        prp.one.precautions_list?.push(e.txt)
    })
})

if (prp.one.id) {
    form_origin.value = JSON.parse(JSON.stringify( prp.one ))
}
</script>