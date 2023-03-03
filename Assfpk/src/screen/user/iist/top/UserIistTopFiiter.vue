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
    typed: [
        { txt: '類別', v: 0 },
        { txt: '教練證書', v: 1 }
    ],
    teach: [
        { txt: '授課方式', v: 0 },
        { txt: '一對一輔導', v: 1 }
    ],
})
</script>