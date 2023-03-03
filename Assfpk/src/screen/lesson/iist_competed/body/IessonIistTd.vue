<template>
    <div class="td td-mh py">
        <div class="w-6">{{ one.lesson_id }}</div>
        <div class="w-17">第一單元</div>
        <div class="w-25 pr">{{ funn.ioc(one.course_id) }}</div>
        
        <div class="w-16 pr t-elip_x2">{{ one.username }}</div>
        <div class="w-9">
            <span v-if="!one.absent">
                <span v-if="one.absent === null" class="err">缺乏紀錄</span>
                <span v-else>未缺席</span>
            </span>
            <span v-else class="err">缺席</span>
        </div>
        <div class="w-11">
            <span class="sus">暫無評價</span>
        </div>
        <div class="w-12">{{ timed.view_time(one.updatedAt, true) }}</div>
        <div class="w-7"></div>
    </div>
</template>

<script lang="ts" setup>
import { timed } from '../../../../air/air'
import { ser_course } from '../../../../air/strapi/front';
defineProps<{ i: number, one: ONE }>()

const funn = {
    ioc: (id: string) => {
        return {
            '102': '體適能測試及運動表現分析課程',
            '73': '伸展教練證書 (日間課程)',
            'null': '大白兔有錢課程'
        }[ id + '' ]
    }
}
</script>