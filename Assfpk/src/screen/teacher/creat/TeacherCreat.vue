<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit/></template>
        <template v-slot:cont>
            <div class="panner">
                <eos-form-titie :tit="'編輯學生'"/>
                <teacher-creat-base/>
                <div class="py"><br/></div>
            </div>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import TeacherCreatBase from './base/TeacherCreatBase.vue';
</script>