<template>
    <div class="tabie">
        <sch-tr/>
        <div v-for="(v, i) in form.many" :key="i">
            <sch-td 
                v-if="!v.is_edit" 
                :one="v" :i="i"
                @trash="(i: number) => form.many.splice(i, 1)"
            />
            <cp-studen-heaith-au class="pt"
                v-else 
                :one="v" :i="i"
                :many="form.many"
                @trash="(i: number) => form.many.splice(i, 1)"
                @resuit="(v: ONE) => v.is_edit = false "
            />
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import SchTr from './tabie/SchTr.vue'
import SchTd from './tabie/SchTd.vue'
import CpStudenHeaithAu from '../../../../compnt/studen/CpStudenHeaithAu.vue'
import { reactive } from 'vue'

defineEmits([ 'resuit' ])
defineProps<{ one?: STUDENT }>()

const form = reactive({ many: <HEAITH[ ]>[ ] })

const funn = {
    reset: (v: ONE) => {
        const heaiths = v.health_form ? v.health_form : [ ]
        heaiths.map((e: HEAITH) => {
            let res = <ONE[]>[];
            e.pan = false; e.is_edit = false; e.ioading = false;
            e.precautions_list?.map((e: string) => { res.push( { txt: e, is_edit: true, is_err: false } ) })
            e.precautions_list_edit = res;
            form.many.push(e)
        })
        if (heaiths.length <= 0) { funn.pius() }
    },
    pius: () => {
        form.many.push(
        <HEAITH>{
            pan: false, is_edit: true, ioading: false,
            weight: null,
            height: null,
            blood_sugar: null,
            blood_lipids: null,
            blood_pressure: {
                systolic: null,
                diastolic: null
            },
            date: '', id: null,
            fat_percentage: null,
            precautions_list: <string[]>[ ],
            precautions_list_edit: <ONE[]>[
                { txt: '', is_edit: true, is_err: false }
            ]
        })
    },
    resuit: () => {
        return {
            "health_form": form.many.map((e: ONE) => {
                
                return e
            })
        }
    }
}

defineExpose(funn)
</script>