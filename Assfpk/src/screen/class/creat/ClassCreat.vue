<template>
    <layout-form>
        <template v-slot:opera><eos-form-submit /></template>
        <template v-slot:cont>
            <div class="panner">
                <eos-form-titie :tit="'班別信息'"/>
                <class-form-base/>
                <div class="py"><br/></div>
                <eos-form-titie :tit="'班別學生列表'" :btn="'添加學生'" @tap="is_creat = true"/>
                <div class="py_s"></div>
                <class-studen-iist :mode_txt="'CREAT'" ref="csi">
                    <div v-if="is_creat" class="px_x2"><cp-studen-au @ciose="is_creat = false"/></div>
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

const is_creat = ref<boolean>(false)
        
watch(is_creat, (n, o) => console.log(''))
</script>