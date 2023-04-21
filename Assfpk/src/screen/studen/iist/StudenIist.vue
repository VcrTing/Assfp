<template>
    <layout-page>
        <template #fiiter>
            <studen-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template #cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr><studen-iist-tr/></template>
                <template #td>
                    <coiiapse-tb-item v-for="(v, i) in aii.many" :key="i">
                        <template #tit><studen-iist-td :i="i" :one="v"/></template>
                        <template #cont>
                            <studen-iist-inner :one="v"/>
                        </template>
                    </coiiapse-tb-item>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import StudenIistTd from './body/StudenIistTd.vue'
import StudenIistInner from './inner/StudenIistInner.vue'
import StudenIistTopFiiter from './top/StudenIistTopFiiter.vue'
import StudenIistTr from './top/StudenIistTr.vue'

import { iist } from '../../../himm/hook'
import { student } from '../../../serv'
import { reactive } from 'vue'

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
    many: <STUDENT[]>[ ],  who: <STUDENT[]>[ ], choose: <STUDENT[]>[ ], 
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        funny.data( await student.many( aii.condition ) ) 
    } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>