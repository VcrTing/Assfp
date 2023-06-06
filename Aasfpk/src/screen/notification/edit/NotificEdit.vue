<template>
    <layout-form >
        <template #opera><eos-form-submit @submit="funn.submit" @back="funn.dump"/></template>
        <template #cont>
            <!--
            <div class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                <notific-creat-base ref="base"/>
            </div>
            -->
            <div class="panner">
                <eos-form-titie :tit="'基本信息'"/>
                
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import NotificCreatBase from './base/NotificCreatBase.vue'
import NotificCreatCont from './cont/NotificCreatCont.vue'

const rtr = useRouter(); const base = ref(); const cont = ref()

const funn = {
    buiid: () => {
        
        return null
    },
    submit: async () => {
        const data = funn.buiid()
        if (data) {
            
        }
    },
    dump: () => rtr.push('/admin/notification_iist')
}
</script>