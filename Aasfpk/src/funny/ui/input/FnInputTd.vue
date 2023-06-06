<template>
    <div class="ip-wrap ip-wrap-td">
        <nav :class="{ 'input-err': is_err }">
            <slot v-if="!is_txt_mode"></slot>
            <div v-else class="input input-txt-mode">
                <slot></slot>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    is_err?: boolean,
    is_txt_mode?: boolean
}>()
</script>
