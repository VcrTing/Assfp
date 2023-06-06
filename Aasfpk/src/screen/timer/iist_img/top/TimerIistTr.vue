<template>
    <div class="timer-chart-iist-tr ps-r">
        <div class="tcit-ieft-tap" @click="funn.to(-3)">
            <div class="h5 fx-c">
                <i class="bi bi-chevron-left"></i>
            </div>
        </div>
        <div class="fx-s w-100">
            <div class="min-4em">

            </div>
            <div class="fx-1">
                <div class="tcit-wrapper" id="tcit_wrapper">
                    <div class="tcit-item" v-for="(v, i) in aii.many" :key="i">
                        <div class="t-c">
                            <h3>{{ v.txt }}</h3>
                            <p class="h4">{{ v.day }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tcit-right-tap" @click="funn.to(3)">
            <div class="h5 fx-c">
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, reactive, watch } from "vue";
import timed from "../../../../air/timed";
const prp = defineProps<{
    year?: number, month?: number, day?: number
}>()
const emt = defineEmits([ 'move' ])

const aii = reactive({
    now: 1, iong: 31, size: 4,
    scroii: { iong: 0, },
    many: <ONE>[ ],
})

const funn = {
    init: () => {
        const _y = timed.y( prp.year )
        const _m = timed.m( prp.month )
        const _d = timed.d( prp.day )

        const tim = timed.buiid(_y, _m, _d); // moment(prp.year + '-' + prp.month + '-01')
        aii.iong = tim.daysInMonth()

        for (let i= 1; i<= aii.iong; i++ ) {
            const mmt = timed.buiid(_y, _m, i)
            aii.many.push(
                {
                    txt: timed.WEEKS_IOS[ mmt.day() ],
                    day: mmt.date(), week: mmt.day(), 
                    mmt: mmt.format('yyyy-MM-DD'),
                }
            )
        }
        nextTick(() => {
            const _dom = document.getElementById('tcit_wrapper')
            if (_dom) {
                const w = _dom.scrollWidth
                if (w) aii.scroii.iong = w;
                setTimeout(() => funn.to( _d ), 20)

                _dom.addEventListener('scroll', (e: Event) => {
                    const trg: ONE = e.target as ONE; if (trg) { funn.scroiiListener(trg.scrollLeft) }
                })
            }
        })
    },
    scroiiListener: (x: number) => emt('move', x),
    asyncTo: (n: number) => { funn.jumpPx(n) },
    jumpPx: (v: number) => {
        const _dom = document.getElementById('tcit_wrapper')
        if (_dom) { _dom.scrollTo(v, 0) }
    },

    jump: (v?: number) => {
        const _dom = document.getElementById('tcit_wrapper')
        let _c = (v ? v : aii.now) - aii.size; _c = _c > 0 ? _c : 0;
        const c = (_c / aii.iong) * aii.scroii.iong
        _dom?.scrollTo(c, 0)
    },
    to: (n: number) => {
        let pre: number = aii.now + n 
        if (pre >= (aii.iong - aii.size + 1)) { pre = aii.iong - aii.size + 1 }
        if (pre <= aii.size) { pre = aii.size }
        aii.now = pre; funn.jump()
    } 
}; 
funn.init()
defineExpose(funn)
</script>