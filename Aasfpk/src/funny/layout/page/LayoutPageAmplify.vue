<template>
    <div class="iayout-page-form iayout-page-amplify" id="page_ampiify">
        <div class="fx-s pb">
            <fn-page-header></fn-page-header>
            <slot name="opera"></slot>
        </div>
        <hr class="hr-deep"/>
        <nav class="ps-r">
            <nav>
                <slot name="top"/>
            </nav>
            <div class="ipd-cont pt upper">
                <slot name="cont"></slot>
                <br/>
            </div>

            <slot name="pan"></slot>
        </nav>
    </div>
</template>

<script setup lang="ts">
defineExpose({
    scroiiTo: (v: number|null = null) => {
        const amp = document.getElementById('page_ampiify')
        if (amp) {
            const h = v ? v : amp.clientHeight
            amp?.scrollTo({ top: h })
            console.log('滾到 =', h)
        }
    }
})
</script>