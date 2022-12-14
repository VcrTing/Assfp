<template>
    <div class="card_temp" :class="'card_temp_' + mode">
        {{ txt }}
    </div>
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
    props: { txt: String, mode: Number },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>