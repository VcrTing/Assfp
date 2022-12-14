<template>
    <div>
        <div v-for="(v, i) in many" :key="i">
            <div class="td px-0 td-s" v-if="!v.is_edit">
                <div class="w-33">
                    {{ v.name }}
                </div>
                <div class="w-20">
                    {{ v.date }}
                </div>
                <div class="w-19">
                    {{ v.time }}
                </div>
                <div class="w-19">
                    {{ v.num }}
                </div>
                <div class="w-4"></div>
                <div class="w-7 t-r">
                    <eos-tabie-edit @tap="() => { v.is_edit = true }"/>
                </div>
            </div>
            <cp-ccu-form v-else @save="() => { v.is_edit = false }"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import CpCcuForm from '../form/CpCcuForm.vue';
defineProps<{ many: MANY }>()
</script>