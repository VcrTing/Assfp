<template>
    <div class="pt">
        <div class="td-of-form px-0">
            <div class="w-14">
                <fn-input :is_err="form_err.name">
                    <input class="input" v-model="form.name" placeholder="賬戶名稱"/>
                </fn-input>
            </div>
            <div class="w-17">
                <input class="input" v-model="form.display_name" placeholder="展示名稱"/>
            </div>
            <div class="w-19">
                <eos-input-phone class="input"/>
            </div>
            <div class="w-21">
                <fn-input :is_err="form_err.email">
                    <input class="input" v-model="form.email" placeholder="郵箱"/>
                </fn-input>
            </div>
            <div class="w-14">
                <fn-input :is_err="form_err.id_card_no">
                    <input class="input" v-model="form.id_card_no" placeholder="ID card No."/>
                </fn-input>
            </div>
            <nav class="w-10">
                <fn-select class="input" :items="choise.status"/>
            </nav>
            <nav class="w-7 t-r">
                <eos-tabie-save @tap="$emit('save')"/>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineEmits, defineProps } from 'vue'
defineEmits(['save'])
const choise = reactive({
    status: [
        { txt: 'Un-Active', v: 0 },
        { txt: 'Active', v: 1 },
    ]
})
const form = reactive({
    name: '', display_name: '',
    phone: '', phone_prefix: '', email: '', 
    status: true, id_card_no: ''
})
const form_err = reactive({
    name: false, display_name: false,
    phone: false, email: false, id_card_no: false
})
</script>