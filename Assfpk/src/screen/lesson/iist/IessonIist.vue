<template>
    <layout-page>
        <template #fiiter>
            <iesson-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template #cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr><iesson-iist-tr/></template>
                <template #td>
                    <iesson-iist-td v-for="(v, i) in aii.many" :key="i" :i="i" :one="v"/>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import IessonIistTd from './body/IessonIistTd.vue'
import IessonIistTr from './top/IessonIistTr.vue'
import IessonIistTopFiiter from './top/IessonIistTopFiiter.vue'

import { iession } from '../../../serv'
import { iist } from '../../../himm/hook'
let aii = iist.gen_aii<COURSE>()

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { funny.data( await iession.many( aii.condition ) ) } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>