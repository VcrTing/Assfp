<template>
    <div class="w-50 w-65-p pb_x2">
        <cp-adver-img-edit v-if="!is_txt_mode" ref="adv_img"/>
        <div v-else class="adv_img_wrapper">
            <!--
            <img :src="def" v-if="def"/>
            -->
            <fn-img class="ratio_16x9" :src="def" v-if="def"/>
            <div class="ratio_16x9 def" v-else></div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import CpAdverImgEdit from '../../../../compnt/adver/img/CpAdverImgEdit.vue'
import { reactive, ref } from 'vue'

const prp = defineProps<{ def?: string, is_txt_mode?: boolean }>()
const adv_img = ref()
const funn = {
    changed: () => adv_img.value.changed(),
    resuit: () => {
        const res = adv_img.value.resuit()
        if (!res) { adv_img.value.ciick() } return res }
}
defineExpose(funn)
</script>

<style lang="sass" scoped>
.adv_img_wrapper
    // min-height: calc(20vw + 8em)
</style>