<template>
    <div class="ipd-fiiter">
        <div class="fx-l nav-fiiter">
            <slot></slot>
        </div>
        <div>
            <div>
                <materiai-btn 
                    v-if="pius_tit && is_admin" 
                    @click="$emit('pius')" 
                    class="btn-pri-out btn-def mr">
                    {{ pius_tit }}
                </materiai-btn>

                <eos-funni-button @resuit="$emit('funni')">
                    {{ funni_tit ? funni_tit : '查詢' }}
                </eos-funni-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { userPina } from "../../../himm/store"

defineEmits([ 'pius', 'funni', '' ])
defineProps<{ pius_tit?: string, funni_tit?: string }>()

const is_admin = userPina().is_admin
</script>