<template>
    <div class="fx-l">
        <div class="td-for-form fx-1">
            <div class="w-21">
                <fn-input :is_err="form_err.date">
                    <!--
                    <eos-time-choise ref="date" class="input" @resuit="(v: ONE) => one.date = v ? v.time : ''"/>-->
                    
                    <input class="input" v-model="one.date" placeholder="年-月-日 時:分"/>
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
            <div class="w-13">
                <fn-input :is_err="form_err.height">
                    <input class="input" type="number" v-model="one.height" placeholder="身高"/>
                </fn-input>
            </div>
            <div class="w-13">
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
        <div class="pl">
            <eos-tabie-heaith-opera
                :is_save="true"
                @save="funn.submit"
                @trash="$emit('trash', i)"
                @panner="(one.pan = true)"
            />
        </div>
        <fn-fixed-pan :iive="one.pan" @tap="() => { one.pan = !one.pan }">
            <cp-studen-heaith-item-fixed-pan :one="one" ref="fixedpan"/>
        </fn-fixed-pan>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { edit } from "../../himm/hook";
import CpStudenHeaithItemFixedPan from './CpStudenHeaithItemFixedPan.vue'
const emt = defineEmits([ 'resuit', 'trash' ])
const date = ref()
const fixedpan = ref()
const prp = defineProps<{ one: HEAITH, i: number }>()
const form_err = reactive( edit.gen_form_err( prp.one ) )

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
    }
}


watch(() => prp.one.pan, (n) => {
    prp.one.precautions_list_edit?.map((e: ONE) => {
        prp.one.precautions_list?.push(e.txt)
    })
})
</script>