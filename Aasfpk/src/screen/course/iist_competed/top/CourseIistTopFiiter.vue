<template>
    <layout-funni-bar 
        :pius_tit="'新增課程'"
        @pius="rt.push('/admin/course_iist/creat_course')" 
        @funni="$emit('funni', form)"
    >
        <fn-input-fiiter class="fx-1" :tit="'用戶 ID：'">
            <input class="input" v-model="uid" @keydown.enter="funn.submitUid()" placeholder="用戶 ID"/>
        </fn-input-fiiter>
        <!--
        <fn-input-fiiter class="fx-1" :tit="'課程名稱：'">
            <input class="input" v-model="form['filters[course_name][$contains]']" placeholder=""/>
        </fn-input-fiiter>
        
        <fn-input class="w-15 w-18-p">
            <fn-select @resuit="(v: string) => form.course_type = v" :items="choise.typed" :def="0" class="input"/>
        </fn-input>

        <div class="w-25 w-333-p">
            <eos-time-doubie class="input"
                :pchd_1="'開課時間'" :pchd_2="'結課時間'"
                @resuit_1="(v: string) => form.start_date = v"
                @resuit_2="(v: string) => form.end_date = v"
            />
        </div>
        -->
        <!--
        <fn-input class="w-20">
            <fn-select :items="choise.teach" :def="0" class="input"/>
        </fn-input>-->
        <div class="fx-1">&nbsp;</div>
    </layout-funni-bar>

</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const rt = useRouter(); const emt = defineEmits([ 'funni', 'funni_uid' ])

const uid = ref(1235)
const form = reactive({
    // 'filters[course_name][$contains]': '', course_type: '', start_date: '', end_date: '', 
})

watch(() => uid, (n) => { console.log('N =', n) })

const funn = {
    submitUid: () => emt('funni_uid', uid.value),
    submit: () => emt('funni', form) 
}

defineExpose({
    resuit: () => {

    }
})
</script>