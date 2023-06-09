<template>
    <div class="pb_x2">
        <div class="br_s fx-l cccc-card-inine">
            <div class="cccc-choise">
                <slot></slot>
            </div>
            <div class="w-15 w-20-p cccc-cover">
                <fn-img class="ratio_16x9 br_s" :src="ser_course.cover(one)"/>
            </div>
            <div class="pl_x2">
                <p class="t-elip_x2 cccc-name pr h5">
                    <span v-if="one && one.course_name">{{ one.course_name }}</span>
                    <span v-else class="err">(未選擇任何課程)</span>
                </p>
                <div class="pt fs_s" v-if="one && one.course_name">
                    <p>
                        課程價格: {{ ser_course.price(one) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ser_course } from '../../../../air/strapi/front';

import { reactive } from 'vue'
defineEmits([ 'choise' ])
const prp = defineProps<{ one: COURSE }>()
</script>