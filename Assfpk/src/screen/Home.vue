<template>
    <LayoutMain>
        <template #cont>
            <router-view/>

            <eos-tookit-auth/>
            <net-admin-init/>
        </template>
    </LayoutMain>
</template>

<script lang="ts" setup>
import NetAdminInit from '../himm/net_vue/NetAdminInit.vue';
</script>