<template>
    <div class="f-row">
        <div class="w-48">
            <fn-input :tit="'缩略图'" class="mb">
                <div class="fx-s fx-t">
                    <div>
                        <img class="img-s" :src="img"/>
                    </div>
                    <div class="fx-1 px">
                        <img class="br" :src="img"/>
                        <button class="btn-pri-out btn-biock mt">上传缩略图</button>
                    </div>
                </div>
            </fn-input>
        </div>
        <div class="w-4"></div>
        <div class="w-48">
            <fn-input :tit="'课程名称'" class="mb_x">
                <input class="input" placeholder="请输入" />
            </fn-input>
            <fn-input :tit="'类别'" class="mb_x">
                <input class="input" placeholder="请输入" />
            </fn-input>
            <fn-input :tit="'原价'" class="mb_x">
                <input class="input" placeholder="请输入" />
            </fn-input>
            <fn-input :tit="'会员价'" class="mb_x">
                <input class="input" placeholder="请输入" />
            </fn-input>
            <fn-input :tit="'会员价'">
                <textarea class="input" placeholder="请输入"></textarea>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const img = ref<string>('https://img2.baidu.com/it/u=1239266471,3599012891&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
        
</script>