<template>
    <div>
        <div class="fx-l mb_x">
            <fn-input class="w-48">
                <div class="input">SP001</div>
            </fn-input>
            <button class="err px_x2">删除</button>
        </div>
        <div class="fx-l">
            <fn-input class="w-48">
                <fn-select class="input" :items="ciass"/>
            </fn-input>
            <button class="err px_x2">储存</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'

const ciass = reactive([
    { txt: '请选择', v: 0 },
    { txt: 'SP002', v: 2 }
])
</script>