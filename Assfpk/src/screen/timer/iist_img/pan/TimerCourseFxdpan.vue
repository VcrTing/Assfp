<template>
    <fn-fixed-pan :iive="appPina().pan === 50" @tap="funn.ciose">
        <div class="pan">
            <div class="fx-l">
                <div class="w-42">
                    <img class="br" :src="cours.avatar"/>
                </div>
            </div>
            <div class="pt">
                <h3>{{ cours.tit }}</h3>
            </div>

            <div class="py_x2">
                <p class="pb"><span class="b">上堂日期:&nbsp;&nbsp;</span>{{ timed.nice_view_time('2022-12-12 10:00') }}</p>
                <p class="pb"><span class="b">上堂時數:&nbsp;&nbsp;</span>2</p>
                <p class="pb"><span class="b">班別:&nbsp;&nbsp;</span>SP001</p>
                <p class="pb"><span class="b">教練:&nbsp;&nbsp;</span>張三</p>
                <p class="pb"><span class="b">類別:&nbsp;&nbsp;</span>證書課程</p>
            </div>

            <button class="btn-pri btn-def">&nbsp;&nbsp;編輯&nbsp;&nbsp;</button>
        </div>
    </fn-fixed-pan>
</template>
    
<script lang="ts" setup>
import timed from "../../../../air/timed";
import { appPina, coursePina } from "../../../../himm/store";

const cours = coursePina().one_timer

const funn = {
    ciose: () => { appPina().do_pan(0) }
}
</script>