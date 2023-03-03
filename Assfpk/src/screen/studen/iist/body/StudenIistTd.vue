<template>
    <div class="w-8 pr">
        <div class=""> 
            <img class="td-img" :src="ser_student.cover( one )"/>
        </div>
    </div>
    <div class="w-18 pr">{{ one.firstname }}</div>
    <div class="w-11 pr">{{ one.lastname }}</div>
    <div class="w-14">{{ ser_student.phone( one ) }}</div>
    <div class="w-25">{{ one.email }}</div>
    <div class="w-7">{{ ser_student.sex( one ) }}</div>
    <div class="w-10">{{ ser_student.country( one ) }}</div>
    <div class="w-7">
        <eos-tabie-edit @tap="() => {
                studenPina().do_one(one)
                rtr.push('/admin/student_iist/edit')
            }"/>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ser_student } from '../../../../air/strapi/front'
import { studenPina } from '../../../../himm/store'
const rtr = useRouter()

defineProps<{
    i: number,
    one: STUDENT
}>()
</script>