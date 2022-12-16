<template>
    <div class="">
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-14">賬戶名稱</div>
                <div class="w-17">展示名稱</div>
                <div class="w-19">電話號碼</div>
                <div class="w-21">郵箱</div>
                <div class="w-14">ID card No.</div>
                <div class="w-10">狀態</div>
                <div class="w-7"></div>
            </div>
            <cp-ccs-td :many="form.many"/>
            <cp-ccs-form/>
        </div>
        <div class="py"></div>
        <eos-pagenation/>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CpCcsTd from './tab/CpCcsTd.vue'
import CpCcsForm from './form/CpCcsForm.vue';
const form = reactive({
    many: [
        { id: 1, name: 'Z3435 1231', display_name: 'Hsasjyiuy Ask',
        phone: '92779624', phone_prefix: '852', email: 'vcrting@123.com', 
        status: true, is_edit: false, id_card_no: 'S900012313' },
        { id: 1, name: 'Z3435 1231', display_name: 'Hsasjyiuy Ask',
        phone: '92779624', phone_prefix: '852', email: 'vcrting@123.com', 
        status: true, is_edit: false, id_card_no: 'S900012313' },
        { id: 1, name: 'Z3435 1231', display_name: 'Hsasjyiuy Ask',
        phone: '92779624', phone_prefix: '852', email: 'vcrting@123.com', 
        status: true, is_edit: false, id_card_no: 'S900012313' },
    ]
})
</script>