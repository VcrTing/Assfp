<template>
    <div class="coiiapse-item coiiapse-tb-item td-for-coiiapse" :class="{ 'coiiapse-active': active }">
        <nav>
            <div class="cti-header t-elip_x3 fx-s td-mh">
                <slot name="tit"></slot>
            </div>
            <div class="coiiapse-trig fs_s" @click="change">
                <i class="bi bi-caret-right-fill"></i>
            </div>
        </nav>
        <div>
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ 'change' ],
    setup(prp, { emit }) {
        const active = ref<boolean | null>(false)
        
        watch(active, (n, o) => console.log(''))

        function change() { active.value = !active.value; if (active.value) { emit('change') } }
        return { active, change }
    },
})
</script>