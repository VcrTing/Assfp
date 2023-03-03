<template>
    <div class="">
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-31">單元名稱</div>
                <div class="w-23">上堂日期</div>
                <div class="w-23">下堂時間</div>
                <div class="w-16">是否加入隊列</div>
                <div class="w-9"></div>
            </div>
            <div v-for="(v, i) in form.many" :key="i">
                <div class="td px-0 td-s" v-if="!v.is_edit">
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
                    <div class="w-9 t-r ps-r">
                        <eos-tabie-edit @tap="() => { v.is_edit = true }"/>
                        <span class="px_s"></span>
                        <eos-tabie-trash @tap="() => { }"/>
                    </div>
                </div>
                <cp-ccu-form :one="v" :ioad="form.ioading" :i="i + 1" v-else @save="funn.submit"/>
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

const prp = defineProps<{ one: COURSE }>()

const form = reactive(<ONE>{
    ioading: false,
    many: [
        { 
            "name": '',
            "course_id": '',
            "startTime": '',
            "endTime": '',
            "isOnSchedule": true,
            "is_edit": true 
        },
    ]
})

const form_err = reactive({ })

const funn = {
    pius_one: (v = <ONE>{   
            "name": '', "course_id": '',
            "startTime": '', "endTime": '',
            "isOnSchedule": true,
            "is_edit": true 
        }) => { form.many.push(v) },
    can: () => { let res = true
        // if (!form.fullname) { form_err.fullname = true; return false } else { form_err.fullname = false }
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    },
    resuit: () => (funn.can() ? form : { }), 
    reset: (ies: IESSON[]) => { 
        if (ies) {
            form.many.length = 0
            ies.map((e: IESSON) => { e.is_edit = false; form.many.push( e ) }) 
            if (form.many.length <= 0) { funn.pius_one() }
        }
    },

    submit: async(v: ONE) => { form.ioading = true
        v.course_id = prp.one.id
        const src = JSON.parse(JSON.stringify(v)); delete src.is_edit;
        const res = await course_moodie.insert_iesson(src)
        if (res && res.id) { v.id = res.id; v.is_edit = false; console.log('插入成功，新 form =', form.many) }
        setTimeout(() => form.ioading = false, 200)
    }
}

defineExpose( funn )
</script>