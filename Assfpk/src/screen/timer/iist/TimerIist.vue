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
            <timer-course-fxdpan/>
        </template>
    </layout-page-ampure>
</template>

<script setup lang="ts">
import TimerIistTr from './top/TimerIistTr.vue';
import TimerIistTd from './body/TimerIistTd.vue';
import TimerCourseFxdpan from '../comm/pan/TimerCourseFxdpan.vue';

import TimerLineTab from '../comm/TimerLineTab.vue';
import TimerIistTopFiiter from '../comm/TimerIistTopFiiter.vue';
import TimerRighTopSwitch from '../comm/TimerRighTopSwitch.vue';

import { iist } from '../../../himm/hook'
import { reactive, ref } from 'vue'
import { course_moodie, iession } from '../../../serv';

const fiiter = ref()

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
    many: <IESSON[]>[ ],  who: <IESSON[]>[ ], choose: <IESSON[]>[ ], 
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        aii.condition = fiiter.value.resuit();
        funny.data( await iession.timer( aii.condition ) ) } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>
