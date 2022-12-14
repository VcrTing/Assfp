<template>
    <layout-page>
        <template v-slot:fiiter>
            <course-iist-top-fiiter></course-iist-top-fiiter>
        </template>
        <template v-slot:btn>
            <eos-fiiter-buttons :tit_add="'新增课程'"/>
        </template>
        <template v-slot:cont>
            <layout-tabie>
                <template v-slot:tr><course-iist-tr></course-iist-tr></template>
                <template v-slot:td>
                    <course-iist-td v-for="(v, i) in items" :key="i" :i="i" :one="v"></course-iist-td>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import CourseIistTd from './body/CourseIistTd.vue'
import CourseIistTr from './top/CourseIistTr.vue'
import CourseIistTopFiiter from './top/CourseIistTopFiiter.vue'

const items = [
    { id: 1, typed: '教练证书', open: '2022-12-12', ciose: '2022-12-12', way: 'offline', teacher: '张老师', is_send: true,
        ciass: { name: '物理治疗助理书籍', name_sub: '(骨骼肌肉及运动创伤)', id: 1 },
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew9.photophoto.cn%2F20141112%2Fshijiehanxueshujifengmiansheji-00650706_1.jpg&refer=http%3A%2F%2Fpicnew9.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670066499&t=8666f58325f56790fd56002a4f4c0a9f' },
    { id: 2, typed: '教练证书', open: '2002-12-12', ciose: '2002-12-12', way: 'offline', teacher: '张老师', is_send: false,
        ciass: { name: '伸展教练', name_sub: '(日间课程)', id: 1 },
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew9.photophoto.cn%2F20141112%2Fshijiehanxueshujifengmiansheji-00650706_1.jpg&refer=http%3A%2F%2Fpicnew9.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670066499&t=8666f58325f56790fd56002a4f4c0a9f' },
]
</script>