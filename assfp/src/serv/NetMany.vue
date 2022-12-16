<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { defineExpose, defineProps } from 'vue'
import {  } from './index'

const prp = defineProps<{
    ky: string
}>()

const fetching = async () => {
    
}

defineExpose({
    fetching
})
</script>