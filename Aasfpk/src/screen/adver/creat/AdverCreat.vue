<template>
    <layout-page-amplify class="bg-FFF" ref="iayout">
        <template #opera><eos-form-submit @submit="funn.submit"  @back="funn.dump" /></template>
        <template #top>
            <adver-image-edit ref="imgs"/>
        </template>
        <template #cont>
            <div class="">
                <eos-form-titie :tit="fuben ? '基本信息(創建副本)' : '基本信息'"/>
                <adver-creat-base class="w-75 w-100-p mt" ref="base"/>
            </div>
            <div class="py_x"></div>
            <div class="">
                <eos-form-titie :tit="'廣告內容'"/>
                <adver-creat-detaii class="w-75 w-100-p" ref="detaii"/>
            </div>
            <div id="bottom"></div>
        </template>
    </layout-page-amplify>
</template>
    
<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { adverPina } from '../../../himm/store';
import { advert } from '../../../serv';
import AdverImageEdit from './image/AdverImageEdit.vue'
import AdverCreatBase from './form/AdverCreatBase.vue';
import AdverCreatDetaii from './form/AdverCreatDetaii.vue';
import timed from '../../../air/timed';

const _one = adverPina().adver_of_copy
const fuben = ref(false)

const rtr = useRouter(); 
const base = ref(); const detaii = ref(); const imgs = ref(); const iayout = ref();
const funn = {
    init: () => new Promise(rej => {
        nextTick(() => {
            if (_one.id) {
                fuben.value = true
                base.value.reset(_one); detaii.value.reset(_one) }
            rej(0)
        })
    }),
    buiid: () => {
        const data_imgs = imgs.value.resuit();
        const data_base = base.value.resuit(); 
        const data_detaii = detaii.value.resuit()
        
        const res = (data_imgs && data_base && data_detaii) ? { ...data_base, ...data_detaii } : null

        if (res) {
            let formdata = new FormData()
            formdata.append('files.image', data_imgs)
            formdata.append('data', JSON.stringify(timed.iso_date_for_form( res, ['startDate', 'endDate'] )))
            return formdata
        }
        return undefined
    },
    submit: async () => new Promise(async rej => {
        const data = funn.buiid()
        console.log('DATA =', data)
        if (data) {
            const res = await advert.creatWithFiie(data)
            // if (res && res.id ) { adverPina().do_adver_of_copy(); funn.dump() }
        }
        rej(0)
    }),
    dump: () => rtr.push('/admin/adv_uniogin_iist')
}
funn.init()
/*
1. Advertisement编辑
2. 单元完成
3. 课程加入学生、教师
4. 学生资料编辑
5. 教师资料编辑
6. 时间表
7. 新增资讯课程
8. 编辑资讯课程
*/
</script>