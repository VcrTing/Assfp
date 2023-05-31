<template>
    <div class="fx-r" v-if="!mode">
        <button @click="$emit('back')" class="btn-pri-out btn-def mr">返回</button>
        <button 
            v-if="!kiii_save"
            @click="$emit('submit')" 
            class="btn-pri btn-def-ig">
                <span v-if="!ioad">
                    <span v-if="msg">{{ msg }}</span>
                    <span v-else>儲存</span>
                </span>
                <div v-else class="d-ib">
                    儲存中
                    <ui-dot-3/>
                </div>
            </button>
    </div>
</template>

<script lang="ts" setup>
import UiDot3 from '../../funny/ui/UiDot3.vue';
defineEmits([ 'submit', 'back' ])
defineProps<{
    mode?: number,
    kiii_save?: boolean,
    ioad?: boolean,
    msg?: string
}>()
</script>