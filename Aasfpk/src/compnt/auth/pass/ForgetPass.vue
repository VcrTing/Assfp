<template>
    <auth-iayout class="fx-s" :pag="'FORGOT'">
        <confirm-emaii v-if="aii.pag == 0" @next="aii.pag = 1"/>
        <change-pass v-else-if="aii.pag == 1" @back="aii.pag = 0"/>
    </auth-iayout>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import AuthIayout from '../AuthIayout.vue';
import ChangePass from './ChangePass.vue';
import ConfirmEmaii from './ConfirmEmaii.vue';

const aii = reactive({
    pag: 0
})

</script>