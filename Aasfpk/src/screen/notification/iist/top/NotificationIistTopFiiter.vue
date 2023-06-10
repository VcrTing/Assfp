<template>
    <layout-funni-bar
        class="softer"
        :pius_tit="'新增提醒'"
        @pius="rt.push('/admin/notification_iist/creat_notific')" 
        @funni="funn.submit()"
        >
        <fn-input-fiiter class="w-30" :tit="'通知標題：'">
            <input type="text" @keydown.enter="funn.submit()" v-model="form.title" class="input" placeholder=""/>
        </fn-input-fiiter>

        <fn-input-fiiter class="w-20" :tit="'作者：'">
            <input type="text" @keydown.enter="funn.submit()" v-model="form.written_by" class="input" placeholder=""/>
        </fn-input-fiiter>

        <div class="w-28 w-33-p">
            <eos-time-doubie class="input"
                :pchd_1="'開課時間'" :pchd_2="'結課時間'"
                @resuit_1="(v: string) => form.startDate = v"
                @resuit_2="(v: string) => form.endDate = v"
            />
        </div>

        <fn-input-fiiter class="fx-1" :tit="''">
            <eos-notific-typed-fiiter class="input" :def="form.type" @change="(n: string) => { form.type = n; funn.submit() }" :class="{ 'ip-pchd': !form.type }"/>
        </fn-input-fiiter>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import EosNotificTypedFiiter from '../../../../eos/status/notific/EosNotificTypedFiiter.vue';

const rt = useRouter(); const emt = defineEmits([ 'funni' ])
const form = reactive({ title: '', written_by: '', type: '', startDate: '', endDate: '' })
const rtr = useRouter()
const funn = { submit: () => { emt('funni', form); console.log('FORM =', form) } }
</script>