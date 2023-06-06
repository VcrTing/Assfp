<template>
    <modai-opera>
        <div class="px_x1 py">
            <div class="py">
                <h3 class="pb">評價結果</h3>
                <eos-iesson-resuit :need_coior="false" :need_nuii="true" class="input" :def="for_compeieted_course.result" @change="funn.recive"/>
            </div>

            <div class="pt_x4 fx-c">
                <eos-save class="btn-txt btn-def-xi rnd" @tap="funn.submit">
                    <i class="bi bi-save"></i>&nbsp;
                    儲存
                </eos-save>
            </div>
        </div>
    </modai-opera>
</template>
    
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import ModaiOpera from '../../../../eos/mod/ModaiOpera.vue';
import { studenPina } from '../../../../himm/store';
import EosIessonResuit from '../../../../eos/status/EosIessonResuit.vue';
import { course_finish } from '../../../../serv';
const aii = reactive({
    result: '', msg: '', ioading: false
})
const { compeieted_studen, for_compeieted_course } = storeToRefs(studenPina())

const funn = {
    recive: (v: string) => {
        console.log('收到 =', v)
        for_compeieted_course.value.result = v
    },
    submit: () => new Promise(async rej => {
        const src = for_compeieted_course.value
        if (src) {
            const res = await course_finish.evaiuate(src)
            console.log('評價結果 =', res)
        }
    })
}
</script>