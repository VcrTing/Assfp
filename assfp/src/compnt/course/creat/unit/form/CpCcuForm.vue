<template>
    <div class="pt">
        <div class="td-of-form px-0">
            <div class="w-33">
                <fn-input :is_err="form_err.name">
                    <input class="input" v-model="form.name" placeholder="課程名稱"/>
                </fn-input>
            </div>
            <div class="w-20">
                <fn-input :is_err="form_err.date">
                    <eos-time-choise class="input"/>
                </fn-input>
            </div>
            <div class="w-19">
                <fn-input :is_err="form_err.time">
                    <fn-select class="input" :def="choise.time[0].v" :items="choise.time"/>
                </fn-input>
            </div>
            <div class="w-19">
                <fn-input :is_err="form_err.num">
                    <input class="input" v-model="form.num" placeholder="上堂時數"/>
                </fn-input>
            </div>
            <div class="w-4"></div>
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
    time: [
        { txt: '09: 00', v: 9 },
        { txt: '10: 00', v: 10 },
        { txt: '11: 00', v: 11 },
    ]
})
const form = reactive(
    { name: '', date: '', time: '', num: 2 },
)
const form_err = reactive(
    { name: false, date: false, time: false, num: false },
)
</script>