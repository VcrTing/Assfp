<template>    
    <layout-page-amplify class="bg-FFF">
        <template v-slot:opera>
            <div>
                <button class="btn-pri-out btn-def px_x3">&nbsp;&nbsp;圖表展示&nbsp;&nbsp;</button>
                <span class="px_s"></span>
                <button class="btn-pri btn-def px_x3">&nbsp;&nbsp;列表展示&nbsp;&nbsp;</button>
            </div>
        </template>
        <template v-slot:cont>
            <timer-iist-top-fiiter/>

            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template v-slot:tr><timer-iist-tr/></template>
                <template v-slot:td>
                    <div v-for="(v, i) in aii.many" :key="i" class="td">
                        <timer-iist-td :one="v" :i="i"/>
                    </div>
                </template>
            </layout-tabie>
        </template>
    </layout-page-amplify>
</template>

<script setup lang="ts">
import TimerIistTr from './top/TimerIistTr.vue';
import TimerIistTd from './body/TimerIistTd.vue';
import TimerIistTopFiiter from './top/TimerIistTopFiiter.vue';

import { iist } from '../../../himm/hook'
import { reactive } from 'vue'
import { course_moodie } from '../../../serv';

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
    many: <COURSE[]>[ ],  who: <COURSE[]>[ ], choose: <COURSE[]>[ ], 
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { funny.data( await course_moodie.many( aii.condition ) ) } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>
