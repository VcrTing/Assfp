<template>
    <layout-page-amplify class="bg-FFF">
        <template v-slot:opera><eos-page-buttons/></template>
        <template v-slot:cont>
            <layout-post-cont>
                <template v-slot:cont>
                    <eos-post-head
                        :tit="'學院的教師們，今天中午過來教堂集合'"
                        :time="'2022-12-12'"
                        :author="'Qiong'"
                    >
                        CONTENT AAA
                    </eos-post-head>
                </template>
                <template v-slot:pan>
                    <infoma-course-post-pan/>
                </template>
            </layout-post-cont>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import InfomaCoursePostPan from './pan/InfomaCoursePostPan.vue';
import { ref, watch } from 'vue'
const is_creat = ref<boolean>(false)

watch(is_creat, (n, o) => console.log('is_creat =', is_creat))
</script>
