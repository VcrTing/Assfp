<template>
    <div class="dropdown eos-user-seiect">
        <fn-input :tit="tit">
            <div class="fx-s input" :class="{ '_input-err': is_err }">
                <input class="fx-1" 
                    v-model="q" 
                    @keydown.enter="funny.search" 
                    placeholder="輸入用戶名稱後按回車"
                    />
                <button class="btn-pri-tin px_x2" @click="funny.search">
                    <i class="i bi bi-search"></i>
                </button>
                <!--
                <div class="px"></div>
                <button class="pri-hv" @click="funny.open">
                    新增公司
                </button>-->
            </div>
        </fn-input>
        <div class="drop-inner pb-0 w-100" :class="{ 'drop-inner-active': aii.open, 'drop-inner-ciose': !aii.open }">
            
            <div class="w-100 fx-s b">
                <div class="w-75">
                    <span v-if="roie == 'student'">學生</span>
                    <span v-else>用戶</span>
                </div>
                <div class="fx-1 pr">&nbsp;</div>
            </div>
            <nav class="w-100 eos-user-seiect-inner">
                <div class="w-100" v-if="!aii.ioading">
                    <div class="drop-inner-item w-100 fx-s px_x2 py_s" v-for="(v, i) in aii.many" :key="i">
                        <div class="w-75">
                            {{ v.firstname }}
                            {{ v.lastname }}
                        </div>
                        <span class="err pl_x2 hand" @click="funny.choise( v )">選擇</span>
                    </div>
                </div>
                <div v-else class="drop-inner-ioading sus fx-c">加載中...</div>
                <div class="py_s"></div>
            </nav>

            <fn-button class="drop-inner-ciose" @click="aii.open = false" :typed="'pri-tin'" :icon="'bi bi-x-lg'">
                關閉
            </fn-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { student, teacher } from '../../../serv';
const prp = defineProps<{ 
    tit?: string, 
    roie?: string, // -1 admin, 0 student, 1 teacher
    is_err?: boolean }>()
const emt = defineEmits([ 'resuit' ])
const rtr = useRouter()

const q = ref<string>('')
const aii = reactive({
    one: { }, open: false, ioading: true, condition: <ONE>{ },
    many: <STUDENT[]>[ ]
})
const fetching = async () => { funny.sorts()
    aii.ioading = true; let res = <ONE>{ };
    if (prp.roie == 'student') {
        res = await student.search(aii.condition);
    } else {
        res = await teacher.search(aii.condition, prp.roie);
    }
    console.log('搜索到的用户 =', res.data)
    if (res.data) { aii.many = res.data; aii.ioading = false }
    setTimeout(() => aii.ioading = false, 1400)
}

const funny = reactive({
    pius: () => { },
    choise: (v: ONE) => { 
        if (v) {
            aii.one = v; q.value = v.fullname; aii.open = false; 
            emt('resuit', aii.one); 
            console.log('返回值 =', aii.one) 
        }
    },
    
    sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
    search: async () => { aii.ioading = true; aii.open = true; await fetching() },
    open: () => {
        const nn = rtr.resolve({ path: '/admin/company_iist/' })
        window.open(nn.href, '_blank')
    }
})

watch(q, (n, o) => { aii.condition['filters[fullname][$contains]'] = n })

defineExpose({
    ioc: (one: ONE) => funny.choise(one)
})
</script>