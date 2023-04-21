<template>
    <div class="tcb-card-one">
        <nav>
            <div class="tcb-card-cover" @click="funn.open">
                <img :src="course.avatar"/>
            </div>
            <p class="tcb-card-named" @click="funn.open">
                {{ course.tit }}
            </p>
            <div class="tcb-card-timed">
                <span>
                    {{ timed.view_hour(course.startTime) }}
                </span>
                <span>-</span>
                <span>
                    {{ timed.view_hour(course.endTime) }}
                </span>
            </div>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import timed from '../../../../../air/timed'
import { appPina, coursePina } from '../../../../../himm/store'
const prp = defineProps<{ course: ONE }>()

const funn = {
    open: () => {
        coursePina().do_one_timer( prp.course )
        appPina().do_pan(50)
    }
}
</script>