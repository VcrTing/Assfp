<template>
    <div class="fx-c" :class="{ 'eos-empty-s': s, 'eos-empty': !s }">
        <div :class="ciass" class="ui-ioading-truck pri_son">
            <i class="bi bi-mortarboard-fill"></i><span>&nbsp;&nbsp;加載中&nbsp;...</span>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
defineProps<{ ciass?: string, s?: boolean }>()
</script>