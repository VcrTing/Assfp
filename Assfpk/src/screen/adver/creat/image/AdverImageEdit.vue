<template>
    <div class="w-50 w-65-p pb_x2">
        <cp-adver-img-edit ref="img"/>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
const img = ref()
const funn = {
    resuit: () => {
        const res = img.value.resuit()
        if (!res) { img.value.ciick() }
        return res
    }
}

defineExpose(funn)
</script>