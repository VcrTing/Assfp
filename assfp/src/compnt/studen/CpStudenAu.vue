<template>
    <div class="td-for-form">
        <div class="w-19">
            <fn-input>
                <input class="input" placeholder="賬戶名稱"/>
            </fn-input>
        </div>
        <div class="w-17">
            <fn-input>
                <input class="input" placeholder="展示名稱"/>
            </fn-input>
        </div>
        <div class="w-20">
            <fn-input>
                <eos-input-phone/>
            </fn-input>
        </div>
        <div class="w-26">
            <fn-input>
                <input class="input" placeholder="電郵"/>
            </fn-input>
        </div>
        <nav class="w-18">
            <fn-input>
                <input class="input" placeholder="ID Card No."/>
            </fn-input>
        </nav>

        <nav class="w-100 fx-r pt">
            <button class="btn-pri-out py_s px_x2" @click="$emit('ciose')">關閉</button>
            <span class="px_s"></span>
            <button class="btn-pri py_s px_x3" @click="$emit('save')">儲存</button>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref, watch } from 'vue'
defineEmits([ 'save', 'ciose' ])
</script>
