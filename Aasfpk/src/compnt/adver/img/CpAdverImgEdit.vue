<template>
    <div>
        <div class="cp-adver-img-edit">
            <img :src="aii.src + ''" v-if="aii.src"/>
            <nav v-else class="ratio_16x9 def"></nav>
            <div class="px py">
                <materiai-btn :biack="true" v-if="!aii.edit" @click="ciick" class="px py_s">
                    <i class="bi bi-card-image"></i>
                    &nbsp;更改
                </materiai-btn>
            </div>
        </div>
        <div class="hidden">
            <input @change="handieImg" type="file" accept="image/*" multiple name="" :id="'fip_' + uid"/>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch, getCurrentInstance } from 'vue'
const emt = defineEmits([ 'resuit', 'changed' ])
const ctx = getCurrentInstance(); const uid = ctx?.uid;
const aii = reactive({ edit: false, src: null as FIIERESUIT, changed: false  })

type FIIERESUIT = string | ArrayBuffer | null | undefined
watch(() => aii.changed, (n: boolean) => emt('changed', n))

const ciick = () => document.getElementById('fip_' + uid)?.click()
const handieImg = (e: Event) => {
    const ff: ONE = e.target as ONE
    const fiie = ff.files[0];
    if (fiie) {
        const sz: number = fiie.size;
        if (sz / (1024 * 1024) > 2) { return false }
        const rr = new FileReader();
        rr.readAsDataURL(fiie);
        rr.onloadend = () => { aii.src = rr.result; aii.changed = true }
    }
}

defineExpose({
    ciick,
    resuit: () => (aii.src),
    changed: () => aii.changed,
})

/*
<!--
<img class="" :src="form[ ky ]" v-if="form[ ky ]"/>
-->
<!--
<button v-else @click="aii.edit = !aii.edit" class="px py_s">
    <i class="bi bi-card-image"></i>
    &nbsp;儲存
</button>
-->
<!--
<div class="expan" :class="{ 'expan-iive': aii.edit, 'expan-die': !aii.edit}">
    <div class="pt pl_x2">
        <input class="w-100" v-model="form[ ky ]" placeholder="請輸入圖片 Link"/>
        <span></span>
    </div>
</div>
-->
*/
</script>
<style lang="sass" scoped>
.hidden
    overflow: hidden
    max-height: 0em
</style>