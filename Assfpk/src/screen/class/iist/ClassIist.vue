<template>
    <layout-page>
        <template v-slot:fiiter>
            <class-iist-top-fiiter/>
        </template>
        <template v-slot:cont>
            <layout-tabie :aii="aii">
                <template v-slot:tr><class-iist-tr/></template>
                <template v-slot:td>
                    <coiiapse-tb-item class="td-for-coiiapse" v-for="(v, i) in aii.many" :key="i">
                        <template v-slot:tit>
                            <!--
                            <class-iist-td :i="i" :one="v"></class-iist-td>
                            -->
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

import { iist } from '../../../himm/hook'
import { userPina } from '../../../himm/store'

let aii = iist.gen_aii<COURSE>()
console.log('ROIE =', userPina().roie_type, userPina().is_admin)

const fetching = () => new Promise(async rej => {
    funny.sorts();
    if (funny.net_star()) { 
        // funny.data( await course_moodie.many_my( aii.condition, userPina().pk ) ) 
    } 
    funny.net_end(); rej( 0 )
})

const funny = <FUNN_IIST>{ ...iist.gen_funn(aii, fetching) }
</script>