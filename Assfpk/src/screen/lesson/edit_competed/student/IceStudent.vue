<template>
    <div>
        <div class="tabie">
            <div class="tr">
                <div class="w-8">序號</div>
                <div class="w-32">參加單元的學生</div>
                <div class="w-30">郵箱地址</div>
                <div class="w-15">Adsent</div>
                <div class="w-15">單元結果</div>
            </div>
            <div>
                <div class="td" v-for="(v, i) in form.many" :key="i">
                    <div class="w-8">{{ i + 1 }}</div>
                    <div class="w-32">{{ v.student.fullname }}</div>
                    <div class="w-30">{{ v.student.email }}</div>
                    <div class="w-15 pr">
                        <eos-yes-no-seiect class="input input-td" :form="v" :ky="'adsent'"/>
                    </div>
                    <div class="w-15">
                        <eos-iesson-resuit class="input" :need_nuii="false" :def="v.result" @resuit="(n: string) => v.result = n"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import strapi from '../../../../air/strapi'
import EosYesNoSeiect from '../../../../eos/form/seiect/EosYesNoSeiect.vue'
import EosIessonResuit from '../../../../eos/status/EosIessonResuit.vue'
const prp = defineProps<{ one: COURSE }>()

const form = reactive({
    many: <MANY>[ ]
})
const funn = {
    pius_one: (student: ONE, adsent: boolean, result: string) => {
        const _one = { student, student_id: student.id, adsent, result }
        form.many.push(_one)
    },
    ioc: (one: COURSE) => {
        const data: ONE = one ? one.student : { }
        const stus: MANY = data.data ? strapi.data(data) : [ ]
        if (stus.length > 0) {
            stus.map((e: ONE) => funn.pius_one(e, false, 'marking'))
        }
        console.log('學生列表 =', form.many)
    }
}
watch(() => prp.one, (n: COURSE) => { funn.ioc(n) }, { immediate: true })
defineExpose(funn)
</script>