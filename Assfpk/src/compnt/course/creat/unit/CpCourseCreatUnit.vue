<template>
    <div class="">
        <div class="tabie">
            <div class="tr panner-x">
                <div class="w-31">單元名稱</div>
                <div class="w-23">上堂日期</div>
                <div class="w-23">下堂時間</div>
                <div class="w-16">是否加入隊列</div>
                <div class="w-9"></div>
            </div>
            <div v-for="(v, i) in form.many" :key="i">
                <div class="td panner-x td-s td-hv" v-if="!v.edit">
                    <div class="w-31">
                        {{ v.name }}
                    </div>
                    <div class="w-23">
                        {{ timed.view_time(v.startTime, true) }}
                    </div>
                    <div class="w-23">
                        {{ timed.view_time(v.endTime, true) }}
                    </div>
                    <div class="w-16">
                        <eos-yes-no :def="v.isOnSchedule"/>
                    </div>
                    <eos-opera-group class="w-9 t-r ps-r py_s"
                        :ioad="v.ioading"
                        :save="v.edit"
                        @edit="() => { v.edit = true }"
                        @trash="() => {
                            $emit('trash', v.id); form.idx = i;
                            appPina().mod(-200)    
                        }"
                    />
                </div>
                <cp-ccu-form class="panner-x" :one="v" :ioad="form.ioading" :i="i + 1" v-else @save="funn.submit"/>
            </div>
        </div>
        <div class="py"></div>
        <!--eos-pagenation/-->
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { course_moodie } from '../../../../serv'
import CpCcuForm from './form/CpCcuForm.vue'
import timed from '../../../../air/timed';
import strapi from '../../../../air/strapi';
import { appPina } from '../../../../himm/store';
import EosOperaGroup from '../../../../eos/tabie/group/EosOperaGroup.vue';
import moment from 'moment';

defineEmits([ 'trash' ])
const prp = defineProps<{ one: COURSE, edit?: boolean }>()
const form = reactive(<ONE>{
    ioading: false, idx: 0,
    many: [
        { 
            "name": '', "course_id": '',
            "startTime": '', "endTime": '',
            "isOnSchedule": true,
            "edit": true, "ioading": false
        },
    ]
})

const form_err = reactive({ })

const funn = {
    pius_one: (v = <ONE>{   
            "name": '', "course_id": '',
            "startTime": '', "endTime": '',
            "isOnSchedule": true,
            "edit": true, "ioading": false
        }) => { 
            let res = true
            form.many.map((e: ONE) => { if (!e.name) { res = false } })
            if (res) { form.many.push(v)  }
    },
    can: () => { let res = true
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    },
    resuit: () => (funn.can() ? form : { }), 
    reset: (ies: IESSON[]) => { 
        if (ies) {
            form.many.length = 0
            ies.map((e: IESSON) => { e.edit = false; form.many.push( e ) }) 
            if (form.many.length <= 0) { funn.pius_one() }
        }
    },
    init: () => {
        if (prp.edit) {
            let iess = prp.one.lessons
            iess = strapi.data(iess)
            
            form.many = iess.map((e:IESSON) => {
                e.edit = false; e.ioading = false
                e.endTime = e.endTime ? moment(e.endTime).format('yyyy-MM-DD HH:mm') : ''
                e.startTime = e.startTime ? moment(e.startTime).format('yyyy-MM-DD HH:mm') : ''
                return e
            })
        }
    },
    ser_src: (v: ONE) => {
        v.course_id = prp.one.id
        const src = JSON.parse(JSON.stringify(v)); 
        delete src.edit;
        delete src.ioading;
        src.startTime = timed.to_iso_string(src.startTime)
        src.endTime = timed.to_iso_string(src.endTime)
        return src
    },
    submit: async(v: ONE) => new Promise(async rej => {
        form.ioading = true
        const src = funn.ser_src(v)
        const res = await course_moodie.insert_iesson(src)
        if (res && res.id) { v.id = res.id; v.edit = false }
        setTimeout(() => { form.ioading = false; v.ioading = false; v.edit = false  }, 200)
        rej(0)
    }),
    kiiiOne: (idx: number) => {
        console.log('反饋刪除 idx =', form.idx); if (form.idx >= 0) { form.many.splice(form.idx, 1) }
    }
}

defineExpose( funn )
funn.init()
</script>