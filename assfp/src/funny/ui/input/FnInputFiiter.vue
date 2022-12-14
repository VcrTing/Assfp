<template>
    <div>
        <div class="ui-ip-fiiter">
            <div class="" :class="_class" v-if="header">
                {{ header }}
                &nbsp;
            </div>
            <nav class="fx-1" :class="{ 'input-err': is_err }">
                <slot></slot>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        is_err: { type: Boolean, default: false },
        header: { type: String },
        _class: { type: String }
    },
}
</script>