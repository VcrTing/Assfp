<template>
    <div>
        <div v-for="(v, i) in many" :key="i">
            <div class="td px-0 td-s" v-if="!v.is_edit">
                <div class="w-16">
                    <eos-user-roie :def="v.role" :is_txt_mode="true"/>
                </div>
                <div class="w-36">{{ v.user ? v.user.fullname : '' }}</div>
                <div class="w-20">{{ v.timestart_str }}</div>
                <div class="w-20">{{ v.timeend_str }}</div>

                <div class="w-10 t-r" v-if="!v.ioading">
                    <eos-tabie-edit @tap="() => { v.is_edit = true }"/>
                    <span class="px_s"></span>
                    <eos-tabie-trash @tap="funn.unroiuser(v, i)"/>
                </div>
                <div class="w-10 t-r" v-else>
                    <span class="sus">加載中...</span>
                </div>
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
    trash: (i: number) => { prp.many.splice(i, 1);  if (prp.many.length <= 0) emt('pius_one'); },

    roiuser: async (v: COURSE_ENROLUSER) => {
        v.ioading = true
        const res = await course_moodie.add_user( funn.buiid(v) )
        if (res) { v.is_edit = false }
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