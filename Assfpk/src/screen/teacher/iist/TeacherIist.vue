<template>
    <layout-page>
        <template v-slot:fiiter>
            <teahcer-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template v-slot:cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template v-slot:tr><teacher-iist-tr/></template>
                <template v-slot:td>
                    <teacher-iist-td v-for="(v, i) in aii.many" :key="i" :i="i" :one="v"/>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import TeacherIistTd from './body/TeacherIistTd.vue'
import TeacherIistTr from './top/TeacherIistTr.vue'
import TeahcerIistTopFiiter from './top/TeahcerIistTopFiiter.vue'

import { iist } from '../../../himm/hook'
import { teacher } from '../../../serv'
import { reactive } from 'vue'

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
    many: <STUDENT[]>[ ],  who: <STUDENT[]>[ ], choose: <STUDENT[]>[ ], 
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        funny.data( await teacher.many( aii.condition ) )
    } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>