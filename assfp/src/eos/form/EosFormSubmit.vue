<template>
    <div class="fx-r" v-if="!mode">
        <button @click="$emit('back')" class="btn-pri-out btn-def mr">返回</button>
        <button @click="$emit('save')" class="btn-pri btn-def-ig">储存</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
defineEmits([ 'save', 'back' ])
defineProps<{
    mode?: number
}>()
</script>