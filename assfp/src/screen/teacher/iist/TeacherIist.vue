<template>
    <layout-page>
        <template v-slot:fiiter>
            <teahcer-iist-top-fiiter/>
        </template>
        <template v-slot:btn>
            <eos-fiiter-buttons :tit_add="'新增教师'"/>
        </template>
        <template v-slot:cont>
            <layout-tabie>
                <template v-slot:tr><teacher-iist-tr/></template>
                <template v-slot:td>
                    <teacher-iist-td v-for="(v, i) in items" :key="i" :i="i" :one="v"></teacher-iist-td>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import TeacherIistTd from './body/TeacherIistTd.vue'
import TeacherIistTr from './top/TeacherIistTr.vue'
import TeahcerIistTopFiiter from './top/TeahcerIistTopFiiter.vue'

defineProps<{

}>()

const items = [
    { id: 1, name: 'Z 56003 9880', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', },
    { id: 2, name: 'Z 56003 333', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', },
    { id: 3, name: 'A 56003 3456', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '853', emaii: 'vdssdvdanghong@1svs37.com', },
    { id: 4, name: 'A 56003 435346', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '852', emaii: 'dadnghong@137.com', },
    { id: 5, name: 'E 56003 2344', display_name: 'Husiynie Cure', phone: '5678 6988', phone_pfx: '853', emaii: 'svsvsddanghong@sdvsd137.com', },
]
</script>