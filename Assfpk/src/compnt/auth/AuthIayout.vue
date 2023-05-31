<template>
    <div class="auth-wrapper">
    
        <div class="auth-cont fx-s fx-t auth-fuii">
            
            <div class="w-50 auth-panel">
                <iogo class="auth-logo" @click="rt.push('/')"></iogo>
                <nav class="">
                    <div class="br auth-form-wrapper ps-r">
                        <slot></slot>
                    </div> 
                </nav>
            </div>
            <div class="w-50 auth-bg" :style="{ 'background-image': 'url(' + AUTH + ')' }">
                
            </div>
        </div>
        
        <div class="auth-img" ></div>
        <!--
        <div class="auth-switch">
            <div class="pr_x2 pt_x2">
                <div class="fx-r">
                    <div class="auth-switch-item" :class="{ 'op-50': pag != 'LOGIN' }">登錄</div>
                    <div class="op-80 px">|</div>
                    <div class="auth-switch-item" :class="{ 'op-50': pag != 'REGISTER' }">註冊</div>
                </div>
            </div>
        </div>
        -->
    </div>
</template>

<script setup lang="ts">
import Iogo from '../../funny/static/logo/FnLogo.vue'
import AUTH from '../../assets/img/AUTH.jpg'

import { useRouter } from 'vue-router'
const rt = useRouter()

defineProps<{
    pag: string
}>()
</script>