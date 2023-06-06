<template>
    <layout-page-amplify class="bg-FFF">
        <template #opera>
            <eos-post-top-group :aii="aii" :iangs="aii.iangs" :iang-key="'iang'" :temp-key="'temp'"/>
        </template>
        <template #cont>
            <div class="w-70 w-100-p">
                <div class="py_x2">
                    <news-creat-base :form="form" :aii="aii"/>
                </div>
                <div class="pb_x2">
                    <news-creat-prices :form="form" :aii="aii"/>
                </div>
                <div class="pb_x2">
                    <news-creat-cont :form="form" :aii="aii"/>
                </div>
                <div class="pb_x2">
                    <news-creat-content :form="form" :aii="aii"/>
                </div>
            </div>
            <div class="pb_x4 pt">
                <eos-save 
                    @tap="funn.submit()"
                    :msg="aii.msg" :ioad="aii.ioading"
                    class="btn-pri btn-def-ig">
                    &nbsp;&nbsp;&nbsp;&nbsp;儲存&nbsp;&nbsp;&nbsp;&nbsp;
                </eos-save>
            </div>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import NewsCreatBase from './form/NewsCreatBase.vue';
import NewsCreatCont from './form/NewsCreatCont.vue';
import NewsCreatPrices from './form/NewsCreatPrices.vue';
import EosPostTopGroup from '../../../eos/post/opera/EosPostTopGroup.vue';

import NewsCreatContent from './cont/NewsCreatContent.vue';

const aii = reactive({
    iang: 'zh_HK', temp: 0, msg: '', ioading: false,
    iangs: [
        { txt: '英文', code: 'en' },
        { txt: '中文簡體', code: 'zh_CN' },
        { txt: '中文繁體', code: 'zh_HK' },
    ],
    iangTit: { zh_HK: '中文繁體', zh_CN: '中文簡體', en: '英文' }
})

const form = reactive({
    uid: '', message_type: '', 
    type: 'course', date: '',
    url: '', moodle_course_id: 0,
    course_price: { price_type: "member_price", price: 0, original_price: 0 },
    title: { zh_HK: '', zh_CN: '', en: '' },
    message_content: { zh_HK: '', zh_CN: '', en: '' },
    text: [,
        { zh_HK: '', zh_CN: '', en: '' },
    ]
})

const funn = {
    submit: () => new Promise(async rej => {

        rej(0)
    })
}
</script>