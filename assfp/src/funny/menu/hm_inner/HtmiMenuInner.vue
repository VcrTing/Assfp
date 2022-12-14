<template>
    <div class="menu-main-wrapper">
        <div v-for="(v, i) in menu" :key="i">
            <div>
                <!-- 多子菜單 -->
                <div class="menu-many-wrapper" v-if="v.children && v.children.length > 0">
                    <div class="menu-item">
                        <i v-if="v.icon" class="h3 menu-i" :class="v.icon"></i>
                        <span class="pl">{{ v.txt }}</span>
                    </div>
                    <nav class="">
                        <menu-item class="menu-item pl_menu" v-for="(m, k) in v.children" :key="k"
                            @tap="open(m)"
                            :active="(now_inner == m.index)"
                            :class="{ 'active': now_inner == m.index }"
                            :icon="m.icon" :txt="m.txt"></menu-item>
                    </nav>
                </div>
                <!-- 單 菜單 -->
                <nav class="menu-item" :class="{ 'active': now == v.index }" v-else>
                    <menu-item class="menu-one-wrapper" @tap="open(v)" :icon="v.icon" :txt="v.txt"></menu-item>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { appPina } from '../../../himm/pina/app'
import { defineComponent, ref, watch } from 'vue'
import MenuItem from '../item/MenuItem.vue'

import {} from '../../../conf'
import { useRoute, useRouter } from 'vue-router'

const rt = useRoute()
const rter = useRouter()
const now = ref<Number>(-1)
const now_inner = ref<Number>(-1)

const menu = [
    { txt: '教练资讯', icon: 'bi bi-person',
        index: 1, link: '/admin/dashboard', children: <ONE>[

        ] },
    { txt: '教练课程列表', icon: 'bi bi-person',
        index: 2, link: '/admin/dashboard', children: <ONE>[

        ]  },
    { txt: '学生资讯', icon: 'bi bi-person',
        index: 3, link: '', children: <ONE>[
            { txt: '学生列表', icon: 'bi bi-person', index: 31, link: '/admin/student_iist' },
            { txt: '新增学生', icon: 'bi bi-person', index: 32, link: '/admin/student_iist/creat_student' },
            { txt: '编辑学生', icon: 'bi bi-person', index: 33, link: '/admin/student_iist/edit' }
        ]  },
    { txt: '班级', icon: 'bi bi-person',
        index: 4, link: '', children: <ONE>[
            { txt: '班级列表', icon: 'bi bi-person', index: 41, link: '/admin/ciass_iist' },
            { txt: '新增班级', icon: 'bi bi-person', index: 42, link: '/admin/ciass_iist/creat_ciass' },
            { txt: '编辑班级', icon: 'bi bi-person', index: 43, link: '/admin/ciass_iist/edit' }
        ]  },
    { txt: '课程', icon: 'bi bi-person',
        index: 5, link: '', children: <ONE>[
            { txt: '课程列表', icon: 'bi bi-person', index: 51, link: '/admin/course_iist' },
            { txt: '新增课程', icon: 'bi bi-person', index: 52, link: '/admin/course_iist/creat_course' },
            // { txt: '编辑课程', icon: 'bi bi-person', index: 53, link: '/admin/course_iist/edit' }
        ]  },
    { txt: '时间表', icon: 'bi bi-person',
        index: 6, link: '/admin/dashboard', children: <ONE>[

        ]  },
    { txt: '资讯', icon: 'bi bi-person',
        index: 7, link: '/admin/dashboard', children: <ONE>[

        ]  },
    { txt: '未登录广告', icon: 'bi bi-person',
        index: 8, link: '/admin/dashboard', children: <ONE>[

        ]  },
    { txt: '通知', icon: 'bi bi-person',
        index: 9, link: '/admin/dashboard', children: <ONE>[

        ]  },
    { txt: '使用者管理', icon: 'bi bi-person',
        index: 10, link: '', children: <ONE>[
            { txt: '使用者列表', icon: 'bi bi-person', index: 101, link: '/admin/user_iist' },
            { txt: '新增使用者', icon: 'bi bi-person', index: 102, link: '/admin/user_iist/creat_user' },
        ]  }
]

function _route(path: string, rt: string, index: Number) { 
    if (rt == path || path.indexOf(rt) >= 0) { 
        now.value = index; now_inner.value = -1 } 
}
function _route_in(path: string, rt: string, index: Number) { 
    if (rt == path || path.indexOf(rt) >= 0) { 
        now_inner.value = index; now.value = -1 } 
}
function localRoute(path: string) {
    let res: ONE = { }
    menu.map(e => { 
        if (e.link) { _route(path, e.link, e.index) }
        else { e.children.map( ( c:ONE ) => { 
            _route_in(path, c.link, c.index) 
        }) }
    })
}
function open(v: any) { 
    localRoute(v.link)
    rter.push(v.link) 
}

localRoute(rt.fullPath)
</script>

<style lang="sass" scoped>

</style>