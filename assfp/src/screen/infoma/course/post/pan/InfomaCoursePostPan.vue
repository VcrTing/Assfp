<template>
    <div>
        <eos-post-txt-item :tit="'类别'">
            广告
        </eos-post-txt-item>
        <eos-post-txt-item :tit="'推送课程编号'">
            SP 001
        </eos-post-txt-item>
        <div class="py"></div>
        <eos-post-txt-item :tit="'发送内容'">
            学院教授们，中午来教堂集合。
        </eos-post-txt-item>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
</script>