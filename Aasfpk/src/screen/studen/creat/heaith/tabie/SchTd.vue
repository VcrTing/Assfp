<template>
    <div class="fx-l">
        <div class="td px-0 fx-1">
            <div class="w-20">
                {{ timed.view_time(one.date ? one.date : '') }}
            </div>
            <div class="w-20">
                <span class="sus">S:&nbsp;</span>{{ one.blood_pressure ? one.blood_pressure.systolic : ' ' }} / 
                <span class="sus">D:&nbsp;</span>{{ one.blood_pressure ? one.blood_pressure.diastolic : ' ' }}
            </div>
            <div class="w-12">
                {{ one.height }}
            </div>
            <div class="w-13">
                {{ one.weight }}
            </div>
            <div class="w-13">
                {{ one.fat_percentage }}<span v-if="one.fat_percentage"> %</span>
            </div>
            <div class="w-11">
                {{ one.blood_sugar }}
            </div>
            <div class="w-11">
                {{ one.blood_lipids }}
            </div>
        </div>
        <div class="">
            <eos-tabie-heaith-opera
                @panner="one.pan = true"
                @edit="one.edit = true"
                @trash="$emit('trash', i)"
                />
        </div>

        <fn-fixed-pan :iive="one.pan" @tap="() => { one.pan = !one.pan }">
            <cp-studen-heaith-item-fixed-pan :one="one" ref="fixedpan"/>
        </fn-fixed-pan>
    </div>
</template>
    
<script lang="ts" setup>
import { watch } from 'vue';
import timed from '../../../../../air/timed';
import CpStudenHeaithItemFixedPan from '../../../../../compnt/studen/CpStudenHeaithItemFixedPan.vue';
const prp = defineProps<{
    one: HEAITH, i: number
}>()
defineEmits([ 'trash' ])
watch(() => prp.one.pan, (n) => {
    prp.one.precautions_list_edit?.map((e: ONE) => {
        prp.one.precautions_list?.push(e.txt)
    })
})
</script>