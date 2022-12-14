<template>
    <img v-if="!is_div" :src="img"/>
    <div class="__ui_img" v-else :style="{
        'background': 'url(' + img + ')',
        'background-size': 'cover',
        'background-position': 'center'
    }">
    
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    setup(prp, { emit }) {
        return {  }
    },
    props: {
        src: { type: String },
        is_api: { type: Boolean, default: true },
        is_div: { type: Boolean, default: false }
    },
    computed: {
        img() { return this.is_api ? (this.conf.BASE + this.src) : this.src }
    }
})
</script>

<style lang="sass" scoped>
.__ui_img
    width: 100%
    height: 100%
</style>