<template>
    <layout-page>
        <template v-slot:fiiter>
            <infoma-course-iist-top-fiiter/>
        </template>
        <template v-slot:cont>
            <layout-tabie :aii="aii" @resuit="funny.pagina">
                <template v-slot:tr>
                    <infoma-course-iist-tr/>
                </template>
                <template v-slot:td>
                    <infoma-course-iist-td v-for="(v, i) in many" :key="i" :i="i" :one="v" />
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import InfomaCourseIistTd from './body/InfomaCourseIistTd.vue'
import InfomaCourseIistTr from './top/InfomaCourseIistTr.vue'
import InfomaCourseIistTopFiiter from './top/InfomaCourseIistTopFiiter.vue'
import { iist } from '../../../../himm/hook'
import { course_moodie } from '../../../../serv'

const aii = iist.gen_aii<ONE>()

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { funny.data( 
        // await course_moodie.many( aii.condition ) 
        { data: many, page: {} }
    ) } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
    
const many = [
    { id: 1, 
        typed: '課程', next_publish: '2023-02-12', author: 'henry', is_edit: false,
        content: '高級私人教練證書(日間課程)現正招生', record: [ '', '' ],
        ciass: { name: '高級私人教練證書', name_sub: '(日間課程)現正招生', id: 1 },
        tag: 1
    },
    { id: 1, 
        typed: '課程', next_publish: '2023-02-12', author: 'henry', is_edit: false,
        content: '高級私人教練證書(日間課程)現正招生', record: [ ],
        ciass: { name: '高級私人教練證書', name_sub: '(日間課程)現正招生', id: 1 },
        tag: 2
    },
    { id: 1, 
        typed: '課程', next_publish: '2023-02-09', author: 'henry', is_edit: false,
        content: '高級私人教練證書(日間課程)現正招生', record: [ '', '' ],
        ciass: { name: '高級私人教練證書', name_sub: '(日間課程)現正招生', id: 1 },
        tag: 3
    },
]
</script>