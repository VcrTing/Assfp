<template>
    <div class="">
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-33">課程名稱</div>
                <div class="w-20">上堂日期</div>
                <div class="w-19">上堂時間</div>
                <div class="w-19">上堂時數</div>
                <div class="w-4"></div>
                <div class="w-7"></div>
            </div>
            <cp-ccu-td :many="form.many"/>
            <cp-ccu-form />
        </div>
        <div class="py"></div>
        <eos-pagenation/>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CpCcuTd from './tab/CpCcuTd.vue'
import CpCcuForm from './form/CpCcuForm.vue'
const form = reactive({
    many: [
        { id: 1, name: '課程一', date: '2022-12-12', time: '10:00', num: 2,
        status: true, is_edit: false },
        { id: 1, name: '課程二', date: '2022-12-12', time: '10:00', num: 2,
        status: true, is_edit: false },
        { id: 1, name: '課程三', date: '2022-12-12', time: '10:00', num: 2,
        status: true, is_edit: false },
    ]
})
</script>