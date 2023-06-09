<template>
    <div>
        <h3 class="py">內容</h3>
        <div>
            <div>
                <div class="row_x2 fx-s fx-wp fx-t" v-for="(v, k) in aii.layout" :key="k">
                    <div v-for="(iyt, i) in v" :key="i" :class="iyt.row_ciass">
                        
                        <div class="pb_x3" v-if="iyt.field == 'text'">
                            <div v-for="(item, k) in aii.iangTit" :key="k">
                                <fn-input-fat v-if="k == aii.iang" class="w-100" :is_err="me.showErr ? !iyt.v[aii.iang] : false">
                                    <textarea 
                                        type="text" v-model="iyt.v[aii.iang]" 
                                        class="input" :rows="iyt.rows" 
                                        :placeholder="'請輸入' + item"></textarea>
                                </fn-input-fat>
                            </div>
                        </div>
                        <div class="pb_x3" v-else>
                            <cp-adver-img-edit/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue';
import CpAdverImgEdit from '../../../../compnt/adver/img/CpAdverImgEdit.vue';
import EosPostTypedSeiect from '../../../../eos/post/seiect/EosPostTypedSeiect.vue';
import { edit } from '../../../../himm/hook';

const me = reactive({ showErr: false, pan: 0 })

const prp = defineProps<{ form: ONE, aii: ONE }>()

const funn = {
    can: () => {
        me.showErr = true; const src = prp.form.message_content
        for (const k in src) { if (!src[k]) { return k } } return true
    },
    err: () => {
        me.showErr = true;
    }
}

defineExpose(funn)
</script>