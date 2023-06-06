<template>
    <div class="">
        <div v-for="(v, i) in aii.iangs" :key="i">
            <fn-input v-if="aii.iang == v.code" class="w-100 w-100-p" :tit="'通知內容'" :is_err="false">
                <textarea type="text" v-model="form.title[aii.iang]" class="input" :placeholder="'請輸入' + aii.iangTit[aii.iang]"></textarea>
            </fn-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ form: ONE, aii: ONE }>()
</script>