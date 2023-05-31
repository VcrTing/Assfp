<template>
    <layout-page>
        <template #fiiter>
            <notification-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template #cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr><notification-iist-tr/></template>
                <template #td>
                    <div v-for="(v, i) in aii.many" :key="i" class="td">
                        <notification-iist-td :one="v" :i="i"/>
                    </div>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script setup lang="ts">
import NotificationIistTr from './top/NotificationIistTr.vue';
import NotificationIistTd from './body/NotificationIistTd.vue';
import NotificationIistTopFiiter from './top/NotificationIistTopFiiter.vue';

import { iist } from '../../../himm/hook'
import { notific } from '../../../serv'

let aii = iist.gen_aii<ONE>()

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        funny.data( await notific.many( aii.condition ) ) 
    } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>

<style lang="sass" scoped>
.td
    min-height: 5em
</style>