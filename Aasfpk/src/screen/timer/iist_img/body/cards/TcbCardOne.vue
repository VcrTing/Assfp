<template>
    <div class="tcb-card-one">
        <nav>
            <div class="tcb-card-cover hand" @click="funn.open">
                <img :src="ser_course.cover(course)"/>
            </div>
            <p class="tcb-card-named hand t-elip_x3" @click="funn.open">
                {{ iesson.name }}
            </p>
            <div class="tcb-card-timed">
                <span>
                    {{ timed.view_hour(iesson.startTime) }}
                </span>
                <span>-</span>
                <span>
                    {{ timed.view_hour(iesson.endTime) }}
                </span>
            </div>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import { ser_course } from '../../../../../air/strapi/front'
import timed from '../../../../../air/timed'
import { appPina, coursePina } from '../../../../../himm/store'
const prp = defineProps<{ course: COURSE, iesson: IESSON }>()

const funn = {
    open: () => {
        coursePina().do_one_timer( prp.iesson )
        appPina().do_pan(50)
    }
}
</script>