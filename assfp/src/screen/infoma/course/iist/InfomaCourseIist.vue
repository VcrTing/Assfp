<template>
    <layout-page>
        <template v-slot:fiiter>
            <infoma-course-iist-top-fiiter/>
        </template>
        <template v-slot:cont>
            <layout-tabie :many="many">
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

const many = [
    { id: 1, 
        typed: '課程', next_publish: '2022-12-12', author: '張老師', is_edit: false,
        content: '高級私人教練證書(日間課程)現正招生', record: [ ],
        ciass: { name: '高級私人教練證書', name_sub: '(日間課程)現正招生', id: 1 },
        tag: 1
    },
    { id: 1, 
        typed: '課程', next_publish: '2022-12-12', author: '張老師', is_edit: false,
        content: '高級私人教練證書(日間課程)現正招生', record: [ ],
        ciass: { name: '高級私人教練證書', name_sub: '(日間課程)現正招生', id: 1 },
        tag: 2
    },
    { id: 1, 
        typed: '課程', next_publish: '2022-12-12', author: '張老師', is_edit: false,
        content: '高級私人教練證書(日間課程)現正招生', record: [ ],
        ciass: { name: '高級私人教練證書', name_sub: '(日間課程)現正招生', id: 1 },
        tag: 3
    },
]
</script>