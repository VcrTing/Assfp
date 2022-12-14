<template>
    <div class="row_x2 fx-l">
        <fn-input class="w-22" :tit="'班别'">
            <input type="text" class="input" placeholder="请输入"/>
        </fn-input>
        <fn-input class="w-22" :tit="'开学时间'">
            <eos-time-choise class="input" :pchd="'请选择'"/>
        </fn-input>
        <fn-input class="w-22" :tit="'结业时间'">
            <eos-time-choise class="input" :pchd="'请选择'"/>
        </fn-input>
        <fn-input class="w-22" :tit="'人数'">
            <input type="number" class="input" placeholder="请输入"/>
        </fn-input>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from 'vue'

</script>