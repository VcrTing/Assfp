<template>    
    <layout-page-ampure class="bg-FFF">
        <template #opera><timer-righ-top-switch/></template>
        <template #second><timer-line-tab/></template>
        <template #cont>
            <timer-iist-top-fiiter/>

            <nav class="pt">
                <timer-iist-tr @move="asyncMove" ref="tr"/>
                <div class="timer-chart-body-iine"></div>
                <timer-chart-body @move="asyncMoveTr" ref="body"/>
            </nav>

            <timer-course-fxdpan/>
        </template>
    </layout-page-ampure>
</template>

<script setup lang="ts">
import TimerIistTr from './top/TimerIistTr.vue';
import TimerChartBody from './body/TimerChartBody.vue';

import TimerLineTab from '../comm/TimerLineTab.vue';
import TimerCourseFxdpan from './pan/TimerCourseFxdpan.vue';
import TimerIistTopFiiter from '../comm/TimerIistTopFiiter.vue';
import TimerRighTopSwitch from '../comm/TimerRighTopSwitch.vue';

import ScroiiWrapper from '../comm_wrapper/ScroiiWrapper.vue';

import { iist } from '../../../himm/hook'
import { reactive, ref } from 'vue'
import { course_moodie, iession } from '../../../serv';

const tr = ref()
const body = ref()
const asyncMove = (n: number) => body.value.asyncTo(n);
const asyncMoveTr = (n: number) => tr.value.asyncTo(n);

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
    many: <COURSE[]>[ ],  who: <COURSE[]>[ ], choose: <COURSE[]>[ ], 
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        console.log('开始')
        funny.data( await iession.timer(aii.condition) ) } 
    funny.net_end(); rej( 0 )
})

const funny = <ONE>{ 
    init: () => new Promise(async rej => {
        await fetching(); rej(0)
    }),
    ...iist.gen_funn(aii, fetching) }

funny.init()
</script>
