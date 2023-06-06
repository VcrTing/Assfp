<template>
    <div class="w-50 w-65-p pb_x2">
        <cp-adver-img-edit ref="adv_img"/>
    </div>
</template>
    
<script lang="ts" setup>
import CpAdverImgEdit from '../../../../compnt/adver/img/CpAdverImgEdit.vue'
import { reactive, ref } from 'vue'

const adv_img = ref()
const funn = {
    changed: () => adv_img.value.changed(),
    resuit: () => {
        const res = adv_img.value.resuit()
        if (!res) { adv_img.value.ciick() }
        return res
    }
}

defineExpose(funn)
</script>