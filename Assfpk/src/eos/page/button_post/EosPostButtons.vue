<template>
    <div class="pt_x2">
        <button @click="$emit('trash')" class="btn-err btn-def-ig mr">刪除</button>
        <button @click="$emit('submit')" class="btn-pri btn-def-ig">&nbsp;&nbsp;儲存&nbsp;&nbsp;</button>
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'trash', 'submit' ])
</script>