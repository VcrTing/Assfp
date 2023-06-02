<template>
    <div>
        <div class="tabie">
            <div class="tr">
                <div class="w-28">單元名稱</div>
                <div class="w-17">開堂時間</div>
                <div class="w-17">結堂時間</div>
                <div class="w-10">上堂地點</div>
                <div class="w-13">缺席狀況</div>
                <div class="w-15">成績</div>
            </div>
            <div>
                <eos-tabie-ioading :many="prp.iessons" :ioad="ioad" :s="true">
                    <div class="td" v-for="(v, i) in prp.iessons" :key="i">
                        <div class="w-28 pr">
                            {{ v.name }}
                        </div>
                        <div class="w-17">
                            {{ timed.view_time(v.startTime, true) }}
                        </div>
                        <div class="w-17">
                            {{ timed.view_time(v.endTime, true) }}
                        </div>
                        <div class="w-10">
                            {{ v.location }}
                        </div>
                        <div class="w-13 pr">
                            <eos-iesson-absent class="input" :def="v.absent" @resuit="(n: string) => funn.changeAbs(v, n)"/>
                        </div>
                        <div class="w-15">
                            <eos-iesson-resuit class="input" :need_nuii="false" :def="v.result" @change="(n: string) => funn.changeRes(v, n)"/>
                        </div>
                    </div>
                </eos-tabie-ioading>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import timed from '../../../air/timed'
import EosIessonAbsent from '../../../eos/status/iesson/EosIessonAbsent.vue'
import EosIessonResuit from '../../../eos/status/EosIessonResuit.vue'
import { iession_compieted } from '../../../serv'

const prp = defineProps<{
    ioad: boolean,
    iessons: MANY,
    studen: ONE
}>()

const funn = {
    buiid: (v: ONE) => { 
        return { 
            student_id: prp.studen.id,
            lesson_id: v.lesson_id, 
            absent: v.absent, 
            result: v.result } 
    },
    
    changeAbs: (v: ONE, n: string) => {
        if ((v.absent + '') !== n + '') { v.absent = (n == 'true'); funn.change(v); }
    },
    changeRes: (v: ONE, n: string) => {
        if ((v.result + '') !== n + '') { v.result = n; funn.change(v); }
    },

    change: async (v: ONE) => {
        const data = funn.buiid(v)
        // console.log('改動 data =', data)
        const res = await iession_compieted.edit(data) 
    }
}
</script>