<template>
    <layout-form>
        <template #opera><eos-form-submit /></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'班別信息'"/>
                <class-form-base/>
                <div class="py"><br/></div>
                <eos-form-titie :tit="'班別學生列表'" :btn="'添加學生'"/>
                <div class="py_s"></div>
                <class-studen-iist :mode_txt="'CREAT'" ref="csi">
                    <div class="px_x2"><cp-studen-au /></div>
                </class-studen-iist>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import CpStudenAu from '../../../compnt/studen/CpStudenAu.vue'
import ClassFormBase from '../comp_for_au/ClassFormBase.vue'
import ClassStudenIist from '../comp_for_au/ClassStudenIist.vue'
</script>