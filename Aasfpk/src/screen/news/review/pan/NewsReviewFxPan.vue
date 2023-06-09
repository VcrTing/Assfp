<template>
    <div v-if="news && news.id">
        <eos-post-txt-item :tit="'類別'">
            {{ news.type ? news_vais.typedTit[news.type] : '' }}&nbsp;
        </eos-post-txt-item>
        <eos-post-txt-item :tit="'推送課程編號'">
            {{ news_vais.course_shortcode(news) }}&nbsp;
        </eos-post-txt-item>
        <div class="py"></div>
        <eos-post-txt-item :tit="'發送內容'">
            {{ news_vais.message_content(news, aii.iang) }}&nbsp;
        </eos-post-txt-item>
        <div class="py"></div>
        <div v-if="news_vais.is_course(news)">
            <eos-post-txt-item :tit="'原價'">
                $&nbsp;{{ news_vais.course_original_price(news) }}&nbsp;
            </eos-post-txt-item>
            <eos-post-txt-item :tit="news_vais.is_member_price(news) ? '會員價' : '現價'">
                $&nbsp;{{ news_vais.course_price(news) }}&nbsp;
            </eos-post-txt-item>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ser_course } from '../../../../air/strapi/front';
import news_vais from '../../../../conf/vais/news_vais';

defineProps<{ news: ONE, aii: ONE }>()
</script>