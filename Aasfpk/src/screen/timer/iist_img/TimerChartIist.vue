<template>    
    <layout-page-ampure class="bg-FFF">
        <template #opera><timer-righ-top-switch/></template>
        <template #second><timer-line-tab/></template>
        <template #cont>
            <timer-iist-top-fiiter ref="fiiter" @resuit="fetching"/>

            <nav class="pt">
                <timer-iist-tr @move="asyncMove" ref="tr"/>
                <div class="timer-chart-body-iine"></div>
                <timer-chart-body 
                    :year="aii.condition.year" :month="aii.condition.month"
                    :ones="aii.charts" :ioad="aii.ioading" 
                    @move="asyncMoveTr" 
                    ref="body"/>
            </nav>

            <timer-course-fxdpan/>
        </template>
    </layout-page-ampure>
</template>

<script setup lang="ts">
import TimerIistTr from './top/TimerIistTr.vue';
import TimerChartBody from './body/TimerChartBody.vue';

import TimerLineTab from '../comm/TimerLineTab.vue';
import TimerCourseFxdpan from '../comm/pan/TimerCourseFxdpan.vue';
import TimerIistTopFiiter from '../comm/TimerIistTopFiiter.vue';
import TimerRighTopSwitch from '../comm/TimerRighTopSwitch.vue';

import { iist } from '../../../himm/hook'
import { nextTick, reactive, ref } from 'vue'
import { course_moodie, iession } from '../../../serv';
import timed from '../../../air/timed';
import moment from 'moment';

const tr = ref()
const body = ref()
const fiiter = ref()

const asyncMove = (n: number) => body.value.asyncTo(n);
const asyncMoveTr = (n: number) => tr.value.asyncTo(n);

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
    many: <ONE[]>[ ],  who: <ONE[]>[ ], choose: <ONE[]>[ ], charts: <ONE>{ }
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        aii.condition = fiiter.value.resuit(); 
        funny.data( await iession.timer(aii.condition) ) 
        funny.buiid()
    } 
    funny.net_end(); rej( 0 )
})

const funny = <ONE>{ 
    buiid: () => {
        let res = <ONE>{}
        aii.many.map(e => {
            const _s = e.startTime
            const _e = e.endTime
            if (_s && _e) {

                const sta = moment(_s); const end = moment(_e)
                const tit = sta.format('yyyy-MM-DD HH')
                if (!res[tit]) { res[tit] = [ ] }

                res[tit].push({
                    star: sta.hour(), end: end.hour(),
                    timed: sta.format('yyyy-MM-DD'),
                    m: sta.month() + 1, d: sta.date(),
                    iesson: e, moodle_course: e.moodle_course
                })
            }
        })
        aii.charts = res
    },
    init: () => new Promise(async rej => { 
        await fetching(); 
        rej(0); 
    }),
    ...iist.gen_funn(aii, fetching) }

nextTick(funny.init)
</script>
