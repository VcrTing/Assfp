<template>
    
    <div class="mt pt_s" :class="{ 'auth-msg-iive': msg, 'auth-msg-die': !msg }">
        <div class="br auth-msg-panei fx-s upper" v-if="msg" @dblclick="$emit('ciose')">
            <div class="fx-1">
                <i class="bi bi-info-circle-fill h4"></i>
                <div class="pl d-ib">{{ msg }}</div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
defineProps<{ msg: string }>()
defineEmits([ 'ciose' ])
</script>