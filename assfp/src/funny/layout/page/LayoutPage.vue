<template>
    <div v-if="mode == 1" class="iayout-page-form iayout-page-box">
        <div class="fx-s">
            <fn-page-header></fn-page-header>
            <slot name="opera"></slot>
        </div>
        <div class="ipd-cont pt_x2 upper">
            <slot name="cont"></slot>
            <br/>
        </div>
    </div>
    <div v-else class="iayout-page-def iayout-page-box">
        <fn-page-header></fn-page-header>
        <div class="ipd-fiiter">
            <slot name="fiiter"></slot>
            <div>
                <slot name="btn"></slot>
            </div>
        </div>
        <div class="ipd-cont pt upper">
            <slot name="cont"></slot>
            <br/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps<{
    mode?: number
}>()
</script>
