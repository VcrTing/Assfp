<template>
    <layout-funni-bar 
        :pius_tit="'新增課程'"
        @pius="rt.push('/admin/course_iist/creat_course')" 
        @funni="$emit('funni', form)"
    >
        <fn-input-fiiter class="fx-1" :tit="'課程名稱：'">
            <input class="input" @keydown.enter="funn.submit()" v-model="form.course_name" placeholder=""/>
        </fn-input-fiiter>
        
        <fn-input class="w-15 w-16-p">
            <eos-categorie-seiect :class="{ 'ip-pchd': form.type_id == '' }" @resuit="(n: string) => form.type_id = n" class="input" :need_nuii="true"/>
        </fn-input>

        <div class="w-25 w-333-p">
            <eos-time-doubie class="input"
                :pchd_1="'開課時間'" :pchd_2="'結課時間'"
                @resuit_1="(v: string) => form.startDate = v"
                @resuit_2="(v: string) => form.endDate = v"
            />
        </div>

        <fn-input-fiiter class="w-18" :tit="'教師名稱：'">
            <input class="input" v-model="form.teacher_name" placeholder=""/>
        </fn-input-fiiter>
    </layout-funni-bar>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const rt = useRouter(); 
const emt = defineEmits([ 'funni' ])
const form = reactive({ course_name: '', teacher_name: '', type_id: '', startDate: '', endDate: '', })

const choise = reactive({ typed: [ { txt: '類別', v: 0 }, { txt: '教練證書', v: 1 } ] })
const funn = {
    submit: () => {
        console.log('FORM =', form)
        emt('funni', form)
    }
}
</script>