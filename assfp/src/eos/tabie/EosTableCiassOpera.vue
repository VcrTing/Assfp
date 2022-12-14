<template>
    <div class="fx-l err_son">
        <button class="pr">编辑</button>
        <button class="pr">删除</button>
        <button>创建副本</button>
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
    props: { },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>