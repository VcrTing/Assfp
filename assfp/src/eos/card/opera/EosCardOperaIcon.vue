<template>
    <div>
        <i class="bi bi-arrow-clockwise" @click="$emit('fresh')"></i>
        <span class="pr_s"></span>
        <i class="bi bi-pencil-fill" @click="$emit('edit')"></i>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ 'edit', 'fresh' ],
    setup(prp, { emit }) {
        const c = ref<string | null>()
        
        watch(c, (n, o) => console.log(''))
        return {
            
        }
    },
    props: {
        mode: Number
    },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>
.bi-arrow-clockwise
    font-size: 1.15em
</style>