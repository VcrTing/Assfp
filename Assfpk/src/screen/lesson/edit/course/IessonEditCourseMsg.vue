<template>
    <div class="fx-l">
        <div class="w-26 w-30-p pr_x4">
            <img :src="one.course_shop_url"/>
        </div>
        <div class="fx-1">
            <h2>{{one.course_name}}</h2>
            <div class="pt">
                <div>
                    開課時間:&nbsp;{{ timed.view_time(one.start_date) }}
                </div>
                <div>
                    結束時間:&nbsp;{{ timed.view_time(one.end_date) }}
                </div>
                <!--
                <div class="pt_s">
                    單元數量:&nbsp;{{ iessonL() }}
                </div>
                -->
            </div>
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import timed from '../../../../air/timed';
const prp = defineProps<{ one: COURSE }>()
const iessonL = () => {
    const iss: ONE = prp.one.lessons
    if (iss && iss.data) { return iss.data.length }
    return 0
}
</script>