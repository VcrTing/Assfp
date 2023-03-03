<template>
    <layout-funni-bar-pure
        >
        <div class="fx-l">
            <h2>Oct.2022&nbsp;
            </h2>
            <div>
                <i class="bi bi-chevron-left"></i>
                <i class="bi bi-chevron-right"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
        </div>
        <fn-input-fiiter class="w-17 w-20-p" :tit="'年份'">
            <select class="input">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </fn-input-fiiter>
        <fn-input-fiiter class="w-17 w-20-p" :tit="'月份'">
            <select class="input">
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </fn-input-fiiter>
    </layout-funni-bar-pure >
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const rt = useRouter()
const form = reactive({
    typed: [
        { txt: '類別', v: 0 },
        { txt: '教練證書', v: 1 }
    ],
    teach: [
        { txt: '授課方式', v: 0 },
        { txt: '一對一輔導', v: 1 }
    ],
})
</script>