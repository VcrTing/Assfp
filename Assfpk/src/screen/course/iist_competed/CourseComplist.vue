<template>
    <layout-page>
        <template #fiiter>
            <course-iist-top-fiiter 
                @funni="funny.funni"
                @funni_uid="(n) => {
                    aii.userId = n;
                    fetching()
                }"
                />
        </template>
        <template #cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template #tr><course-iist-tr/></template>
                <template #td>
                    <course-iist-td 
                        v-for="(v, i) in aii.many" 
                        :key="i" :i="i" 
                        :one="v.__course"
                        :emaii="v.username"/>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import CourseIistTd from './body/CourseIistTd.vue'
import CourseIistTr from './top/CourseIistTr.vue'
import CourseIistTopFiiter from './top/CourseIistTopFiiter.vue'
import { course_finish, course_moodie } from '../../../serv'

import { iist } from '../../../himm/hook'
import { reactive } from 'vue'
import strapi from '../../../air/strapi'

let aii = reactive({
    ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
    many: <MANY>[ ],  who: <MANY>[ ], choose: <MANY>[ ], 
    userId: 1235
})

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        funny.data( await course_finish.many_my( aii.condition, aii.userId + '' ), ser_many );
    } 
    funny.net_end(); rej( 0 )
})

const ser_many = (my: MANY) => {
    my.map((e: ONE) => {
        const src = e.moodle_course ? strapi.data( e.moodle_course ) : { }
        e.__course = src ? src as COURSE : { } as COURSE
        return e
    })
}

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>