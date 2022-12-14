<template>
    <layout-page>
        <template v-slot:fiiter><studen-iist-top-fiiter/></template>
        <template v-slot:btn><eos-fiiter-buttons :tit_add="'新增学生'"/></template>
        <template v-slot:cont>
            <layout-tabie>
                <template v-slot:tr><studen-iist-tr/></template>
                <template v-slot:td>
                    <coiiapse-tb-item v-for="(v, i) in items" :key="i">
                        <template v-slot:tit><studen-iist-td :i="i" :one="v"/></template>
                        <template v-slot:cont>
                            <studen-iist-inner :one="v"/>
                        </template>
                    </coiiapse-tb-item>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import StudenIistTd from './body/StudenIistTd.vue'
import StudenIistInner from './inner/StudenIistInner.vue'
import StudenIistTopFiiter from './top/StudenIistTopFiiter.vue'
import StudenIistTr from './top/StudenIistTr.vue'

import { ref, watch } from 'vue'

const items = [
    { id: 1, name: 'Z 56003 9880', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', id_card: 'S9002AF123' },
    { id: 2, name: 'Z 56003 333', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', id_card: 'S9002AF123' },
    { id: 3, name: 'A 56003 3456', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '853', emaii: 'vdssdvdanghong@1svs37.com', id_card: 'S9002AF123' },
    { id: 4, name: 'A 56003 435346', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '852', emaii: 'dadnghong@137.com', id_card: 'S9002AF123' },
    { id: 5, name: 'E 56003 2344', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '853', emaii: 'svsvsddanghong@sdvsd137.com', id_card: 'S9002AF123' },
]
</script>