<template>
    <div class="f-row">
        <div class="w-44">
            <fn-input :tit="'課程封面預覽'" class="mb">
                <div class="fx-s fx-t">
                    <div>
                        <img class="img-s" :src="form.url"/>
                    </div>
                    <div class="fx-1 pl_x2">
                        <img class="br" :src="form.url"/>
                        <!--
                            <button class="btn-pri-out btn-biock mt">上傳縮略圖</button>
                        -->
                    </div>
                </div>
            </fn-input>
        </div>
        <div class="w-6"></div>
        <div class="w-50">
            <fn-input :tit="'課程名稱'" :is_err="false" class="mb_x" :is_txt_mode="true">
                {{ form.fullname }}
            </fn-input>
            <fn-input :tit="'類別'" :is_err="false" class="mb_x" :is_txt_mode="true">
                {{ form.categoryid }}
            </fn-input>
            <fn-input :tit="'課程簡碼'" :is_err="false" class="mb_x" :is_txt_mode="true">
                {{ form.shortcode }}
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const cate = ref()

const form: ONE = reactive({
    shortcode: '',
    fullname: '', categoryid: -1, url: 'https://img1.baidu.com/it/u=868084581,1504858908&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500'
})

defineExpose({ 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ] } 
    } 
})

// const img = ref<string>('https://img2.baidu.com/it/u=1239266471,3599012891&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
                
        
</script>