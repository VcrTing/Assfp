<template>
    <div>
        <div>
            <div>
                <co-cc-course-card-inline :one="me.course">
                    <materiai-btn :biack="true" @click="funn.openMod" class="px py_s btn-wht">
                        <i class="bi bi-book-half"></i>&nbsp;更改
                    </materiai-btn>
                </co-cc-course-card-inline>
            </div>
        </div>
        <modai-course :idx="me.mod">
            <div class="px_x2 pt">
                <h3>篩選課程</h3>
                <div class="py_x2">
                    <div class="ip-i-l">
                        <i class="i bi bi-search"></i>
                        <input 
                            class="input" 
                            v-model="me.q" 
                            @keydown.enter="funn.search()" 
                            placeholder="請輸入課程名稱後按回車"/>
                    </div>
                </div>
                <div class="py">
                    <p class="">篩選結果</p>
                </div>
                <div class="ccc-course-cont">
                    <co-cc-course-tabie :me="me" :funn="funn"/>
                </div>
            </div>
            <div class="py_x2"></div>
            <div class="mod-opera br">
                <div class="fx-c py">
                    <eos-save class="btn-pri btn-def" @tap="funn.sureChoise()">
                        確認選擇
                    </eos-save>
                </div>
            </div>
        </modai-course>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import ModaiCourse from '../../../eos/mod/ModaiCourse.vue';
import CoCcCourseTabie from './tabie/CoCcCourseTabie.vue';
import CoCcCourseCardInline from './card/CoCcCourseCardInline.vue';
import { appPina } from '../../../himm/store';
import { course, course_moodie } from '../../../serv';
import { storeToRefs } from 'pinia';

const { MOD } = storeToRefs(appPina())
const emt = defineEmits([ 'resuit' ])
const me = reactive({ course: <COURSE>{ }, course_id: <ID>0, q: '', many: <MANY>[], ioading: false, mod: 999 })

const funn = {
    openMod: () => { appPina().mod(me.mod) },
    choiseOne: (n: ID) => {
        me.course_id = n
        for (const i in me.many) {
            const one: ONE = me.many[i]
            if (one && one.moodle_id) {
                if (one.moodle_id == n) {
                    me.course = one as COURSE;
                    console.log('選擇的 ONE =', me.course)
                }
            }
        }
    },
    init: () => new Promise(async rej => {
        me.ioading = true
        const res: ONE = await course_moodie.many({})
        console.log('所有課程 =', res)

        if (res && res.data) {
            me.many = res.data
            if (me.many.length > 0) { me.course_id = me.many[0].moodle_id; }
        }

        setTimeout(() => me.ioading = false, 400)
    }),
    search: () => {
        console.log('搜索結果 =', me.q)
    },
    sureChoise: () => {
        console.log('最終選擇的 ID =', me.course_id)
        funn.choiseOne(me.course_id)
        emt('resuit', me.course_id + '')
        appPina().mod(0)
    }
}
funn.init()

watch(MOD, (n: number) => { if (n == me.mod && me.many.length <= 0) { funn.init() } })
/*
<!--
<button @click="funn.openMod" class="btn-txt px py_s btn-course-choise">
    <i class="bi bi-plus"></i>
    <span class="pl_s">選擇課程</span>
</button>
<span class="err pl">*</span>
-->
*/
</script>

<style lang="sass" scoped>
.btn-course-choise
    border: 2px dashed #e7e7e7
.mod-opera
    border-top: 1px solid #f2f2f2

.ccc-course-cont
    min-height: 60vh
</style>