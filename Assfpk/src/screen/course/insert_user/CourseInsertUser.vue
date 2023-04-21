<template>
    <layout-form>
        <template v-slot:opera><button class="btn-pri-out btn-def" @click="funn.dump">返回</button></template>
        <template v-slot:cont>
            <nav class="panner" v-if="one">
                <course-insert-user-base :one="one" ref="base"/>
            </nav>
            <!-- -->
            <nav class="panner mt_x2" v-if="one">
                <eos-form-titie :tit="'教練/其他用戶'" :btn="'添加用戶'" @tap="funn.pius_user()"/>
                <div class="w-100">
                    <cp-course-creat-user :course="one" ref="user"/>
                </div>
            </nav>
            <nav class="panner mt_x2" v-if="one">
                <eos-form-titie :tit="'學生'" :btn="'添加學生'" @tap="funn.pius_student()"/>
                <div class="w-100">
                    <cp-course-creat-studen :course="one" ref="studen"/>
                </div>
            </nav>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { coursePina } from '../../../himm/store'
import CpCourseCreatStuden from '../../../compnt/course/creat/studen/CpCourseCreatStuden.vue'
import CpCourseCreatUser from '../../../compnt/course/creat/user/CpCourseCreatUser.vue'
import CourseInsertUserBase from './base/CourseInsertUserBase.vue'
import { course_moodie } from '../../../serv'
import strapi from '../../../air/strapi'
const rtr = useRouter()

const base = ref()
const user = ref()
const studen = ref()

const one: COURSE = coursePina().one

const funn = {
    pius_student: () => { studen.value.pius_one() },
    pius_user: () => { user.value.pius_one() },
    init: () => { 
        if (!one.id) { funn.dump() } 
        nextTick(async () => {
            const res: ONE = await course_moodie.one(one.id)

            if (res) {
                console.log('課程 =', res)
                const stus: MANY = strapi.data( res.student )
                studen.value.ioc(stus)
            }
        }) 
    },
    
    dump: () => rtr.push('/admin/course_iist')
}

funn.init()
</script>