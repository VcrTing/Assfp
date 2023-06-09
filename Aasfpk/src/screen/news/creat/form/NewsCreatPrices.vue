<template>
    <div class="row_x2 fx-l">
        <fn-input-fat class="w-65" :tit="'原价'" :need="true" :is_err="form_err_price.original_price">
            <input type="number" v-model="form.course_price.original_price" @blur="funn.necessary" class="input" placeholder="請輸入"/>
        </fn-input-fat>
    </div>
    <div class="row_x2 fx-l mt_x2">
        <div class="w-65">
            <div class="fx-l pb_s">
                <h4><input type="radio" class="hand" name="priceType" value="reduced_price" id="reduced_price" v-model="form.course_price.price_type"/>
                    <label for="reduced_price" class="hand">&nbsp;現價</label></h4>
                <div class="px"></div>
                <h4><input type="radio" name="priceType" value="member_price" id="member_price" v-model="form.course_price.price_type"/>
                    <label for="member_price" class="hand">&nbsp;會員價</label>
                    <div class="err d-ib pl_x1 fs_s">*</div>    
                </h4>
            </div>
            <fn-input :is_err="form_err_price.price">
                <input type="number" v-model="form.course_price.price" @blur="funn.necessary" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch, watchEffect } from 'vue';
import EosPostPriceTypedSeiect from '../../../../eos/post/seiect/EosPostPriceTypedSeiect.vue';
import { edit } from '../../../../himm/hook';
const me = reactive({ showErr: false })
const prp = defineProps<{ form: ONE, aii: ONE }>()
const form_err_price = reactive(edit.gen_form_err(prp.form.course_price))

const funn = {
    necessary: () => { if (me.showErr) { funn.can() } },
    _can: () => {
        const src = prp.form.course_price
        if (!src.original_price) {
            form_err_price.original_price = true; return false
        } else { form_err_price.original_price = false }
        if (!src.price) {
            form_err_price.price = true; return false
        } else { form_err_price.price = false }
        return true
    },
    can: () => { me.showErr = true; return funn._can() }
}
defineExpose(funn)
/*
const me = reactive({
    is_vip: 'false',
    vips: <ONE>{
        'true': 'member_price',
        'false': 'reduced_price'
    },
    r: <ONE> {
        'member_price': 'true',
        'reduced_price': 'false'
    }
})
const funn = {
    init: () => {
        if (prp.form.course_price && prp.form.course_price.price_type) { me.is_vip = me.r[ prp.form.course_price.price_type ] }
        // nextTick(watchEffect(funn.ioc))
    },
    ioc: () => {
        prp.form.course_price.price_type = me.vips[ me.is_vip + '' ]
        console.log(prp.form.course_price)
    }
}
// funn.init()

        <!--
        <div class="w-50">
            <div>
                &nbsp;
            </div>
            <div class="fx-l">
                <input class="hand" type="checkbox" value="true" id="memberPrice" v-model="me.is_vip"/>
                <label class="pl_n hand" for="memberPrice">是否會員價？</label>
            </div>
        </div>
        -->
*/ 
</script>