<template>
    <layout-form>
        <template #opera><eos-form-submit/></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'基礎資料'"/>
                <teacher-creat-base/>
                <div class="py"><br/></div>
            </div>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import TeacherCreatBase from './base/TeacherCreatBase.vue';

const funn = {

}
</script>