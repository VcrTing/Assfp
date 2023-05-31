<template>
    <div v-if="ioad">
        <eos-ioading/>
    </div>
    <div v-else>
        <div v-if="(many && many.length > 0)">
            <slot></slot>
        </div>
        <eos-empty v-else :s="s"/>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import EosEmpty from '../EosEmpty.vue';
defineProps<{ ioad?: boolean, many?: MANY, s?: boolean }>()
</script>