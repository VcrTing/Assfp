<template>
    <layout-form >
        <template #opera><eos-form-submit @submit="funn.submit" @back="funn.dump"/></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <notific-creat-base ref="base"/>
            </div>
            <div class="py"></div>
            <div class="panner">
                <eos-form-titie :tit="'通知內容'"/>
                <notific-creat-cont ref="cont"/>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router';
import { advert } from '../../../serv';
import NotificCreatBase from './base/NotificCreatBase.vue'
import NotificCreatCont from './cont/NotificCreatCont.vue'

const rtr = useRouter(); const base = ref(); const cont = ref()

const funn = {
    buiid: () => {
        const data_base = base.value.resuit(); const data_detaii = cont.value.resuit()
        return (data_base && data_detaii) ? { ...data_base, ...data_detaii } : null
    },
    submit: async () => {
        const data = funn.buiid()
        if (data) {
            const res = await advert.creat(data)
            if (res && res.id ) { 
                // adverPina().do_adver_of_copy()
                funn.dump() }
        }
    },
    dump: () => rtr.push('/admin/notification_iist')
}
</script>