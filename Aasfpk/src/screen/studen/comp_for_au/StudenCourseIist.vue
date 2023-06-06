<template>
    <div class="tabie">
        <div class="tr">
            <div class="w-25">課程名稱</div>
            <div class="w-15">開課時間</div>
            <div class="w-15">結課時間</div>
            <div class="w-13">班別</div>
            <div class="w-12">類別</div>
            <div class="w-12">成績</div>
            <div class="w-8"></div>
        </div>
        <sci-td :many="cours"/>
    </div>
    <div class="py"></div>
    <eos-pagenation/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SciTd from './td/SciTd.vue'

const cours = ref<MANY>([
    {   is_edit: false, course: { name: '物理治療助理證書', name_sub: '骨骼肌肉及運動創傷' },
        is_score: 'true', typed: '證書課程', ciass: 'SP 00ACF',
        id: 1, open: '2022-02-02', ciose: '2022-12-12' },

    {   is_edit: false, course: { name: '化學治療助理證書', name_sub: '心臟復蘇訓練' },
        is_score: null, typed: '證書課程', ciass: 'SP 00123',
        id: 2, open: '2022-02-02', ciose: '2022-12-12' },
])
</script>

<style lang="sass" scoped>

</style>