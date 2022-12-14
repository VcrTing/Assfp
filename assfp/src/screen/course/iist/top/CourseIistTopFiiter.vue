<template>
    <div class="fx-l nav-fiiter">
        <fn-input-fiiter class="w-25" :header="'課程名稱：'">
            <input class="input" placeholder=""/>
        </fn-input-fiiter>
        
        <fn-input class="w-15">
            <fn-select :items="form.typed" class="input"/>
        </fn-input>

        <eos-time-doubie class="fx-1 input"/>

        <fn-input class="w-20">
            <fn-select :items="form.teach" class="input"/>
        </fn-input>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'

const form = reactive({
    typed: [
        { txt: '类别', v: 0 },
        { txt: '教练证书', v: 1 }
    ],
    teach: [
        { txt: '授课方式', v: 0 },
        { txt: '一对一辅导', v: 1 }
    ],
})
</script>

<style lang="sass" scoped>

</style>