<template>
    <layout-page-amplify class="bg-FFF">
        <template v-slot:opera>
            <eos-post-edit-top-buttons/>
        </template>
        <template v-slot:cont>
            <layout-post-cont :is_edit="true" :is_fixed_panner="true">
                <template v-slot:cont>
                    <eos-post-head-edit />
                    <icp-cont-edit />
                </template>
                <template v-slot:pan>
                    <icp-pan-edit/>
                    <icp-pan-send-record :many="[
                        { id: 1, number: 'SP 0001', publish: '2022-12-12' },
                        { id: 2, number: 'SP 0002', publish: '2022-12-13' }
                    ]"/>
                </template>
            </layout-post-cont>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import IcpContEdit from './cont/IcpContEdit.vue'
import IcpPanEdit from './pan/IcpPanEdit.vue'
import IcpPanSendRecord from './pan/IcpPanSendRecord.vue'

const is_creat = ref<boolean>(false)
watch(is_creat, (n, o) => console.log('is_creat =', is_creat))
</script>
