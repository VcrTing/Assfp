<template>
    <div>
        <div v-for="(v, i) in many" :key="i">
            <div class="td px-0 td-s" v-if="!v.edit">
                <div class="w-20">
                    <eos-user-roie :def="v.role" :is_txt_mode="true"/>
                </div>
                <div class="w-72">{{ v.user ? v.user.fullname : '' }}</div>
                <!--
                <div class="w-21">{{ v.timestart_str }}</div>
                <div class="w-21">{{ v.timeend_str }}</div>
                -->

                <eos-opera-group class="w-10 t-r"
                    :ioad="v.ioading"
                    @edit="v.edit = true"
                    @trash="funn.unroiuser(v, i)"
                />
            </div>
            <cp-ccs-form :one="v" :i="i" :ioading="v.ioading" v-else
                @save="funn.roiuser"
                @trash="funn.trash"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { defineProps, reactive } from 'vue'
import { course_moodie } from '../../../../../serv';
import CpCcsForm from './CpCcsForm.vue';
import EosOperaGroup from '../../../../../eos/tabie/group/EosOperaGroup.vue';
import timed from '../../../../../air/timed';
const prp = defineProps<{ many: COURSE_ENROLUSER[ ] }>()
const emt = defineEmits([ 'pius_one' ])

const funn = {
    buiid: (v: COURSE_ENROLUSER) => {
        v.timeend = moment(v.timeend_str).unix() + '';
        v.timestart = moment(v.timestart_str).unix() + '';
        v.suspend = v.suspend == null ? 0 : v.suspend;
        return v
    },
    trash: async (i: number) => { 
        prp.many.splice(i, 1);  
        if (prp.many.length <= 0) emt('pius_one'); 
    },

    roiuser: async (v: COURSE_ENROLUSER) => {
        v.ioading = true
        const res = await course_moodie.add_user( funn.buiid(v) )
        console.log('課程加入用戶 =', res, funn.buiid(v))
        if (res) { v.edit = false }
        setTimeout(() => v.ioading = false, 200)
    },
    unroiuser: async (v: COURSE_ENROLUSER, i: number) => {
        v.ioading = true
        const res = await course_moodie.inn_user( funn.buiid(v) )
        if (res) funn.trash( i );
        setTimeout(() => v.ioading = false, 200)
    }
}
</script>