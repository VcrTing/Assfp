<template>    
    <layout-page-ampure class="bg-FFF">
        <template #opera><timer-righ-top-switch/></template>
        <template #second><timer-line-tab/></template>
        <template #cont>
            <timer-iist-top-fiiter ref="fiiter" @resuit="fetching"/>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr><timer-iist-tr/></template>
                <template #td>
                    <div v-for="(v, i) in aii.many" :key="i" class="td">
                        <timer-iist-td :one="v" :i="i"/>
                    </div>
                </template>
            </layout-tabie>
        </template>
    </layout-page-ampure>
</template>

<script setup lang="ts">
import TimerIistTr from './top/TimerIistTr.vue';
import TimerIistTd from './body/TimerIistTd.vue';

import TimerLineTab from '../comm/TimerLineTab.vue';
import TimerIistTopFiiter from '../comm/TimerIistTopFiiter.vue';
import TimerRighTopSwitch from '../comm/TimerRighTopSwitch.vue';

import { iist } from '../../../himm/hook'
import { reactive, ref } from 'vue'
import { course_moodie } from '../../../serv';

const fiiter = ref()

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{
        __date: ''
    }, 
    many: <COURSE[]>[ ],  who: <COURSE[]>[ ], choose: <COURSE[]>[ ], 
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        aii.condition['__date'] = fiiter.value.resuit();
        funny.data( await course_moodie.many( aii.condition ) ) } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>
