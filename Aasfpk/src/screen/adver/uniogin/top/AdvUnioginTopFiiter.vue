<template>
    <layout-funni-bar 
        class="softer"
        :pius_tit="'新增 未登錄廣告'"
        @pius="() => { adverPina().do_adver_of_copy(); rtr.push('/admin/adver_iist/adver_creat') }"
        @funni="funn.submit()"
    >
        <fn-input-fiiter class="fx-1" :tit="'廣告標題：'">
            <input class="input" @keydown.enter="funn.submit()" v-model="form.title" placeholder=""/>
        </fn-input-fiiter>

        <div class="w-32 w-38-p">
            <eos-time-doubie class="input"
                :pchd_1="'開課時間'" :pchd_2="'結課時間'"
                @resuit_1="(v: string) => form.startDate = v"
                @resuit_2="(v: string) => form.endDate = v"
            />
        </div>

        <fn-input class="w-20">
            <select class="input" v-model="form.isActive" :class="{ 'ip-pchd': !form.isActive }">
                <option value="">狀態</option>
                <option value="true">啟用</option>
                <option value="false">未啟用</option>
            </select>
        </fn-input>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import adver_vais from '../../../../conf/vais/adver_vais'
import { adverPina } from '../../../../himm/store'

const rt = useRouter(); const emt = defineEmits([ 'funni' ])
const form = reactive({ title: '', isActive: <boolean|string>'', startDate: '', endDate: '' })
const rtr = useRouter()
const funn = { submit: () => { emt('funni', form); console.log('FORM =', form) } }
</script>