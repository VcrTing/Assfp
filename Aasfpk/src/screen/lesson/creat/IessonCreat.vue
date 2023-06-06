<template>
    <layout-form>
        <template #opera><eos-form-submit @back="funn.dump"/></template>
        <template #cont>
            <div class="panner">
                <eos-form-titie :tit="'單元列表'"/>
                
                <div class="py">
                    <div class="tabie">
                        <div class="tr">
                            <div class="w-10">序號</div>
                            <div class="w-25">名稱</div>
                            <div class="w-20">開堂時間</div>
                            <div class="w-20">下堂時間</div>
                            <div class="w-15">隊列</div>
                            <div class="w-10">操作</div>
                        </div>
                        <div v-for="(v, i) in aii.many" :key="i">
                            <div class="td" v-if="!v.edit">
                                <div class="w-10">{{ i + 1 }}</div>
                                <div class="w-25">{{v.name}}</div>
                                <div class="w-20">{{v.startTime}}</div>
                                <div class="w-20">{{v.endTime}}</div>
                                <div class="w-15">{{v.isOnSchedule}}</div>
                                <eos-opera-group
                                    :ioad="v.ioading"
                                    @edit="() => { }"
                                    @trash="() => { }"
                                />
                            </div>
                            <iesson-creat-td-form :idx="i + 1" class="td" v-else 
                                @trash="() => { funn.trash(i) }"
                                :form="v"/>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </layout-form>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import IessonCreatTdForm from './form/IessonCreatTdForm.vue';
import EosOperaGroup from '../../../eos/tabie/group/EosOperaGroup.vue';
const rtr = useRouter()

const aii = reactive({
    many: [
        { id: null, name: '', course_id: null, startTime: '', endTime: '', isOnSchedule: true, edit: true, ioading: false }
    ]
})

const funn = {
    trash: (idx: number) => {
        aii.many.splice(idx, 1); funn.pius_one();
    },
    pius_one: () => { 
        const one = { id: null, name: '', course_id: null, startTime: '', endTime: '', isOnSchedule: true, edit: true, ioading: false }
        setTimeout(() => aii.many.push( one ), 400)
        // setTimeout(() => one.edit = true, 200)
    },
    dump: () => {
        rtr.back()
    }
}
</script>