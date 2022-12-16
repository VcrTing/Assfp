<template>
    <div class="dropdown">
        <fn-input-fat :tit="tit">
            <div class="fx-s">
                <div class="fx-1 input fx-s">
                    <input class="fx-1" v-model="q" placeholder="請輸入要搜索的編號"/>
                    <button @click="form.open = true">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
                <span class="px_s"></span>
                <i class="bi bi-plus-circle-fill" @click="funny.pius"></i>
            </div>
        </fn-input-fat>
        <div class="drop-inner pb-0" :class="{ 'drop-inner-active': form.open }">
            <div class="btn-def w-100 cp-cson-item" v-for="(v, i) in form.many" :key="i">
                <div class="w-333">{{ v.number }}</div>
                <div class="fx-1">{{ v.name }}</div>
                <span class="err" @click="funny.choise( v )">選擇</span>
            </div>
            <div class="pt_s">
                <button class="fx-c w-100" @click="form.open = false"><i class="bi bi-x-lg"></i></button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, watch } from 'vue'
defineProps<{ tit?: string }>()

const q = ref<string>('')

const form = reactive({
    one: { }, one_id: 1, open: true,
    many: [
        { name: '課程一', number: 'SP 0001', id: 1 },
        { name: '課程二', number: 'SP 0002', id: 2 },
        { name: '課程三', number: 'SP 0003', id: 3 }
    ]
})

const funny = reactive({
    pius: () => { },
    choise: (v: ONE) => { form.one = v; q.value = v.number; form.open = false }
})

watch(q, (n, o) => {
    console.log('搜索 q =', n)
})
</script>