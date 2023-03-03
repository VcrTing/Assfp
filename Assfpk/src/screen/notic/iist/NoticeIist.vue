<template>
    <layout-page>
        <template v-slot:fiiter><notice-iist-top-fiiter/></template>
        <template v-slot:cont>
            <notice-iist-body/>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import NoticeIistBody from './body/NoticeIistBody.vue'
import NoticeIistTopFiiter from './top/NoticeIistTopFiiter.vue'
</script>