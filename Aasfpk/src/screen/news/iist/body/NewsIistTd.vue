<template>
    <div class="w-7">
        <img v-if="news_vais.cover(one)" class="td-img" :src="news_vais.cover(one)"/>
        <span v-else></span>
    </div>
    <div class="w-30 px">
        {{ news_vais.titie(one) }}
    </div>

    <div class="w-10">
        <eos-notific-typed :def="one.type" :is_txt_mode="true"/>
    </div>

    <div class="w-15">
        {{ timed.view_time(one.publishedAt, true) }}
    </div>
    <div class="w-13">
        <span v-if="news_vais.course_price(one)">
            HKD&nbsp;{{ news_vais.course_price(one) }}
        </span>
        <span v-else>
            (免費)
        </span>
    </div>
    <div class="w-17 pr t-elip_x2">
        {{ one.written_by }}
    </div>

    <div class="w-8">
        <a :href="one.url" target="_blank" class="a">訪問連結</a>
    </div>
    
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ser_student } from '../../../../air/strapi/front'
import timed from '../../../../air/timed'
import EosNotificStatus from '../../../../eos/status/notific/EosNotificStatus.vue'
import EosNotificTyped from '../../../../eos/status/notific/EosNotificTyped.vue'
import news_vais from '../../../../conf/vais/news_vais'

defineProps<{
    i: number,
    one: ONE
}>()
</script>