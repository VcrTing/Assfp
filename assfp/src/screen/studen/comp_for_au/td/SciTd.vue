<template>
    <div>
        <div v-for="(v, i) in many" :key="i" class="td-mh">
            <div class="td py" v-if="!v.is_edit">
                <div class="w-25">
                    {{ v.course.name }}<br/>
                    {{ '(' + v.course.name_sub + ')' }}
                </div>
                <div class="w-15">{{ v.open }}</div>
                <div class="w-15">{{ v.ciose }} {{ v.phone }}</div>
                <div class="w-13">{{ v.ciass }}</div>
                <div class="w-12">{{ v.typed }}</div>
                <div class="w-12">
                    <eos-course-score :is_txt_mode="true" :def="v.is_score"/>    
                </div>
                <div class="w-8 fx-r">
                    <eos-tabie-edit @tap="v.is_edit = true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import EosTabieEdit from '../../../../eos/tabie/EosTabieEdit.vue'
defineProps<{
    many: MANY
}>()
</script>