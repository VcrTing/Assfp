<template>
    <div class="pt">
        <div class="td-of-form px-0">
            <div class="w-10 sus">{{ i }}</div>
            <div class="w-41">
                <!--
                <fn-input :is_err="form_err.userid">
                    <input class="input" v-model="one.userid" placeholder="輸入後按下回車"/>
                </fn-input> -->
                <eos-user-seiect @resuit="(v: STUDENT) => {
                    one.student_id = v.id
                }"/>
            </div>
            <div class="w-21">

                <fn-input :is_err="form_err.adsent">
                    
                    <input class="input" type="number" v-model="one.adsent" placeholder="suspend"/>
                </fn-input>
            </div>
            <div class="w-21">
                
                <fn-input :is_err="form_err.result">
                    
                    <input class="input" type="number" v-model="one.result" placeholder="suspend"/>
                </fn-input>
            </div>
            <nav class="w-7 t-r">
                <eos-tabie-save @tap="funn.save"/>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineEmits, defineProps } from 'vue'
const emt = defineEmits(['save'])
const prp = defineProps<{ one: ONE, i: number }>()

const funn = {
    can: () => { let res = true; const one = prp.one
        if (!one.student_id) { form_err.student_id = true; return false } else { form_err.student_id = false }
        if (!one.result) { form_err.result = true; return false } else { form_err.result = false }
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    },
    save: () => { funn.can() ? emt('save', prp.one) : undefined }
}

const form_err = reactive({
    student_id: false, lesson_id: false, 
    adsent: false, result: false
})
</script>