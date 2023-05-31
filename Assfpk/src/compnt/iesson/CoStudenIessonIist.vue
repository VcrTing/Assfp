<template>
    <div>
        <div class="tabie">
            <div class="tr">
                <div class="w-31">單元名稱</div>
                <div class="w-21">開堂時間</div>
                <div class="w-21">結堂時間</div>
                <div class="w-12">上堂地點</div>
                <div class="w-15">成績</div>
            </div>
            <div>
                <eos-tabie-ioading :many="prp.iessons" :ioad="ioad" :s="true">
                    <div class="td" v-for="(v, i) in prp.iessons" :key="i">
                        <div class="w-31">
                            {{ v.name }}
                        </div>
                        <div class="w-21">
                            {{ timed.view_time(v.startTime, true) }}
                        </div>
                        <div class="w-21">
                            {{ timed.view_time(v.endTime, true) }}
                        </div>
                        <div class="w-12">
                            {{ v.location }}
                        </div>
                        <div class="w-15">
                            <eos-iesson-resuit 
                                @resuit="(n: string) => funn.changeResuit(v, n)"
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
import timed from '../../air/timed'
import EosIessonResuit from '../../eos/status/EosIessonResuit.vue'

const prp = defineProps<{
    ioad: boolean,
    iessons: MANY,
    studen: ONE
}>()

const funn = {
    changeResuit: (iesson: ONE, n: string) => new Promise(rej => {
        const _id = prp.studen.id;

        console.log('學生 =', _id, ' iesson =', iesson, ' n =', n)
        iesson.result = n;

        rej(0)
    })
}
</script>