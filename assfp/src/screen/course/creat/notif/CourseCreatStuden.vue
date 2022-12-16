<template>
    <div class="f-row">
        <div class="w-333">
            <fn-input :tit="'課程編號'" class="mb_x">
                <input class="input" placeholder="請輸入" />
            </fn-input>
        </div>
        <div class="fx-1"></div>
        <div class="w-100">
            <cp-course-creat-studen/>
        </div>
    </div>
</template>

<script setup lang="ts">
import CpCourseCreatStuden from '../../../../compnt/course/creat/studen/CpCourseCreatStuden.vue';
</script>