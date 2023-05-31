<template>
    <layout-funni-bar 
        :pius_tit="'新增學生'"
        @pius="rtr.push('/admin/student_iist/creat_student')" 
        @funni="$emit('funni', form)"
    >
        <fn-input-fiiter class="w-30" :tit="'賬戶名稱：'">
            <input type="text" v-model="form['filters[fullname][$contains]']" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-17" :tit="'性別：'">
            <input type="text" v-model="form['filters[sex][$contains]']" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-23" :tit="'電話號碼：'">
            <input type="text" v-model="form['filters[phone1][$contains]']" class="input" placeholder=""/>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-30" :tit="'電子郵箱：'">
            <input type="text" v-model="form['filters[email][$contains]']" class="input" placeholder=""/>
        </fn-input-fiiter>
    </layout-funni-bar>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const rtr = useRouter(); defineEmits([ 'funni' ])

const form = reactive({
    'filters[fullname][$contains]': '',
    'filters[phone1][$contains]': '',
    'filters[email][$contains]': '',
    'filters[sex][$contains]': ''
})
</script>