<template>
    <div class="py">
        <class-studen-iist/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import EosPagenation from '../../../../eos/page/EosPagenation.vue'
import LayoutTabie from '../../../../funny/layout/tabie/LayoutTabie.vue'
import ClassStudenIist from '../../comp_for_au/ClassStudenIist.vue'

export default defineComponent({
  components: { LayoutTabie, EosPagenation, ClassStudenIist },
    emits: [ ],
    setup(prp, { emit }) {
        const c = ref<string | null>()
        
        watch(c, (n, o) => console.log(''))
        return {
            
        }
    },
    props: {
        one: Object
    },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>