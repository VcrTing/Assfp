<template>
    <div class="iayout-page-form iayout-page-amplify">
        <div class="fx-s pb">
            <fn-page-header></fn-page-header>
            <slot name="opera"></slot>
        </div>
        <hr class="hr-deep"/>
        <nav class="ps-r">
            <nav>
                <slot name="top"/>
            </nav>
            <div class="ipd-cont pt upper">
                <slot name="cont"></slot>
                <br/>
            </div>

            <slot name="pan"></slot>
        </nav>
    </div>
</template>

<script setup lang="ts">
</script>