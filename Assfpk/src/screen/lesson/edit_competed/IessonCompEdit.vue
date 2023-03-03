<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit @back="funn.dump"/></template>
        <template v-slot:cont>
            <div class="panner">
                <eos-form-titie :tit="'編輯學生'"/>
                <ice-base/>
                <div class="py"><br/></div>
            </div>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import IceBase from './base/IceBase.vue';
const rtr = useRouter()
const funn = {
    dump: () => {
        rtr.back()
    }
}
</script>