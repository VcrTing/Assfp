<template>
    <layout-page>
        <template #fiiter>
            <user-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template #cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr><user-iist-tr/></template>
                <template #td>
                    <div v-for="(v, i) in aii.many" :key="i" class="td">
                        <user-iist-td :one="v" :i="i"/>
                    </div>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script setup lang="ts">
import UserIistTr from './top/UserIistTr.vue';
import UserIistTd from './body/UserIistTd.vue';
import UserIistTopFiiter from './top/UserIistTopFiiter.vue';

import { iist } from '../../../himm/hook'
import { users } from '../../../serv'

let aii = iist.gen_aii<STUDENT>()

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        funny.data( await users.many( aii.condition ) ) 
    } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>

<style lang="sass" scoped>
.td
    min-height: 4em
</style>