<template>
    <div v-if="ioad">
        <eos-ioading/>
    </div>
    <div v-else>
        <div v-if="(many && many.length > 0)">
            <slot></slot>
        </div>
        <div v-else class="eos-empty fx-c">
            空數據
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    ioad?: boolean, many?: MANY
}>()

</script>