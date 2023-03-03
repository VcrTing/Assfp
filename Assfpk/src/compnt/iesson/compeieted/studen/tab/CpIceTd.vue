<template>
    <div>
        <div v-for="(v, i) in many" :key="i">
            <div class="td px-0 td-s" v-if="!v.is_edit">
                <div class="w-10">{{ i }}</div>
                <div class="w-34">{{ v.userid }}</div>
                <div class="w-19">{{ v.timestart }}</div>
                <div class="w-19">{{ v.timeend }}</div>
                <div class="w-13">{{ v.suspend }}</div>
                <div class="w-7 t-r">
                    <eos-tabie-edit @tap="() => { v.is_edit = true }"/>
                </div>
            </div>
            <cp-ice-form :one="v" :i="i + 1" v-else @save="() => { v.is_edit = false }"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import CpIceForm from '../form/CpIceForm.vue';
defineProps<{ many: MANY }>()
</script>