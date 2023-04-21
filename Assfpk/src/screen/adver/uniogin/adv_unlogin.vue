<template>
    <layout-page>
        <template #fiiter>
            <adv-uniogin-top-fiiter @funni="funny.funni"/>
        </template>
        <template #cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr>
                    <adv-uniogin-tr/>
                </template>
                <template #td>
                    <adv-uniogin-td v-for="(v, i) in aii.many" :key="i" :i="i" :one="v" />
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AdvUnioginTd from './body/AdvUnioginTd.vue'
import AdvUnioginTr from './top/AdvUnioginTr.vue'
import AdvUnioginTopFiiter from './top/AdvUnioginTopFiiter.vue'

import { advert } from '../../../serv'
import { iist } from '../../../himm/hook'
let aii = iist.gen_aii<ADVER>()

const iang = ref('zh_HK')

const fetching = () => new Promise(async rej => {
    funny.sorts(); // aii.condition['populate[0]'] = iang.value
    if (funny.net_star()) { funny.data( await advert.many( aii.condition ) ) } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>