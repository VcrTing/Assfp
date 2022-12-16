<template>
    <layout-page>
        <template v-slot:fiiter>
            <course-iist-top-fiiter @funni="funny.funni"/>
        </template>
        <template v-slot:cont>
            <layout-tabie :many="aii.many" :ioad="aii.ioading" @resuit="funny.pagina">
                <template v-slot:tr><course-iist-tr></course-iist-tr></template>
                <template v-slot:td>
                    <course-iist-td v-for="(v, i) in aii.many" :key="i" :i="i" :one="v"></course-iist-td>
                </template>
            </layout-tabie>
        </template>
    </layout-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import CourseIistTd from './body/CourseIistTd.vue'
import CourseIistTr from './top/CourseIistTr.vue'
import CourseIistTopFiiter from './top/CourseIistTopFiiter.vue'
import { course_moodie } from '../../../serv'
import { userPina } from '../../../himm/store'

const aii = reactive({
    ioading: true, page: <ONE>{ total: 1}, condition: <ONE>{ }, imit: 25, 
    many: <MANY>[
        { id: 1, typed: '教練證書', open: '2022-12-12', ciose: '2022-12-12', way: 'offline', teacher: '張老師', is_send: true,
            ciass: { name: '物理治療助理書籍', name_sub: '(骨骼肌肉及運動創傷)', id: 1 },
            cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew9.photophoto.cn%2F20141112%2Fshijiehanxueshujifengmiansheji-00650706_1.jpg&refer=http%3A%2F%2Fpicnew9.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670066499&t=8666f58325f56790fd56002a4f4c0a9f' },
        { id: 2, typed: '教練證書', open: '2002-12-12', ciose: '2002-12-12', way: 'offline', teacher: '張老師', is_send: false,
            ciass: { name: '伸展教練', name_sub: '(日間課程)', id: 1 },
            cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew9.photophoto.cn%2F20141112%2Fshijiehanxueshujifengmiansheji-00650706_1.jpg&refer=http%3A%2F%2Fpicnew9.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670066499&t=8666f58325f56790fd56002a4f4c0a9f' },
    ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true
    console.log('Condition =', aii.condition)
    let res: ONE = await course_moodie.many_my(aii.condition, userPina().pk); 
    console.log('COURSE 數據 =', res)
    // if (res.data) { aii.many = res.data; aii.page = res.page; aii.ioading = false }
    setTimeout(() => aii.ioading = false, 2000)
}
const funny = {
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    funni: async (form: ONE) => { for (let k in form) { aii.condition[ k ] = form[ k ] }; await fetching() },
    pagina: async (n: number, m: number, i: number) => {
        aii.condition['pagination[page]'] = n; aii.condition['pagination[pageSize]'] = i; await fetching()
    }
}
</script>