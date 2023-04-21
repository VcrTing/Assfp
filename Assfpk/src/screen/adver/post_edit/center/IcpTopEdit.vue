<template>
    <div class="w-78 w-100-p pb" v-if="typed === 2 || typed === 3">
        <cp-adver-img-edit v-if="post" :form="post" :ky="'cover'"/>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import CpAdverImgEdit from '../../../../compnt/adver/img/CpAdverImgEdit.vue';
const prr = defineProps<{
    typed: number,
    post: ONE
}>()
</script>