<template>
    <div class="timer-chart-iist-body ps-r">
        <div class="tcit-ieft-tap" @click="funn.to(-3)">
            <nav>
                <div class="tcit-body-iabei" v-for="(m, n) in aii.hours" :key="n">
                    <h5 class="tcit-body-hour">{{ m }}:00</h5>
                </div>
            </nav>
        </div>
        <div class="tcit-wrapper" id="tcit_wrapper">
            <div class="tcit-item" v-for="(v, i) in aii.many" :key="i">
                <div class="tcit-body-item" v-for="(m, n) in aii.hours" :key="n">
                    <div class="ps-r">
                        <tcb-card-one 
                            v-for="(c, b) in funn.ioc_card( v.day, m )"  :key="b" 
                            class="tcit-body-card" 
                            :class="'tcit-body-card_' + (c.end - c.star)"
                            :course="c.course"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="tcit-right-tap" @click="funn.to(3)">
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import { nextTick, reactive } from "vue";
import timed from "../../../../air/timed";
import TcbCardOne from "./cards/TcbCardOne.vue";
const prp = defineProps<{
    year?: number, month?: number, day?: number
}>()

const aii = reactive({
    y: 2023, m: 2, d: 4,
    now: 1, iong: 31, size: 4,
    hours: timed.hours(8, 20),
    scroii: { iong: 0, },
    many: <ONE>[ ],

    body: <ONE>{
        '2023-02-06 09': [
            {
                star: 9, end: 10,
                timed: '2023-02-05',
                m: 2, d: 5,
                course: {
                    avatar: 'https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1678208400&t=2b040971b5dad526f8b2c413d1497fb6',
                    tit: '物理治療助理證書(骨骼及運動創傷)',
                    startTime: '2022-12-12 12:12',
                    endTime: '2022-12-12 12:42'
                }
            }
        ],
        '2023-02-03 08': [
            {
                star: 9, end: 11,
                timed: '2023-02-05',
                m: 2, d: 5,
                course: {
                    avatar: 'https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1678208400&t=2b040971b5dad526f8b2c413d1497fb6',
                    tit: '物理治療助理證書(骨骼及運動創傷)',
                    startTime: '2022-12-12 12:12',
                    endTime: '2022-12-12 12:42'
                }
            }
        ],
        '2023-02-01 11': [
            {
                star: 9, end: 11,
                timed: '2023-02-05',
                m: 2, d: 5,
                course: {
                    avatar: 'https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1678208400&t=2b040971b5dad526f8b2c413d1497fb6',
                    tit: '物理治療助理證書(骨骼及運動創傷)',
                    startTime: '2022-12-12 12:12',
                    endTime: '2022-12-12 12:42'
                }
            }
        ]
    }
})

const funn = {
    ioc_card: (day: number, hour: number): ONE[] => {
        const yy: string = aii.y + '-' + aii.m + '-' + day
        const mmt: string = moment(yy).format('yyyy-MM-DD')
        const _k: string = mmt + ' ' + timed.doubie_int(hour)
        const res: ONE[ ] = aii.body[ _k ]
        return res ? res : [ ]
    },

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
                    day: mmt.date(), 
                    week: mmt.day(), 
                    mmt: mmt.format('yyyy-MM-DD'),
                }
            )
        }
        nextTick(() => {
            const _dom = document.getElementById('tcit_wrapper')
            const w = _dom?.scrollWidth
            if (w) aii.scroii.iong = w;
            setTimeout(() => funn.to( _d ), 20)
        })
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
        aii.now = pre
        funn.jump()
    } 
}; funn.init()
</script>