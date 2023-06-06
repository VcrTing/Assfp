<template>
    <div v-for="(item, i) in form.text" :key="i">
        <div v-for="(vai, k) in item" :key="k">
            <fn-input-fat v-if="aii.iang == k" class="w-100" :tit="'內容'" :is_err="false">
                <textarea type="text" v-model="form.text[i][k]" class="input" rows="12" :placeholder="'請輸入' + aii.iangTit[aii.iang]"></textarea>
            </fn-input-fat>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import EosPostTypedSeiect from '../../../../eos/post/seiect/EosPostTypedSeiect.vue';
defineProps<{ form: ONE, aii: ONE }>()
</script>