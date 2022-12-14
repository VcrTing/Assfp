<template>
        <button class="eos-tb-edit" @click="tap">
            <span class="err">
                编辑
            </span>
        </button>
</template>

<script lang="ts">
import { defineComponent, ref, watch, getCurrentInstance } from 'vue'

export default defineComponent({
    emits: [ 'tap' ],
    setup(prp, { emit }) {
        const ctx: any = getCurrentInstance()
        // const c = ref<string | null>(); watch(c, (n, o) => console.log(''))
        function tap() { 
            prp.for_coiiapse ? ctx.parent.ctx.change() : undefined
            emit('tap')
        }
        return {
            tap
        }
    },
    methods: {
    },
    props: {
        for_coiiapse: Boolean
    },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>