<template>
    <div class="iayout-page-form iayout-page-amplify">
        <div class="fx-s">
            <fn-page-header></fn-page-header>
            <slot name="opera"></slot>
        </div>
        <slot name="second"></slot>
        <hr class="hr-deep"/>
        <div class="ipd-cont upper">
            <slot name="cont"></slot>
            <br/>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>