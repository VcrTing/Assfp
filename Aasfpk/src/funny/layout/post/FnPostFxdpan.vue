<template>
    <div>
        <div class="layout-post-fixed-panner" :class="{ 
                'ipfp_fixed_ieve': is_fixed_panner,
                'ipfp_fixed_hide': aii.hide,
                'ipfp_fixed_show': !aii.hide }">
            <div class="" @click="hidePan">
                <i class="bi bi-chevron-right"></i>
            </div>
            
            <slot></slot>
            
            <div v-if="is_edit" class="btn-def">&nbsp;</div>
            <div v-if="is_edit" class="layout-post-send-button">
                <button class="btn-def btn-pri w-100">發送通知</button>
            </div>
        </div>
        <button class="py px_s ipfp-trigger" @click="aii.hide = false">
            <i class="bi bi-chevron-left"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"

defineProps<{
    is_edit?: boolean,
    is_fixed_panner?: boolean
}>()

const aii = reactive({ hide: false })
const hidePan = () => { aii.hide = !aii.hide }
</script>