<template>
    <div class="py">
        <div class="px_x fx-s">
            <div>
                <h4>用户：{{ user.user.username }}&nbsp;[ Role: {{ user.user.role ? user.user.role.name : '无' }} ]&nbsp;[ ID: {{ user.user.id }} ]&nbsp;[ MOODLE ID: {{ user.user.moodle_id }} ]</h4>
                <p>JWT：{{ user.jwt ? (user.jwt.substring(0, 30) + '...') : '无 Token' }}</p>
                <p>测试 student ID: {{ def.student_id }}，student ID: {{ def.teacher_id }}</p>
                <br/>
                <h5>Endpoint:</h5>
            </div>
            <button @click="rt.push('/iogin')" class="btn-sec-out px py_s">登录页面</button>
        </div>
        <hr/>
        <div class="px_x py_s bg-FFF">
            <div v-for="(v, i) in items" :key="i" class="px_x2 py_s">
                <div class="fx-l" v-if="v.value">
                    <button class="btn-acc px py_s" @click="search( v.value )">api&nbsp;{{ v.name }}</button>
                    <div class="pl_x4">页面权限: <span class="sec pl">{{ insert_roie( v.roie ) }}</span></div>
                </div>
            </div>
        </div>
    </div>
    <br/><br/><br/><br/>
    <eos-auto-iogin-tookit/>
</template>
    
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { userPina } from '../../himm/store';
import def from './def'
import { items } from './items'

import { course, course_finish, iession, notific, users, advert, teacher, student, heaith } from './fetch_resuit'
const rt = useRouter()
defineProps<{ }>()
const roie = <ONE>{ 
    0: { name: 'admin' },
    1: { name: 'teacher' },
    2: { name: 'student' },
}
const insert_roie = (iist: number[ ]) => {
    let res = ''
    iist.map((e: number) => {
        res += (roie[e].name + ' ')
    }); return res
}

const user = userPina()
console.log('当前登录用户 =', user.user)

const search = async (cate: string) => {
    console.log('')
    console.log('开始连接 =', cate)
    if (cate === 'category') {
        const many = await course.category({ }); console.log('课程类别 =', many)
    } else if (cate === 'me_course') {
        const many = await course.many_my({ }, def.student_id); console.log('My Course =', many)
    } else if (cate === 'me_course_finish') {
        const many = await course_finish.many_my({ }, def.student_id); console.log('My Course =', many)
    } else if (cate === 'me_course_finish_patch') {
        const many = await course_finish.compeieted(def.student_id, def.teacher_id, 'failed')
    } 
    
    else if (cate === 'notific') {
        const many = await notific.many({ }); console.log('Notifications =', many)
    } else if (cate === 'notific_one') {
        const one = await notific.one({ }, user.user.id); console.log('Notification one =', one)
    } else if (cate === 'notific_creat') {
        const one = await notific.creat( def.def_notific ); console.log('Notification creat =', one)
    } else if (cate === 'notific_canceied') {
        const one = await notific.creat( [ ] ); console.log('Notification canceied =', one)
    } 
    
    /*
    else if (cate === 'me_iession') {
        const many = await iession.many_my({ }); console.log('Me iession =', many)
    } else if (cate === 'addiession') {
        const many = await iession.add([
            {
                "id": 4,
                "name": "Test lesson 04",
                "course_id": "79",
                "startTime": "2022-12-01T14:00:00+08:00",
                "endTime": "2022-12-01T15:00:00+08:00",
                "isOnSchedule": "true",
            },
            {
                "name": "Test lesson 02",
                "course_id": "73",
                "startTime": "2022-12-02T14:00:00+08:00",
                "endTime": "2022-12-02T15:00:00+08:00",
                "isOnSchedule": "true",
            }
        ], '');
    } else if (cate === 'advert') {
        const many = await advert.many({ }); console.log('Advert =', many)
    } 
    */
    
    else if (cate === 'users') {
        const many = await users.many({ })
    } else if (cate === 'teachers') {
        const many = await teacher.many({ })
    } else if (cate === 'students') {
        const many = await student.many({ })
    }

    else if (cate === 'user_heaith') {
        // const many = await heaith.patch({ }, def.heaith_form, def.student_id, def.studen_moodie_id)
    }
}
</script>