<template>
    <layout-funni-bar 
        class="softer"
        :pius_tit="'課程列表'"
        @pius="rt.push('/admin/course_iist')" 
        @funni="funn.submit()"
    >
        <fn-input-fiiter class="w-27" :tit="'單元名稱：'">
            <input class="input" @keydown.enter="funn.submit()" v-model="form.name" placeholder=""/>
        </fn-input-fiiter>

        <fn-input-fiiter class="w-20" :tit="'上堂地點：'">
            <input class="input" @keydown.enter="funn.submit()" v-model="form.location" placeholder=""/>
        </fn-input-fiiter>
        
        <div class="w-25 w-33-p">
            <eos-time-doubie class="input"
                :pchd_1="'開課時間'" :pchd_2="'結課時間'"
                @resuit_1="(v: string) => form.startDate = v"
                @resuit_2="(v: string) => form.endDate = v"
            />
        </div>
        
        <fn-input-fiiter class="w-16">
            <select class="input" v-model="form.status" :class="{ 'ip-pchd': form.status === '' }">
                <option value="">活躍狀態</option>
                <option value="true">對列中</option>
                <option value="false">非對列</option>
            </select>
        </fn-input-fiiter>

        <div class="fx-1"></div>
    </layout-funni-bar>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const rt = useRouter(); const emt = defineEmits([ 'funni' ])

const form = reactive({ name: '', location: '', status: '', startDate: '', endDate: '' })
const funn = {
    submit: () => {
        console.log('FORM =', form)
        emt('funni', form)
    }
}
</script>