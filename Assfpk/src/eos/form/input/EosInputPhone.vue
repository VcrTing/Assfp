<template>
    <div class="eos-ip-phone">
        <select v-model="pfx">
            <option v-for="(v, i) in pfxs" :key="i" :value="v.v">{{ v.txt }}</option>
        </select>
        <input v-model="phe" type="text" placeholder="電話號碼"/>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const phe = ref<string | null>()    
const pfx = ref('852')    
watch(phe, (n, o) => console.log('電話號碼為 =', pfx, n))
const pfxs = [
    { txt: '香港', v: '852' },
    { txt: '澳門', v: '853' }
]
</script>