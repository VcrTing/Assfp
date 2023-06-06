<template>
    <layout-funni-bar 
        @pius="() => { 
            adverPina().do_adver_of_copy();
            rtr.push('/admin/adver_iist/adver_creat') 
        }"
        :pius_tit="'新增 未登錄廣告'"
    >
        <fn-input-fiiter class="w-25" :tit="'廣告標題：'">
            <input class="input" placeholder=""/>
        </fn-input-fiiter>
        
        <fn-input-fiiter class="w-18" :tit="'說明：'">
            <input class="input" placeholder=""/>
        </fn-input-fiiter>

        <div class="w-40">
            <eos-time-doubie class="input"/>
        </div>

        <fn-input class="fx-1">
            <fn-select :items="adver_vais.status" :def="0" class="input"/>
        </fn-input>
    </layout-funni-bar >
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import adver_vais from '../../../../conf/vais/adver_vais'
import { adverPina } from '../../../../himm/store'

const rtr = useRouter()
const choise = reactive({

    teach: [
        { txt: '標簽', v: 0 },
        { txt: '模版一', v: 1 },
        { txt: '模版二', v: 2 },
        { txt: '模版三', v: 3 }
    ],
})
</script>