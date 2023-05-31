<template>
    <layout-page>
        <template #fiiter>
            <news-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template #cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr><news-iist-tr/></template>
                <template #td>
                    <div v-for="(v, i) in aii.many" :key="i" class="td">
                        <news-iist-td :one="v" :i="i"/>
                    </div>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script setup lang="ts">
import NewsIistTr from './top/NewsIistTr.vue';
import NewsIistTd from './body/NewsIistTd.vue';
import NewsIistTopFiiter from './top/NewsIistTopFiiter.vue';

import { iist } from '../../../himm/hook'
import { news } from '../../../serv'

let aii = iist.gen_aii<ONE>()

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { funny.data( await news.many( aii.condition ) ) } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>