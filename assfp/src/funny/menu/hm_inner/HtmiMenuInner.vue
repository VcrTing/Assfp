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
import { ref } from 'vue'
import MenuItem from '../item/MenuItem.vue'
import { appPina } from '../../../himm/pina/app'
import { useRoute, useRouter } from 'vue-router'
import menu from '../../../air/menu'
const rt = useRoute()
const rter = useRouter()
const now = ref<Number>(-1)
const now_inner = ref<Number>(-1)

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