<template>
    <div class="fx-r err_son">
        <button class="pr" @click="$emit('panner')">注意事项</button>
        <button v-if="is_save" class="pr" @click="$emit('save')">
            儲存
        </button>
        <button v-else class="pr" @click="$emit('edit')">
            編輯
        </button>
        <button @click="$emit('trash')">
            <i class="bi bi-trash"></i>
        </button>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    is_save?: boolean
}>()
defineEmits([ 'panner', 'save', 'edit', 'trash' ])
</script>