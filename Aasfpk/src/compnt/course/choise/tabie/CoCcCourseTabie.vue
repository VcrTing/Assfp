<template>
    <div v-if="!me.ioading">
        
        <div v-if="me.many && me.many.length > 0">
            <div class="row_x2 fx-l ">
                <div class="w-20 w-25-p"
                    v-for="(v, i) in me.many" :key="i"
                >
                    <co-cc-course-card :one="v" :choise="me.course_id" @choise="funn.choiseOne"/>
                </div>
            </div>
        </div>
        <div v-else>
            <eos-empty/>
        </div>
    </div>
    <eos-ioading v-else/>
</template>
    
<script lang="ts" setup>
import EosEmpty from '../../../../eos/tabie/EosEmpty.vue';
import CoCcCourseCard from '../card/CoCcCourseCard.vue';
// import { reactive } from 'vue'
defineEmits([ 'choise' ])
defineProps<{ me: ONE, funn: ONE }>()
</script>