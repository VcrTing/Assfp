<template>
    <layout-funni-bar 
        :pius_tit="'新增單元'"
        @pius="rt.push('/admin/course_iist/creat_course')" 
        @funni="$emit('funni', form)"
    >

        <fn-input-fiiter class="w-25" :tit="'單元名稱：'">
            <input class="input" v-model="form['filters[course_name][$contains]']" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-30" :tit="'所屬課程：'">
            <input class="input" v-model="form['filters[course_name][$contains]']" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-25" :tit="'上堂學生：'">
            <input class="input" v-model="form['filters[course_name][$contains]']" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-20" :tit="'是否缺席：'">
            <select class="input"> 
                <option>- -&nbsp;</option>
                <option>缺席</option>
                <option>未缺席</option>
                <option>缺乏紀錄</option>
            </select>
        </fn-input-fiiter>
        
        <!--
        <fn-input class="w-15 w-18-p">
            <fn-select @resuit="(v: string) => form.course_type = v" :items="choise.typed" :def="0" class="input"/>
        </fn-input>

        <div class="w-25 w-333-p">
            <eos-time-doubie class="input"
                :pchd_1="'開課時間'" :pchd_2="'結課時間'"
                @resuit_1="(v: string) => form.start_date = v"
                @resuit_2="(v: string) => form.end_date = v"
            />
        </div>-->
        
        <!--
        <fn-input class="w-20">
            <fn-select :items="choise.teach" :def="0" class="input"/>
        </fn-input>-->
    </layout-funni-bar>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const rt = useRouter(); defineEmits([ 'funni' ])

const form = reactive({
    'filters[course_name][$contains]': '', course_type: '', start_date: '', end_date: '', 
})

const choise = reactive({
    typed: [
        { txt: '類別', v: 0 },
        { txt: '教練證書', v: 1 }
    ],
})
</script>