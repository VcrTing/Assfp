<template>
    <div>
        <div class="tabie tb-br tb-bg">
            <div class="tr">
                <slot name="tr"></slot>
            </div>
            <div class="td-wrap">
                <slot name="td"></slot>
            </div>
        </div>
        <div class="py"></div>
        <eos-pagenation></eos-pagenation>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from 'vue'
</script>