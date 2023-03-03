<template>
    <div class="fx-l err_son">
        <button class="pr" @click="$emit('edit_iesson')">添加單元</button>
        <button class="pr" @click="$emit('edit_user')">教練/學生</button>
        <!--
        <button class="pr" @click="$emit('edit')">編輯</button>
        <button class="pr" @click="$emit('trash')">刪除</button>
        <button>創建副本</!--button-->
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'edit', 'trash', 'edit_user', 'edit_iesson' ])
</script>