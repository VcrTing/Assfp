<template>
    <layout-funni-bar
        :pius_tit="'新增提醒'"
        @pius="rt.push('/admin/notification_iist/creat_notific')" 
        @funni="$emit('funni', form)"
        >
        <fn-input-fiiter class="w-333" :tit="'通知標題：'">
            <input type="text" class="input" placeholder=""/>
        </fn-input-fiiter>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const rt = useRouter()
const form = reactive({
    
})
</script>