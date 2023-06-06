# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

登錄者:
    忘記密碼: Endpoint 未試 # 放在最後完成
    重置密碼: Endpoint 未試 # 放在最後完成
    修改密碼: Endpoint 未試 # 放在最後完成，需要 Stan 討論一下頁面的設計
    列表: 未完成，且出現了一些問題
    1.
        無法查詢出全部的用戶
    編輯登錄者的資料: 未完成，今日可以完成，如果 Endpoint 沒問題的話

課程: 
    新增  # 完成，但是無 filter 功能

學生:
    編輯資料（含健康資訊）: 未完成，今日可以完成，如果 Endpoint 沒問題的話

廣告:
    列表  # 完成，但是無 filter 功能
    新增: 未完成，Endpoint 有問題
    1. 
        Endpoint 無法加入圖片
    2. 
        Endpoint 中的 layout 參數 意義不明確
    編輯: 未完成，需要先完成廣告的新增
    預覽: 未完成，沒有這個 Endpoint，需先討論是否需要增加該 Endpoint

資訊及課程: 
    列表  # 完成，但是無 filter 功能
    新增: 未完成，Endpoint 有問題
    1.
        Endpoint 無法加入圖片
    編輯: 未完成，需要先完成資訊及課程的新增
    預覽: 未完成，沒有這個 Endpoint，需先討論是否需要增加該 Endpoint

Notification:
    列表  # 完成，但是無 filter 功能

時間表:
    列表  # 完成，但是無 filter 功能