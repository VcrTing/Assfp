<template>
    <!-- 模板一 -->
    <div v-if="temp == 1" class="w-66 w-75-p">
        <div>
            <fn-input-fat :tit="'內容'">
                <textarea v-model="one.cont_1" class="input" rows="5" placeholder="請輸入廣告的內容"></textarea>
            </fn-input-fat>
        </div>
        <div class="py w-50 w-666-p">
            <cp-adver-img-edit :form="one" :ky="'img_1'"/>
        </div>
        <div class="pb_x2 pt">
            <button class="btn-pure">
                <i class="bi bi-upload"></i>
                <span class="pl_s">上傳課程列表</span>
            </button>
            <div class="pt fx-l">
                <p class="a">{{ one.course_iist_fiie }}</p>
                <span class="pl_x2 err"><i class="bi bi-trash"></i></span>
            </div>
        </div>
        <div>
            <fn-input-fat>
                <textarea v-model="one.cont_2" class="input" rows="10" placeholder="請輸入"></textarea>
            </fn-input-fat>
        </div>
    </div>

    <!-- 模板二 -->
    <div v-if="temp == 2" class="w-66 w-75-p">
        <div>
            <fn-input-fat :tit="'內容'">
                <textarea v-model="one.cont_1" class="input" rows="10" placeholder="請輸入廣告的內容"></textarea>
            </fn-input-fat>
        </div>
        <div class="py w-50 w-666-p">
            <cp-adver-img-edit :form="one" :ky="'img_1'"/>
        </div>
        <div class="pb_x2 pt">
            <button class="btn-pure">
                <i class="bi bi-upload"></i>
                <span class="pl_s">上傳課程列表</span>
            </button>
            <div class="pt fx-l">
                <p class="a">{{ one.course_iist_fiie }}</p>
                <span class="pl_x2 err"><i class="bi bi-trash"></i></span>
            </div>
        </div>
        <div>
            <fn-input-fat>
                <textarea v-model="one.cont_2" class="input" rows="5" placeholder="請輸入"></textarea>
            </fn-input-fat>
        </div>
    </div>

    <!-- 模板三 -->
    <div v-if="temp == 3" class="w-82 w-100-p">
        <h3 class="pb_s">內容</h3>
        <div class="fx-s row_x2">
            <div class="w-50">
                <fn-input-fat>
                    <textarea v-model="one.cont_1" class="input" rows="5" placeholder="請輸入"></textarea>
                </fn-input-fat>
                <cp-adver-img-edit :form="one" :ky="'img_1'"/>
                <div class="pb_x2 pt">
                    <button class="btn-pure">
                        <i class="bi bi-upload"></i>
                        <span class="pl_s">上傳課程列表</span>
                    </button>
                    <div class="pt fx-l">
                        <p class="a">{{ one.course_iist_fiie }}</p>
                        <span class="pl_x2 err"><i class="bi bi-trash"></i></span>
                    </div>
                </div>
            </div>
            <div class="w-50">
                <fn-input-fat>
                    <textarea v-model="one.cont_2" class="input" rows="16" placeholder="請輸入"></textarea>
                </fn-input-fat>
                <cp-adver-img-edit :form="one" :ky="'img_2'"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
// import CpAdverImgEdit from "../../../../compnt/adver/img/CpAdverImgEdit.vue";
const prp = defineProps<{
    temp: number,
    one: ONE
}>()
</script>