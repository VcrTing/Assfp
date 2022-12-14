<template>
    <layout-page>
        <template v-slot:fiiter>
            <infoma-course-iist-top-fiiter/>
        </template>
        <template v-slot:btn>
            <eos-fiiter-buttons :tit_add="'发送通知及记录'"/>
        </template>
        <template v-slot:cont>
            <layout-tabie>
                <template v-slot:tr>
                    <infoma-course-iist-tr/>
                </template>
                <template v-slot:td>
                    <infoma-course-iist-td v-for="(v, i) in items" :key="i" :i="i" :one="v" />
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import InfomaCourseIistTd from './body/InfomaCourseIistTd.vue'
import InfomaCourseIistTr from './top/InfomaCourseIistTr.vue'
import InfomaCourseIistTopFiiter from './top/InfomaCourseIistTopFiiter.vue'

const items = [
    { id: 1, 
        typed: '课程', next_publish: '2022-12-12', author: '张老师', is_edit: false,
        content: '高级私人教练证书(日间课程)现正招生', record: [ ],
        ciass: { name: '高级私人教练证书', name_sub: '(日间课程)现正招生', id: 1 },
        tag: 1
    },
    { id: 1, 
        typed: '课程', next_publish: '2022-12-12', author: '张老师', is_edit: false,
        content: '高级私人教练证书(日间课程)现正招生', record: [ ],
        ciass: { name: '高级私人教练证书', name_sub: '(日间课程)现正招生', id: 1 },
        tag: 2
    },
    { id: 1, 
        typed: '课程', next_publish: '2022-12-12', author: '张老师', is_edit: false,
        content: '高级私人教练证书(日间课程)现正招生', record: [ ],
        ciass: { name: '高级私人教练证书', name_sub: '(日间课程)现正招生', id: 1 },
        tag: 3
    },
]
</script>