<template>
    <div class="w-7">
        <img v-if="notific_vais.cover(one)" class="td-img" :src="notific_vais.cover(one)"/>
        <span v-else></span>
    </div>
    <div class="w-22 pl">
        {{ notific_vais.titie(one) }}
    </div>

    <div class="w-10">
        <eos-notific-typed :def="one.type" :is_txt_mode="true"/>
    </div>

    <div class="w-14">
        {{ timed.view_time(one.createdAt, true) }}
    </div>
    <div class="w-16">
        {{ timed.view_time(one.real_push_date, true) }}
    </div>
    <div class="w-9">
        {{ one.written_by }}
    </div>

    <div class="w-7">
        <eos-notific-status :def="one.status" :is_txt_mode="true"/>
    </div>
    <div class="w-9">
        <eos-yes-no :def="one.has_read"/>
    </div>
    <div class="w-6 fx-r">
        <eos-tabie-edit @tap="funn.edit()"/>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ser_student } from '../../../../air/strapi/front'
import timed from '../../../../air/timed'
import EosNotificStatus from '../../../../eos/status/notific/EosNotificStatus.vue'
import EosNotificTyped from '../../../../eos/status/notific/EosNotificTyped.vue'
import notific_vais from '../../../../conf/vais/notific_vais'
import { useRouter } from 'vue-router'

const rtr = useRouter()

const prp = defineProps<{
    i: number,
    one: ONE
}>()

const funn = {
    edit: () => {
        rtr.push('/admin/notification_iist/edit_notific')
    }
}
</script>