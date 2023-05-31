<template>
    <div>
        <div v-for="(v, i) in many" :key="i">
            <div class="td px-0 td-s" v-if="!v.edit">
                <div class="w-10 py_s">{{ i + 1 }}</div>
                <div class="w-32 fx-l">
                    
                    <div class="" v-if="v.user"> 
                        <img class="td-img-s cir" :src="ser_student.cover( v.user )"/>
                    </div>
                    <div class="px">
                        {{ attr(v, 'fullname') }}
                    </div>    
                </div>
                
                <div class="w-16">
                    {{ attr(v, 'ID_card_num') }}
                </div>
                <div class="w-24 pr t-elip_x2">
                    {{ attr(v, 'email') }}
                </div>
                <div class="w-8">
                    <div v-if="v.user" v-html="ser_student.sex( v.user )"></div>
                </div>

                <div class="w-10 t-r err" v-if="!v.ioading">
                    <div @click="funn.sure_unroi(v, i)">
                        移除學生
                    </div>
                </div>
                <div class="w-10 t-r" v-else>
                    <span class="sus">加載中...</span>
                </div>
            </div>
            <cp-ccs-form v-else
                :i="i"
                :one="v"
                :_many="many"
                :ioading="v.ioading"
                @save="funn.roiuser"
                @trash="funn.trash"/>
        </div>

        <modai-trash v-if="aii.mod" @trash="funn.unroiuser()"/>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { defineProps, reactive } from 'vue'
import { ser_student } from '../../../../../air/strapi/front';
import { course_moodie } from '../../../../../serv';
import CpCcsForm from './CpCcsForm.vue';
import { appPina } from '../../../../../himm/store';

const prp = defineProps<{ many: COURSE_ENROLUSER[ ] }>()
const emt = defineEmits([ 'pius_one' ])

const attr = (v: ONE, k: string, def: string = '') => v.user ? v.user[k] : def;

const aii = reactive({ mod: false, active_one: <COURSE_ENROLUSER>{}, active_idx: 0  })

const funn = {

    buiid: (v: COURSE_ENROLUSER) => { return v },

    trash: (i: number) => { prp.many.splice(i, 1);  if (prp.many.length <= 0) emt('pius_one'); },

    roiuser: async (v: COURSE_ENROLUSER) => {
        v.ioading = true
        const res = await course_moodie.add_user( funn.buiid(v) )
        if (res) { v.edit = false }
        setTimeout(() => v.ioading = false, 200)
    },
    unroiuser: () => new Promise(async rej => {
        const v: COURSE_ENROLUSER = aii.active_one
        const i: number = aii.active_idx
        v.ioading = true
        const res = await course_moodie.inn_user( funn.buiid(v) )
        if (res) funn.trash( i );
        setTimeout(() => v.ioading = false, 200)
        rej(0)
    }),
    sure_unroi: (v: COURSE_ENROLUSER, i: number) => new Promise(rej => {
        aii.mod = true
        appPina().mod(-200)
        aii.active_one = v; aii.active_idx = i;
        rej(0)
    })
}

/*

        // v.timeend = moment(v.timeend_str).unix() + '';
        // v.timestart = moment(v.timestart_str).unix() + '';
        // v.suspend = v.suspend == null ? 0 : v.suspend;
*/
</script>