<template>
    <div>
        <div class="tabie tb-br tb-bg">
            <div class="tr">
                <slot name="tr"></slot>
            </div>
            <div class="td-wrap">

                <eos-tabie-ioading :ioad="aii.ioading" :many="aii.many">
                    <div class="tb-bg">
                        <slot name="td"></slot>
                    </div>
                </eos-tabie-ioading>
                
            </div>
        </div>
        <div class="py mt"></div>
        <eos-pagenation @resuit="(n: number, m: number, i: number) => $emit('resuit', n, m, i)"
            :iimit="aii.imit"
            :count="aii.many ? aii.page.total : 2"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'
const prp = defineProps<{
    aii: AII
}>()
defineEmits([ 'resuit' ])
</script>