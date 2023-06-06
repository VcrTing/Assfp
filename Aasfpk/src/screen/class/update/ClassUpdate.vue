<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit/></template>
        <template v-slot:cont>
            <div class="panner">
                <eos-form-titie :tit="'班別信息'"/>
                <class-form-base/>
                <div class="py"><br/></div>
                <eos-form-titie :tit="'班別學生列表'" :btn="'添加學生'"/>
                <div class="py_s"></div>
                <class-studen-iist :mode_txt="'EDIT'"/>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from 'vue'
import ClassFormBase from '../comp_for_au/ClassFormBase.vue'
import ClassStudenIist from '../comp_for_au/ClassStudenIist.vue'

</script>