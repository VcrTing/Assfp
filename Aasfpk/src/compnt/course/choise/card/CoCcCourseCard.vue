<template>
    <div class="pb_x2">
        <div class="cccc-card br_s">
            <div class="cccc-choise">
                <input class="hand" type="radio" name="_cccc" :value="one.moodle_id" v-model="choise"/>
            </div>
            <div class="" @click="$emit('choise', one.moodle_id)">
                <fn-img class="ratio_16x9 br_s" :src="ser_course.cover(one)"/>
            </div>
            <div class="pt pb_x2">
                <p class="t-elip_x2 cccc-name pr h5">
                    {{ one.course_name }}
                </p>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ser_course } from '../../../../air/strapi/front';

import { reactive } from 'vue'
defineEmits([ 'choise' ])
const prp = defineProps<{ one: COURSE, choise: ID }>()
</script>