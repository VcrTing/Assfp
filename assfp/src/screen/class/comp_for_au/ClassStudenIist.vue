<template>
    <div>
        <nav class="pan px_x2 py">
            <div class="tabie">
                <div class="tr">
                    <div class="w-19">账户名称</div>
                    <div class="w-17">展示名称</div>
                    <div class="w-20">电话号码</div>
                    <div class="w-26">电邮</div>
                    <div class="w-12">ID card No.</div>
                    <div class="w-6"></div>
                </div>
                <csi-td :many="studs" :is_edit="true"/>

                <!--div class="px_x2 pb" v-if="mode_txt=='CREAT'"><cp-studen-au/></!--div-->
                <slot>
                    
                </slot>
            </div>
        </nav>
        <div class="py"></div>
        <eos-pagenation/>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import CpStudenAu from '../../../compnt/studen/CpStudenAu.vue'
import CsiTd from './td/CsiTd.vue'

const studs = reactive<any>([
    {   is_edit: false,
        id: 1, name: 'Lily Cure 001', display_name: '张三', phone: '99986666', phone_pfx: '864', email: 'bbbscecsaw@AASX.COM', id_card: 'CARD_00011' },
    {   is_edit: false, 
        id: 2, name: 'Lily Cure 002', display_name: '李四', phone: '99986698', phone_pfx: '834', email: 'bbbsce99ii@AASX.COM', id_card: 'CARD_00012' },
])
</script>

<style lang="sass" scoped>

</style>