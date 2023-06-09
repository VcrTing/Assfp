<template>
    <!--
    <img v-if="!is_div" :src="is_api ? BASE + src : src"/>
    <div class="__ui_img" v-else :style="{
        'background': 'url(' + is_api ? BASE + src : src + ')',
        'background-size': 'cover',
        'background-position': 'center'
    }">
    
    </div>
    -->
    <div 
        class="__ui_img" 
        :style="{
            'background': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center'
        }" 
        :class="{ '__img_def': !src }"
    >
    </div>

</template>

<script lang="ts" setup>
import {BASE} from '../../../conf'
defineProps<{ src?: string }>()
</script>

<style lang="sass" scoped>
.__ui_img
    width: 100%
    height: 100%
.__img_def
    background: #f2f2f2 !important
</style>