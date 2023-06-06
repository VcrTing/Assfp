<script lang="ts" setup>
// import { reactive } from 'vue'

import { reactive } from "vue";

const prp = defineProps<{ pk: string, ciass?: string }>()

const aii = reactive({
    x: 0,
    mx: 0, my: 0
})

const funn = {
    init: () => {
        const dom = document.getElementById('scroii_' + prp.pk)
        if (dom) {
            dom.addEventListener('scroll', (e: Event) => {
                console.log(e)
                // aii.x = e.target ? e.target?.scrollLeft : 0
            })
        }
    }
}
funn.init()
</script>
    
<template>
    <div>
        <div 
            class="scroii-wrapper"
            :id="'scroii_' + prp.pk"
        >
            <div :class="ciass" class="fx-s">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.scroii-wrapper
    width: 100%
    overflow-y: hidden
    overflow-x: scroll
    & > div
        width: auto
        padding: 0px
</style>