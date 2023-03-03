<template>
    <div class="pt">
        <div class="td-of-form px-0">
            <!--div class="w-10 sus">{{ i }}</-div-->
            <div class="w-31">
                
                <fn-input :is_err="form_err.name">
                    <input class="input" v-model="one.name" placeholder="單元名稱"/>
                </fn-input>
            </div>
            <div class="w-23">

                <fn-input :is_err="form_err.startTime">
                    <!--div class="fx-s">
                        <eos-time-choise class="input ip-time-td" ref="star" @resuit="(v: ONE) => {
                            one.startTime = v.time;    
                        }" :pchd="'結課時間'"/>
                        <div class="w-50">
                            <input class="input input-s" placeholder="HH:MM"/>
                        </div>
                    </div-->
                    <input class="input" v-model="one.startTime" placeholder="年-月-日 時:分"/>
                </fn-input>
            </div>
            <div class="w-23">
                
                <fn-input :is_err="form_err.endTime">
                    <!--div class="fx-s">
                        <eos-time-choise class="input ip-time-td" ref="end" @resuit="(v: ONE) => {
                            one.endTime = v.time;    
                        }" :pchd="'結課時間'"/>
                        <div class="w-50">
                            <input class="input input-s" placeholder="HH:MM"/>
                        </div>
                    </!--div>-->
                    <input class="input" v-model="one.endTime" placeholder="年-月-日 時:分"/>
                </fn-input>
            </div>
            <div class="w-16">
                
                <fn-input :is_err="false">
                    <!--input class="input" type="number" v-model="one.isOnSchedule" placeholder="suspend"/-->
                    <select v-model="one.isOnSchedule" class="input">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </fn-input>
            </div>
            <nav class="w-9 t-r" v-if="!ioad">
                <eos-tabie-save @tap="funn.save"/>
                <span class="px_s"></span>
                <eos-tabie-trash @tap="() => { }"/>
            </nav>
            <nav v-else class="w-9 t-r">
                <span class="sus">儲存中...</span>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { ref, reactive, defineEmits, defineProps, nextTick } from 'vue'
const emt = defineEmits(['save'])
// const star = ref()
// const end = ref()
const prp = defineProps<{ one: IESSON, i: number, ioad: boolean }>()

const funn = {
    can: () => { let res = true; const one = prp.one
        // one.endTime = end.value.resuit()
        // one.startTime = star.value.resuit()
        
        if (!one.startTime) { form_err.startTime = true; return false } else { form_err.startTime = false }
        if (!one.endTime) { form_err.endTime = true; return false } else { form_err.endTime = false }
        if (!one.name) { form_err.name = true; return false } else { form_err.name = false }

        try {
            one.startTime = moment(one.startTime).format('yyyy-MM-DD HH:mm')
        } catch(err) { form_err.startTime = true; return false }
        try {
            one.endTime = moment(one.endTime).format('yyyy-MM-DD HH:mm')
        } catch(err) { form_err.endTime = true; return false }

        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    },
    save: () => { funn.can() ? emt('save', prp.one) : undefined },
    reset: (v: IESSON) => {
        // v.startTime ? star.value.ioc(v.startTime) : undefined;
        // v.endTime ? end.value.ioc(v.endTime) : undefined;
    }
}

const form_err = reactive({
    name: false, startTime: false, endTime: false
})

// nextTick(() => { prp.one ? funn.reset(prp.one) : undefined; })
defineExpose(funn)
</script>