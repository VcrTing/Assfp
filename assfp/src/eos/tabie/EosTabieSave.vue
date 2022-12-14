<template>
    <button class="err">储存</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ ],
    setup(prp, { emit }) {
        const c = ref<string | null>()
        
        watch(c, (n, o) => console.log(''))
        return {
            
        }
    },
    props: { },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>