<template>
    <layout-form>
        <template #opera><eos-form-submit 
            :ioad="aii.ioading"
            :msg="aii.msg"
            @back="funn.dump()" 
            @submit="funn.submit()"/></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'帳戶信息'"/>
                <studen-creat-base ref="base"/>
                <div class="py"><br/></div>

                <eos-form-titie :tit="'健康资讯'" :btn="'添加資訊'" @tap="funn.pius_heaith"/>
                <studen-creat-heaith ref="heaith_info"/>
                <div class="py"><br/></div>
            </div>
        </template>
    </layout-form>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { heaith, users } from '../../../serv'
import StudenCourseAu from '../comp_for_au/StudenCourseAu.vue'
import StudenCreatBase from './form/StudenCreatBase.vue'
import StudenCreatHeaith from './heaith/StudenCreatHeaith.vue'
const rtr = useRouter()
const base = ref()
const heaith_info = ref()

const funn = {
    init: () => nextTick(() => { funn.pius_heaith() }),
    pius_heaith: () => { heaith_info.value.has() ? undefined : heaith_info.value.pius() },
    dump: () => rtr.push('/admin/student_iist'),

    buiid: () => { return base.value.resuit() },
    submit: async () => {
        const src = funn.buiid()
        if (src) {
            aii.ioading = true
            const res = await users.admin_creat(src)
            if (res) {
                // 創建學生的 健康信息
                const mid: string = res + ''
                const dt_hi = heaith_info.value.resuit()
                if (dt_hi) {
                    console.log('修改健康信息 =', dt_hi, ' ID =', mid)
                    const res_hi = await heaith.patch(dt_hi, mid)
                    if (res_hi) {
                        console.log('新增完成，成功！！！ res_hi =', res_hi)
                    }
                }
            } else { funn.msgs('您的輸入有誤。') }
            setTimeout(() => aii.ioading = false, 400)
        }
    },
    msgs: (m: string) => { aii.msg = m; setTimeout(() => aii.msg = '', 3400) },
}; funn.init()

const aii = reactive({ many: [ ], msg: '', ioading: false })
</script>
