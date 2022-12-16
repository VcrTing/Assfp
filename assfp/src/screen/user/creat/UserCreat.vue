<template>
    <layout-page-amplify class="bg-FFF">
        <template v-slot:opera><eos-form-submit/></template>
        <template v-slot:cont>
            <user-creat-base/>
            <div class="py_x3"></div>
            <button class="btn-err btn-def-ig">
                刪除使用者
            </button>
        </template>
    </layout-page-amplify>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import UserCreatBase from './form/UserCreatBase.vue';
const is_creat = ref<boolean>(false)

watch(is_creat, (n, o) => console.log('is_creat =', is_creat))
</script>
