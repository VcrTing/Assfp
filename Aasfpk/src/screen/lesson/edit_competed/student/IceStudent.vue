<template>
    <div>
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-8">序號</div>
                <div class="w-32">參加單元的學生</div>
                <div class="w-30">郵箱地址</div>
                <div class="w-15">Adsent</div>
                <div class="w-15">單元結果</div>
            </div>
            <div v-if="form.many && form.many.length > 0">
                <div class="td px-0" v-for="(v, i) in form.many" :key="i">
                    <div class="w-8">{{ i + 1 }}</div>
                    <div class="w-32">{{ v.student.fullname }}</div>
                    <div class="w-30">{{ v.student.email }}</div>
                    <div class="w-15 pr">
                        <eos-iesson-absent class="input" :def="v.absent" @resuit="(n: string) => funn.changeAbs(v, n)"/>
                    </div>
                    <div class="w-15">
                        <eos-iesson-resuit class="input" :need_nuii="false" :def="v.result" @change="(n: string) => funn.changeRes(v, n)"/>
                    </div>
                </div>
            </div>
            <div v-else>
                <eos-empty/>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import strapi from '../../../../air/strapi'
import EosEmpty from '../../../../eos/tabie/EosEmpty.vue'
import EosIessonAbsent from '../../../../eos/status/iesson/EosIessonAbsent.vue'
import EosIessonResuit from '../../../../eos/status/EosIessonResuit.vue'
import { iession_compieted } from '../../../../serv'
const prp = defineProps<{ one: COURSE, iesson: IESSON | ONE }>()

const form = reactive({
    many: <MANY>[ ]
})
const funn = {
    pius_one: (student: ONE, absent: boolean, result: string) => {
        const _one = { student, student_id: student.id, absent, result }
        form.many.push(_one)
    },
    ioc: (one: COURSE) => {
        const data: ONE = one ? one.student : { }
        const stus: MANY = data.data ? strapi.data(data) : [ ]
        if (stus.length > 0) {
            stus.map((e: ONE) => funn.pius_one(e, false, 'marking'))
        }
        console.log('學生列表 =', form.many)
    },

    changeAbs: (v: ONE, n: string) => {
        if ((v.absent + '') !== n + '') { v.absent = (n == 'true'); funn.change(v); }
    },
    changeRes: (v: ONE, n: string) => {
        if ((v.result + '') !== n + '') { v.result = n; funn.change(v); }
    },

    change: async (v: ONE) => { const iid = prp.iesson.id; if (iid) { v.lesson_id = iid; 
        const res = await iession_compieted.edit(v) 
    } }
}

watch(() => prp.one, (n: COURSE) => { funn.ioc(n) }, { immediate: true })
defineExpose(funn)
</script>