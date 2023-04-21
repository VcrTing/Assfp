<template>
    <layout-form>
        <template #opera><eos-form-submit @submit="funn.submit"  @back="funn.dump" /></template>
        <template #cont>
            <nav class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <adver-creat-base ref="base"/>
            </nav>
            <div class="py"></div>
            <nav class="panner">
                <eos-form-titie :tit="'廣告內容'"/>
                <adver-creat-detaii ref="detaii"/>
            </nav>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { adverPina } from '../../../himm/store';
import { advert } from '../../../serv';
import AdverCreatBase from '../creat/form/AdverCreatBase.vue';
import AdverCreatDetaii from '../creat/form/AdverCreatDetaii.vue';

const _one = adverPina().adver_of_edit

const rtr = useRouter(); const base = ref(); const detaii = ref()
const funn = {

    init: () => {
        nextTick(() => {
            if (!_one.id) { funn.dump() } else {
                base.value.reset(_one)
                detaii.value.reset(_one)
            }
        })
    },

    buiid: () => {
        const data_base = base.value.resuit(); const data_detaii = detaii.value.resuit()
        return (data_base && data_detaii) ? { 
            id: _one.id,
            ...data_base, ...data_detaii } : null
    },
    submit: async () => {
        const data = funn.buiid()
        if (data) {
            const res = await advert.edit(data)
            if (res && res.id ) { funn.dump() }
        }
    },
    dump: () => rtr.push('/admin/adv_uniogin_iist')
}
funn.init()
</script>