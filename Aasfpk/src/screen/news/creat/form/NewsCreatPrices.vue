<template>
    <div class="row_x2 fx-l">
        <fn-input class="w-50 w-50-p" :tit="'价格类型'" :is_err="false">
            <eos-post-price-typed-seiect 
                class="input"
                :def="form.course_price.price_type"
                @resuit="(n: string) => form.course_price.price_type = n"
                />
        </fn-input>
    </div>
    <div class="row_x2 fx-l mt_x2">
        <fn-input class="w-50 w-25-p" :tit="'价格'" :is_err="false">
            <input type="text" v-model="form.course_price.price" class="input" placeholder="請輸入"/>
        </fn-input>
        <fn-input class="w-50 w-25-p" :tit="'原价'" :is_err="false">
            <input type="text" v-model="form.course_price.original_price" class="input" placeholder="請輸入"/>
        </fn-input>
    </div>
</template>
    
<script lang="ts" setup>
import EosPostPriceTypedSeiect from '../../../../eos/post/seiect/EosPostPriceTypedSeiect.vue';
defineProps<{ form: ONE, aii: ONE }>()
</script>