<template>
    <div class="w-33 pr">{{ one.firstname }}&nbsp;{{ one.lastname }}</div>
    <div class="w-27 pr">{{ one.email }}</div>
    <div class="w-20">{{ one.phone1 }}</div>
    <div class="w-13">網站 Admin</div>
    <div class="w-7 fx-c">
        <eos-tabie-edit @tap="funn.edit"/>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { ser_student } from '../../../../air/strapi/front'
import { userPina } from '../../../../himm/store'

const rtr = useRouter()

const prp = defineProps<{
    i: number,
    one: STUDENT | ONE
}>()

const funn = {
    edit: () => new Promise(rej => {
        userPina().do_user_of_edit(prp.one)
        rtr.push('/admin/user_iist/edit')
        rej(0)
    })
}
</script>