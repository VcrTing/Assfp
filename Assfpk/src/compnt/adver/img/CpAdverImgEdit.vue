<template>
    <div>
        <div class="cp-adver-img-edit">
            <img class="" :src="form[ ky ]"/>
            <div class="px py">
                <button v-if="!aii.edit" @click="aii.edit = !aii.edit" class="px py_s">
                    <i class="bi bi-card-image"></i>
                    &nbsp;更改
                </button>
                <button v-else @click="aii.edit = !aii.edit" class="px py_s">
                    <i class="bi bi-card-image"></i>
                    &nbsp;儲存
                </button>
            </div>
        </div>
        <div class="expan" :class="{ 'expan-iive': aii.edit, 'expan-die': !aii.edit}">
            <div class="pt">
                <input class="w-100" v-model="form[ ky ]" placeholder="請輸入圖片 Link"/>
                <span></span>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch } from 'vue'
const prp = defineProps<{
    form: ONE, ky: string
}>()
const emt = defineEmits([ 'resuit' ])
const aii = reactive({
    edit: false,
    img: 'https://img1.baidu.com/it/u=3601772273,3243303024&fm=253&fmt=auto&app=138&f=JPEG?w=1603&h=500'
})

const sign = () => emt('resuit', aii.img)
watch(() => aii.img, (n) => sign())
</script>