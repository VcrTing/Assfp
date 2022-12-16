<template>
    <div>
        <eos-post-txt-item :tit="'類別'">
            廣告
        </eos-post-txt-item>
        <eos-post-txt-item :tit="'推送課程編號'">
            SP 001
        </eos-post-txt-item>
        <div class="py"></div>
        <eos-post-txt-item :tit="'發送內容'">
            學院教授們，中午來教堂集合。
        </eos-post-txt-item>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
</script>