<template>
    <div>
        <div v-for="(v, i) in many" :key="i">
            <div class="td px-0 td-s" v-if="!v.is_edit">
                <div class="w-14">
                    {{ v.name }}
                </div>
                <div class="w-17">
                    {{ v.display_name }}
                </div>
                <div class="w-19">
                    {{ '+ ' + v.phone_prefix }}&nbsp;{{ v.phone }}
                </div>
                <div class="w-21">
                    {{ v.email }}
                </div>
                <div class="w-14">
                    {{ v.id_card_no }}
                </div>
                <div class="w-10">
                    {{ v.status }}
                </div>
                <div class="w-7 t-r">
                    <eos-tabie-edit @tap="() => { v.is_edit = true }"/>
                </div>
            </div>
            <cp-ccs-form v-else @save="() => { v.is_edit = false }"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import CpCcsForm from '../form/CpCcsForm.vue';
defineProps<{ many: MANY }>()
</script>