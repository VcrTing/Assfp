<template>
    <div v-for="(v, i) in aii.iangs" :key="i">
        <fn-input-fat v-if="aii.iang == v.code" class="w-100" :tit="'標題'" :is_err="false">
            <input type="text" v-model="form.title[aii.iang]" class="input" :placeholder="'請輸入' + aii.iangTit[aii.iang]"/>
        </fn-input-fat>
    </div>
    <div class="row_x2 fx-l mt_x2">
        <fn-input class="w-50 w-50-p" :tit="'下次發布日期'" :is_err="false">
            <eos-time-choise class="input" :def="form.date" @resuit="(n: string) => form.date = n"/>
        </fn-input>
    </div>
    <div class="row_x2 fx-l mt_x2">
        <fn-input class="w-50 w-50-p" :tit="'類別'" :is_err="false">
            <eos-post-typed-seiect class="input" :def="form.type" @resuit="(n: string) => form.type = n"/>
        </fn-input>
    </div>
</template>
    
<script lang="ts" setup>
import EosPostTypedSeiect from '../../../../eos/post/seiect/EosPostTypedSeiect.vue';
defineProps<{ form: ONE, aii: ONE }>()
</script>