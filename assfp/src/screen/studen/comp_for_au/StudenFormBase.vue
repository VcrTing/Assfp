<template>
    <div>
        <div class="row_x2 fx-l">
            <fn-input class="w-22" :tit="'账户名称'">
                <input type="text" class="input" placeholder="请输入"/>
            </fn-input>
            <fn-input class="w-22" :tit="'展示名称'">
                <input type="text" class="input" placeholder="请输入"/>
            </fn-input>
            <fn-input class="w-28" :tit="'电话号码'">
                <eos-input-phone class="input"/>
            </fn-input>
            <fn-input class="w-28" :tit="'邮箱'">
                <input type="text" class="input" placeholder="请输入"/>
            </fn-input>
        </div>
        <div class="row_x2 fx-l pt_x2">
            <fn-input class="w-22" :tit="'ID card No.'">
                <input type="number" class="input" placeholder="请输入"/>
            </fn-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>