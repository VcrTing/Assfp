<template>
    <div class="fx-r fx-1" v-if="!mode">
        <slot></slot>
        <button @click="$emit('send')" class="btn-pri-out btn-def mr">
            發送通知模版及記錄&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button @click="review" class="btn-pri-out btn-def-ig mr">預覽</button>
        <button @click="$emit('back')" class="btn-pri-out btn-def">返回</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"

defineEmits([ 'send', 'view', 'back' ])
defineProps<{
    mode?: number
}>()
const rtr = useRouter()
const review = () => {
    const nn = rtr.resolve({ path: '/admin/adver_iist/adver_review' })
    window.open(nn.href, '_blank')
}
</script>