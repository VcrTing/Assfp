<template>
    <div class="ip-wrap">
        <h4 v-if="tit">
            {{ tit }}&nbsp;
            <div v-if="need" class="d-ib err fs_s pt_s">*</div>
        </h4>
        <nav :class="{ 'input-err': is_err, 'pt_s': tit }">
            <slot v-if="!is_txt_mode"></slot>
            <div v-else class="input input-txt-mode">
                <slot></slot>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    tit?: string,
    is_err?: boolean,
    need?: boolean,
    is_txt_mode?: boolean
}>()
</script>

<style lang="sass" scoped>
.input-txt-mode
    border-color: transparent
</style>