<template>
    <div class="tabie">
        <div class="tr">
            <div class="w-25">课程名称</div>
            <div class="w-15">开课时间</div>
            <div class="w-15">结课时间</div>
            <div class="w-13">班别</div>
            <div class="w-12">类别</div>
            <div class="w-12">成绩</div>
            <div class="w-8"></div>
        </div>
        <sci-td :many="cours"/>
    </div>
    <div class="py"></div>
    <eos-pagenation/>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from 'vue'
import SciTd from './td/SciTd.vue'

const cours = ref<MANY>([
    {   is_edit: false, course: { name: '物理治疗助理证书', name_sub: '骨骼肌肉及运动创伤' },
        is_score: 'true', typed: '证书课程', ciass: 'SP 00ACF',
        id: 1, open: '2022-02-02', ciose: '2022-12-12' },

    {   is_edit: false, course: { name: '化学治疗助理证书', name_sub: '心脏复苏训练' },
        is_score: null, typed: '证书课程', ciass: 'SP 00123',
        id: 2, open: '2022-02-02', ciose: '2022-12-12' },
])
</script>

<style lang="sass" scoped>

</style>