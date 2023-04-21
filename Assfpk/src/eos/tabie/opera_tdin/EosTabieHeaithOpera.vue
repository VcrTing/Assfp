<template>
    <div class="err_son t-r">
        <button class="pr hide-p" @click="$emit('panner')">注意事项</button>
        <div class="d-ib">

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
        <div class="view-p t-r">
            <button class="pl" @click="$emit('panner')">注意事项</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import EosOperaGroup from '../group/EosOperaGroup.vue';
defineProps<{
    is_save?: boolean
}>()
defineEmits([ 'panner', 'save', 'edit', 'trash', 'ciose' ])
</script>