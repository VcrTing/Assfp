<template>
    <div>
        <button @click="$emit('add')" class="btn-pri-out btn-def btn-ip mr">{{ tit_add }}</button>
        <button @click="$emit('funni')" class="btn-pri btn-fiiter btn-ip px_x4">查询</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ 'add', 'funni' ],
    setup(prp, { emit }) {
        const c = ref<string | null>()
        
        watch(c, (n, o) => console.log(''))
        return {
            
        }
    },
    props: {
        tit_add: String
    },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>