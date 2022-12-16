<template>
    <layout-page>
        <template v-slot:fiiter><user-iist-top-fiiter/></template>
        <template v-slot:cont>
            <layout-tabie :many="many">
                <template v-slot:tr><user-iist-tr/></template>
                <template v-slot:td>
                    <div v-for="(v, i) in many" :key="i" class="td">
                        <user-iist-td :one="v" :i="i"/>
                    </div>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script setup lang="ts">
import UserIistTr from './top/UserIistTr.vue';
import UserIistTd from './body/UserIistTd.vue';
import UserIistTopFiiter from './top/UserIistTopFiiter.vue';

const many = [
    { id: 1, name: 'Z 56003 9880', display_name: 'Husiynie Cure', 
    phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', occupation: 'Administrator' },
    { id: 1, name: 'Z 56003 9880', display_name: 'Husiynie Cure', 
    phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', occupation: 'Administrator' },
    { id: 1, name: 'Z 56003 9880', display_name: 'Husiynie Cure', 
    phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', occupation: 'Administrator' },
]
</script>

<style lang="sass" scoped>
.td
    min-height: 5em
</style>