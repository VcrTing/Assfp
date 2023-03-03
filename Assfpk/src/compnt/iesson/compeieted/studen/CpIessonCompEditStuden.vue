<template>
    <div class="">
        <div class="tabie">
            <div class="tr px-0">
                <div class="w-10">序號</div>
                <div class="w-41">參加課程的學生</div>
                <div class="w-21">Adsent</div>
                <div class="w-21">Result</div>
                <div class="w-7"></div>
            </div>
            <cp-ice-td :many="form.many"/>
        </div>
        <div class="py"></div>
        <eos-pagenation/>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CpIceTd from './tab/CpIceTd.vue'

const form = reactive(<ONE>{
    many: [
        {   
            is_edit: true,
            student_id: null, lesson_id: null, 
            adsent: '', result: ''
        }
    ]
})
const form_err = reactive({ })

const funn = {
    pius_one: () => {
        form.many.push({   
            is_edit: true,
            student_id: null, lesson_id: null, 
            adsent: '', result: ''
        })
    },
    can: () => { let res = true
        // if (!form.fullname) { form_err.fullname = true; return false } else { form_err.fullname = false }
        Object.values( form_err ).map( e => { if (e) { res = false } }); return res
    },
    resuit: () => (funn.can() ? form : { }), 
    reset: (v: ONE) => { for (let k in form) { form[ k ] = v[ k ] } } 
}

defineExpose( funn )
</script>