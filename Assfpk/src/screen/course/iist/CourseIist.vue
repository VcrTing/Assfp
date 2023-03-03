<template>
    <layout-page>
        <template v-slot:fiiter>
            <course-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template v-slot:cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template v-slot:tr><course-iist-tr/></template>
                <template v-slot:td>
                    <course-iist-td v-for="(v, i) in aii.many" :key="i" :i="i" :one="v"/>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import CourseIistTd from './body/CourseIistTd.vue'
import CourseIistTr from './top/CourseIistTr.vue'
import CourseIistTopFiiter from './top/CourseIistTopFiiter.vue'
import { course_moodie } from '../../../serv'

import { iist } from '../../../himm/hook'
import { reactive } from 'vue'

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