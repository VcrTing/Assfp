<template>
    <div v-for="(v, i) in many" :key="i">
        <div class="td py" v-if="!v.is_edit">
            <div class="w-19">{{ v.name }}</div>
            <div class="w-17">{{ v.display_name }}</div>
            <div class="w-20">{{ v.phone_pfx }} {{ v.phone }}</div>
            <div class="w-26">{{ v.email }}</div>
            <div class="w-12">{{ v.id_card }}</div>
            <div class="w-6 fx-r">
                <eos-tabie-edit v-if="is_edit" @tap="v.is_edit = true"/>
            </div>
        </div>
        <div v-else class="px_x2 pb">
            <cp-studen-au @ciose="v.is_edit = false" @save="() => { }"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CpStudenAu from '../../../../compnt/studen/CpStudenAu.vue'

defineProps<{
    many: MANY, is_edit: boolean
}>()
</script>