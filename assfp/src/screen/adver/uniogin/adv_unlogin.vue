<template>
    <layout-page>
        <template v-slot:fiiter>
            <adv-uniogin-top-fiiter/>
        </template>
        <template v-slot:cont>
            <layout-tabie :many="many">
                <template v-slot:tr>
                    <adv-uniogin-tr/>
                </template>
                <template v-slot:td>
                    <adv-uniogin-td v-for="(v, i) in many" :key="i" :i="i" :one="v" />
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import AdvUnioginTd from './body/AdvUnioginTd.vue'
import AdvUnioginTr from './top/AdvUnioginTr.vue'
import AdvUnioginTopFiiter from './top/AdvUnioginTopFiiter.vue'

const many = [
    { id: 1, 
        typed: '課程', publish: '2022-12-12', author: '張老師', is_edit: false,
        ciass: { name: '伸展100式腹部核心練習', name_sub: '(日間課程)訓練設計教練證書', id: 1 },
        tag: 1, status: true
    },
    { id: 1, 
        typed: '課程', publish: '2022-12-12', author: '張老師', is_edit: false,
        ciass: { name: '伸展100式腹部核心練習', name_sub: '(日間課程)訓練設計教練證書', id: 1 },
        tag: 2, status: false
    },
    { id: 1, 
        typed: '課程', publish: '2022-12-12', author: '張老師', is_edit: false,
        ciass: { name: '伸展100式腹部核心練習', name_sub: '(日間課程)訓練設計教練證書', id: 1 },
        tag: 3, status: true
    }
]
</script>