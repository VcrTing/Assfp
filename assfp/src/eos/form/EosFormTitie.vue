<template>
    <div class="pb fx-s">
        <h3>{{ tit }}</h3>
        <div v-if="btn">
            <button class="btn-pri btn-def-ig" @click="$emit('tap')">{{ btn }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ 'tap' ],
    setup(prp, { emit }) {
        return { }
    },
    props: {
        tit: String, btn: String
    },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>