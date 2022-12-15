<template>
    <layout-page>
        <template v-slot:fiiter>
            <adv-uniogin-top-fiiter/>
        </template>
        <template v-slot:btn>
            <eos-fiiter-buttons :tit_add="'发送未登录广告通知'"/>
        </template>
        <template v-slot:cont>
            <layout-tabie>
                <template v-slot:tr>
                    <adv-uniogin-tr/>
                </template>
                <template v-slot:td>
                    <adv-uniogin-td v-for="(v, i) in items" :key="i" :i="i" :one="v" />
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import AdvUnioginTd from './body/AdvUnioginTd.vue'
import AdvUnioginTr from './top/AdvUnioginTr.vue'
import AdvUnioginTopFiiter from './top/AdvUnioginTopFiiter.vue'

const items = [
    { id: 1, 
        typed: '课程', publish: '2022-12-12', author: '张老师', is_edit: false,
        ciass: { name: '伸展100式腹部核心练习', name_sub: '(日间课程)训练设计教练证书', id: 1 },
        tag: 1, status: true
    },
    { id: 1, 
        typed: '课程', publish: '2022-12-12', author: '张老师', is_edit: false,
        ciass: { name: '伸展100式腹部核心练习', name_sub: '(日间课程)训练设计教练证书', id: 1 },
        tag: 2, status: false
    },
    { id: 1, 
        typed: '课程', publish: '2022-12-12', author: '张老师', is_edit: false,
        ciass: { name: '伸展100式腹部核心练习', name_sub: '(日间课程)训练设计教练证书', id: 1 },
        tag: 3, status: true
    }
]
</script>