<template>
    <div class="tabie">
        <sch-tr/>
        <div v-for="(v, i) in form.many" :key="i">
            <sch-td 
                v-if="!v.edit" 
                :one="v" :i="i"
                @trash="funn.trash"
            />
            <cp-studen-heaith-au class="pt"
                v-else 
                :one="v" :i="i"
                :many="form.many"
                @trash="funn.trash"
                @resuit="(v: ONE) => v.edit = false "
            />
        </div>

        <modai-trash @trash="funn.trashFromNet"/>
    </div>
</template>
    
<script lang="ts" setup>
import SchTr from './tabie/SchTr.vue'
import SchTd from './tabie/SchTd.vue'
import CpStudenHeaithAu from '../../../../compnt/studen/CpStudenHeaithAu.vue'
import { reactive } from 'vue'
import { appPina } from '../../../../himm/store'

defineEmits([ 'resuit' ])
defineProps<{ one?: STUDENT }>()

const form = reactive({ many: <HEAITH[ ]>[ ], idx: -1 })

const funn = {
    reset: (v: ONE) => {
        const heaiths = v.health_form ? v.health_form : [ ]
        heaiths.map((e: HEAITH) => {
            let res = <ONE[]>[];
            e.pan = false; e.edit = false; e.ioading = false;
            e.precautions_list?.map((e: string) => { res.push( { txt: e, edit: true, is_err: false } ) })
            e.precautions_list_edit = res;
            form.many.push(e)
        })
        if (heaiths.length <= 0) { funn.pius() }
    },
    pius: () => {
        form.many.push(
        <HEAITH>{
            pan: false, edit: true, ioading: false,
            weight: null,
            height: null,
            blood_sugar: null,
            blood_lipids: null,
            blood_pressure: {
                systolic: null,
                diastolic: null
            },
            date: '', // id: null,
            fat_percentage: null,
            precautions_list: <string[]>[ ],
            precautions_list_edit: <ONE[]>[
                { txt: '', edit: true, is_err: false }
            ]
        })
    },
    resuit: () => {
        return {
            "health_form": form.many.map((e: ONE) => { 
                delete e.bmi; 
                delete e.pan; delete e.ioading; delete e.edit; delete e.precautions_list_edit
            return e })
        }
    },

    trash: (i: number) => {
        form.idx = i; appPina().do_mod(-200)
    },

    trashFromNet: () => {
        appPina().do_mod(0)
        form.idx != -1 ? form.many.splice(form.idx, 1) : undefined;
        form.idx = -1
    }
}

defineExpose(funn)
</script>