<template>
    <div class="cp-notice-card">
        <div class="fx-s">
            <h3>重要通知</h3>
            <eos-card-opera-icon class="h4 err_son"/>
        </div>
        <div class="pt pb_s">
            <p>作者：{{one.author}}</p>
            <p>类别：{{one.typed}}</p>
        </div>
        <div class="row fx-l py">
            <div v-for="(v, i) in one.imgs" :key="i" class="cnc-imgs">
                <fn-img class="br_s" :src="v.img" :is_api="false" :is_div="true"/>
            </div>
        </div>
        <div class="pb_x">
            <p class="t-elip_x3">{{ one.desc }}</p>
            <p class="pt_s">{{ one.desc_sub }}</p>
        </div>
        <cp-send-status-card :v="one.send"/>
    </div>
</template>

<script lang="ts" setup>
import CpSendStatusCard from '../send/CpSendStatusCard.vue'

const props = defineProps<{
    i: number,
    one: ONE
}>()
</script>