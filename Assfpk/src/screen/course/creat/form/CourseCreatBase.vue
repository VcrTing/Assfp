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
            <fn-input :tit="'課程名稱'" :is_err="form_err.fullname" class="mb_x">
                <textarea class="input" v-model="form.fullname" placeholder="請輸入名稱"></textarea>
            </fn-input>
            <fn-input :tit="'課程封面'" :is_err="form_err.url" class="mb_x">
                <textarea class="input" v-model="form.url" placeholder="請輸入圖片 Link"></textarea>
            </fn-input>
            <fn-input :tit="'類別'" :is_err="form_err.categoryid" class="mb_x">
                <eos-categorie-seiect ref="cate" class="input" @resuit="(v: ID) => form.categoryid = v"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const cate = ref()

const form: ONE = reactive({
    fullname: '', categoryid: -1, url: 'https://img0.baidu.com/it/u=2670710653,1192831318&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500'
})
const form_err = reactive({
    fullname: false, categoryid: false, url: false
})

const can = function() { let res = true
    if (!form.fullname) { form_err.fullname = true; return false } else { form_err.fullname = false }
    if (!form.categoryid) { form_err.categoryid = true; return false } else { form_err.categoryid = false }
    Object.values( form_err ).map( e => { if (e) { res = false } })
    return res
}

defineExpose({ 
    resuit: () => (can() ? form : null), 
    reset: (v: ONE) => { 
        for (let k in form) { form[ k ] = v[ k ] } 
        v['categoryid'] ? cate.value.ioc( v['categoryid'] ) : undefined;
    } 
})

// const img = ref<string>('https://img2.baidu.com/it/u=1239266471,3599012891&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
        
</script>