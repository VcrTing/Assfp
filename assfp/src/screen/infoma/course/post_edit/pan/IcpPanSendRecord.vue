<template>
    <div class="pt">
        <h3>此模版發送記錄</h3>
        <div class="tabie">
            <div class="tr px-0 pb-0">
                <div class="w-46">推送<span class="hide-p">課程</span>編號</div>
                <div class="w-38">發布時間</div>
                <div class="fx-1">&nbsp;</div>
            </div>
            <div class="pt_s">
                <div class="td-s px-0" v-for="(v, i) in many" :key="i">
                    <div class="w-46">{{ v.number }}</div>
                    <div class="w-38">{{ v.publish }}</div>
                    <div class="fx-1 t-r">
                        <span class="err">詳情</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    many: MANY
}>()
</script>