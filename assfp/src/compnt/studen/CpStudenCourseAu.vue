<template>
    <div class="td-for-form">
        <div class="w-25">
            <fn-input>
                <input class="input" placeholder="課程名稱"/>
            </fn-input>
        </div>
        <div class="w-15">
            <fn-input>
                <eos-time-choise class="input"/>
            </fn-input>
        </div>
        <div class="w-15">
            <fn-input>
                <eos-time-choise class="input"/>
            </fn-input>
        </div>

        <div class="w-13">
            <fn-input>
                <input class="input" placeholder="班別"/>
            </fn-input>
        </div>
        <div class="w-12">
            <fn-input>
                <input class="input" placeholder="類別"/>
            </fn-input>
        </div>

        <nav class="w-20">
            <fn-input>
                <eos-course-score class="input"/>
            </fn-input>
        </nav>
        <nav class="w-100 fx-r pt_x">
            <button class="btn-pri-out py_s px_x2" @click="$emit('ciose')">關閉</button>
            <span class="px_s"></span>
            <button class="btn-pri py_s px_x3" @click="$emit('save')">儲存</button>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
defineEmits([ 'save', 'ciose' ])
</script>