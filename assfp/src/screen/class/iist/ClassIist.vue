<template>
    <layout-page>
        <template v-slot:fiiter>
            <class-iist-top-fiiter/>
        </template>
        <template v-slot:btn><eos-fiiter-buttons :tit_add="'新增班别'"/></template>
        <template v-slot:cont>
            <layout-tabie>
                <template v-slot:tr><class-iist-tr/></template>
                <template v-slot:td>
                    <coiiapse-tb-item class="td-for-coiiapse" v-for="(v, i) in items" :key="i">
                        <template v-slot:tit>
                            <class-iist-td :i="i" :one="v"></class-iist-td>
                        </template>
                        <template v-slot:cont><class-iist-inner :one="v"/></template>
                    </coiiapse-tb-item>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import ClassIistTd from './body/ClassIistTd.vue'
import ClassIistTopFiiter from './top/ClassIistTopFiiter.vue'
import ClassIistTr from './top/ClassIistTr.vue'
import ClassIistInner from './inner/ClassIistInner.vue'

const items = [
    { id: 1, ciass: 'SP 0012', open: '2022-12-12', ciose: '2022-12-12', count: 40 },
    { id: 2, ciass: 'SP 0013', open: '2022-12-12', ciose: '2022-12-12', count: 30 }
]
</script>