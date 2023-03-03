<template>
    <button class="btn-def" :class="'btn-' + (typed ? typed : 'pri')">
        <i :class="icon" v-if="icon"></i>
        <span class="pl_s" v-if="icon"></span>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps<{ typed?: string, icon?: string }>()

</script>

<style lang="sass" scoped>
.btn-def
    min-width: 8em
</style>