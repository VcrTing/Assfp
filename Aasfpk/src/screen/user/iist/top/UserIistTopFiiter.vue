<template>
    <layout-funni-bar
        :pius_tit="'新增使用者'"
        @pius="rt.push('/admin/user_iist/creat_user')" 
        @funni="$emit('funni', form)"
        >
        <fn-input-fiiter class="w-333" :tit="'用戶名稱：'">
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