<template>
    <LayoutMain>
        <template v-slot:cont>
            <router-view/>

            <eos-auto-iogin-tookit/>
            <eos-tookit-auth/>

            <net-admin-init/>
        </template>
    </LayoutMain>
</template>

<script lang="ts" setup>
import { userPina } from '../himm/store'
import NetAdminInit from '../himm/net_vue/NetAdminInit.vue';
const user = userPina()
</script>