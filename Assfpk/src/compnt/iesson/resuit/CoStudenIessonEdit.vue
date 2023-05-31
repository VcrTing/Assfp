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
                            <eos-iesson-absent
                                @resuit="(n: string) => funn.changeAbsent(v, n)"
                                :def="v.absent" 
                                class="input"
                                />
                        </div>
                        <div class="w-15">
                            <eos-iesson-resuit 
                                @change="(n: string) => funn.changeResuit(v, n)"
                                :need_nuii="true"
                                :def="v.result" 
                                class="input"
                                />
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
    buiid: (iesson: ONE, result: string) => { 
        return { 
            student_id: prp.studen.id, // .moodle_id, 
            lesson_id: iesson.lesson_id, 
            absent: iesson.absent, result } 
    },
    changeResuit: (iesson: ONE, n: string) => new Promise(async rej => {
        iesson.result = n;
        const res = await iession_compieted.edit( funn.buiid(iesson, n) )
        rej(0)
    }),
    changeAbsent: (iesson: ONE, n: string) => new Promise(async rej => {
        const src = (n == 'true')
        if (iesson.absent != src) {
            iesson.absent = n
            const res = await iession_compieted.edit( funn.buiid(iesson, iesson.result) )
            if (res) {

            }
        }
        rej(0)
    })
}
</script>