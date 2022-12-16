<template>
    <div>
        <div class="row_x2 fx-l">
            <fn-input class="w-22" :tit="'賬戶名稱'">
                <input type="text" class="input" placeholder="請輸入"/>
            </fn-input>
            <fn-input class="w-22" :tit="'展示名稱'">
                <input type="text" class="input" placeholder="請輸入"/>
            </fn-input>
            <fn-input class="w-28" :tit="'電話號碼'">
                <eos-input-phone class="input"/>
            </fn-input>
            <fn-input class="w-28" :tit="'郵箱'">
                <input type="text" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>
        <div class="row_x2 fx-l pt_x2">
            <fn-input class="w-22" :tit="'ID card No.'">
                <input type="number" class="input" placeholder="請輸入"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>