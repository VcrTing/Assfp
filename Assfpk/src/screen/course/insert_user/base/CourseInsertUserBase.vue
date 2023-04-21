<template>
    <div class="f-row">
        <div class="w-24">
            <img class="br" :src="ser_course.cover( one )"/>
        </div>
        <div class="w-4">
            &nbsp;
        </div>
        <div class="fx-1">
            <h3 class="pb">{{ one.course_name }}</h3>
            <div>
                開課時間: {{ timed.view_time( one.start_date, true) }}
            </div>
            <div>
                結課時間: {{ timed.view_time( one.end_date, true) }}
            </div>
            <div>
                類別: {{ ser_course.course_type( one ) }}
            </div>
            <div>
                單元數量: {{ ser_course.iesson_num( one ) }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { ser_course } from '../../../../air/strapi/front'
import timed from '../../../../air/timed';
const prp = defineProps<{ one: COURSE }>()
const cate = ref()
const init = () => { const one = prp.one;
    const cates: CATEGORY[] = one.course_categories ? one.course_categories : [ ]
    const _cat: CATEGORY = cates.length > 0 ? cates[ 0 ] : <CATEGORY>{ }
    // _cat.id ? cate.value.ioc( _cat.id ) : undefined;
}
nextTick(init)
// const img = ref<string>('https://img2.baidu.com/it/u=1239266471,3599012891&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')
        
</script>