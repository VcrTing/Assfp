<script lang="ts" setup>
defineProps<{ aii: ONE }>()
</script>
    
<template>
    <div v-if="!aii.ioading">
        <div class="studen-course-tabs" v-if="aii.many && aii.many.length > 0">
            <nav 
                @click="aii.now = i"
                class="py_s"
                v-for="(v, i) in aii.many" 
                :key="i"
                :class="{ 'sct-active': aii.now == i }" 
                >
                <div class="py_s">
                    {{ v.courseName }}
                </div>
            </nav>
        </div>
        <div class="studen-course-tabs" v-else>
            <nav class="py_s">
                <div class="fx-l py_s err">
                    (未報名任何課程)
                </div>
            </nav>
        </div>
    </div>
    <div class="studen-course-tabs" v-else>
        <nav class="py_s">
            <div class="fx-l py_s">
                課程加載中&nbsp;<ui-ioading/>
            </div>
        </nav>
    </div>
</template>