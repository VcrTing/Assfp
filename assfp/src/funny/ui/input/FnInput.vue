<template>
    <div class="ip-wrap">
        <label>
            {{ tit }}
        </label>
        <nav :class="{ 'pt_s': tit }">
            <slot></slot>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from 'vue'
defineProps<{
    tit?: string
}>()
</script>