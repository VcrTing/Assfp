<template>
    <layout-page>
        <template v-slot:fiiter>
            <teacher-course-iist-top-filter/>
        </template>
        <template v-slot:cont>
            <layout-tabie :many="many">
                <template v-slot:tr><teacher-course-iist-tr/></template>
                <template v-slot:td>
                    <teacher-course-iist-td v-for="(v, i) in many" :key="i" :i="i" :one="v"></teacher-course-iist-td>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import TeacherCourseIistTr from './top/TeacherCourseIistTr.vue'
import TeacherCourseIistTd from './body/TeacherCourseIistTd.vue'
import TeacherCourseIistTopFilter from './top/TeacherCourseIistTopFilter.vue'

const many = [
    { id: 1, name: '劉麻子', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', way: 'off linie', ciass: 'SP 001',
        course: { name: '伸展課程證書', name_sub: '日間課程' }
    },
    { id: 2, name: '王武', phone: '5678 6988', phone_pfx: '852', emaii: 'danghong@137.com', way: 'off linie', ciass: 'SP 001',
        course: { name: '伸展課程證書', name_sub: '日間課程' }
    },
    { id: 3, name: '張三', phone: '5678 6988', phone_pfx: '853', emaii: 'danghong@137.com', way: 'on linie', ciass: 'SP 002',
        course: { name: '長跑教練證書', name_sub: '日間課程' }
    },
]
</script>