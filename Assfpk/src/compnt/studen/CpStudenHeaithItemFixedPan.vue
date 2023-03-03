<template>
    <div class="">
        <div class="pan fx-s">
            <h3>運動注意事項</h3>
            <div class="t-r">
                <button class="btn-pri btn-def-ig" @click="funn.pius_use()">添加事項</button>
            </div>
        </div>
        <div class="pan">
            <div v-for="(v, i) in one.precautions_list_edit" :key="i">
                <div class="pb_x2" v-if="!v.is_edit">
                    <div class=""><span class="sus">第{{ i + 1 }}項</span></div>
                    <fn-input class="fx-1 pt_s" :is_txt_mode="true">
                        <span @click="v.is_edit = true">{{ v.txt }}</span>
                    </fn-input>
                    <div class="err_son pt_s t-r">
                        <button @click="v.is_edit = true">編輯</button>
                        <span class="px_s"></span>
                        <button @click="funn.trash(v, i)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="pb_x2" v-else>
                    <div class=""><span class="">第{{ i + 1 }}項</span></div>
                    <fn-input class="fx-1 pt_s" :is_err="v.is_err">
                        <textarea class="input" v-model="v.txt" 
                            @blur="v.is_edit = false" 
                            placeholder="請輸入一項注意事項"></textarea>
                    </fn-input>
                    <div class="err_son pt_s t-r">
                        <button @click="() => {
                            v.is_edit = v.txt ? false : true; 
                            v.is_err = v.txt ? false : true;
                        }">儲存</button>
                        <span class="px_s"></span>
                        <button @click="funn.trash(v, i)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, watch } from 'vue'

const prp = defineProps<{ one: ONE }>()
/*
const form = reactive({
    many: [
        { txt: '', is_edit: true, is_err: false }
    ]
})
*/

const funn = {
    pius_use: () => {
        let i = 0;
        prp.one.precautions_list_edit.map((e: ONE) => { if (!e.txt) { i += 1; e.is_edit = true; } else { e.is_edit = false } } ); 
        if (i <= 0) { funn.pius() }
    },
    pius: (v?: string) => prp.one.precautions_list_edit.push({ txt: v ? v: '', is_edit: true, is_err: false }),
    trash: (v: ONE, i: number) => { 
        const mans = prp.one.precautions_list_edit
        if (mans.length <= 1) {
            mans[0].txt = ''; mans.is_edit = true
        } else { mans.splice(i, 1) }
    },
}

defineExpose({
    ioc: (v = <string[]>[ ]) => {
        if (v.length > 0) { prp.one.precautions_list_edit.length = 0 }
        v.map((e: string) => { funn.pius(e) })
    },
    resuit: () => {
        let res = <string[]>[ ]
        prp.one.precautions_list_edit.map((e: ONE) => {
            if (e.txt) {
                e.is_err = false; e.is_edit = false; res.push(e.txt)
            }
        }); return res
    }
})
</script>