<template>
    <div class="f-row">
        <div class="w-44">
            <fn-input :tit="'縮略圖'" class="mb">
                <div class="fx-s fx-t">
                    <div>
                        <img class="img-s" :src="img"/>
                    </div>
                    <div class="fx-1 px">
                        <img class="br" :src="img"/>
                        <button class="btn-pri-out btn-biock mt">上傳縮略圖</button>
                    </div>
                </div>
            </fn-input>
        </div>
        <div class="w-6"></div>
        <div class="w-50">
            <fn-input :tit="'課程名稱'" class="mb_x">
                <input class="input" placeholder="請輸入" />
            </fn-input>
            <!--
            <fn-input :tit="'類別'" class="mb_x">
                <input class="input" placeholder="請輸入" />
            </fn-input>
            <fn-input :tit="'原價'" class="mb_x">
                <input class="input" placeholder="請輸入" />
            </fn-input>
            <fn-input :tit="'會員價'" class="mb_x">
                <input class="input" placeholder="請輸入" />
            </fn-input>
            <fn-input :tit="'會員價'">
                <textarea class="input" placeholder="請輸入"></textarea>
            </fn-input>-->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const img = ref<string>('https://img2.baidu.com/it/u=1239266471,3599012891&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
        
</script>