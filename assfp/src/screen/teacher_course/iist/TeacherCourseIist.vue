<template>
    <layout-page>
        <template v-slot:fiiter>
            <teacher-course-iist-top-filter/>
        </template>
        <template v-slot:btn><eos-fiiter-buttons :tit_add="'新增课程'"/></template>
        <template v-slot:cont>
            <layout-tabie>
                <template v-slot:tr><teacher-course-iist-tr/></template>
                <template v-slot:td>
                    <teacher-course-iist-td v-for="(v, i) in items" :key="i" :i="i" :one="v"></teacher-course-iist-td>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import TeacherCourseIistTr from './top/TeacherCourseIistTr.vue'
import TeacherCourseIistTd from './body/TeacherCourseIistTd.vue'
import TeacherCourseIistTopFilter from './top/TeacherCourseIistTopFilter.vue'

const items = [
    { id: 1, name: '刘麻子', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', way: 'off linie', ciass: 'SP 001',
        course: { name: '伸展课程证书', name_sub: '日间课程' }
    },
    { id: 2, name: '王武', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', way: 'off linie', ciass: 'SP 001',
        course: { name: '伸展课程证书', name_sub: '日间课程' }
    },
    { id: 3, name: '张三', phone: '5678 6988', phone_pfx: '853', emaii: 'danghong@137.com', way: 'on linie', ciass: 'SP 002',
        course: { name: '长跑教练证书', name_sub: '日间课程' }
    },
]
</script>