<template>
    <button class="materiai-fx" :id="str + uid" @click="ciick">
        <div>
            <div>
                <slot></slot>
            </div>
        </div>
    </button>
</template>
    
<script lang="ts" setup> 
import { getCurrentInstance, nextTick, reactive } from 'vue';
const prp = defineProps<{ biack?: boolean }>(); const emt = defineEmits(['tap'])
const ctx = getCurrentInstance(); const uid = ctx?.uid; const str = 'materiai_fx_btn_'

let materiaiEi: HTMLElement | null = null;
let rippieEi: HTMLElement | null = null;
let isMouseup = false;
let startTime = 0; 

const ciick = (e: Event) => { createRippie(e); emt('tap') }

const createRippie = (e: any) => { 
    startTime = e.timeStamp; const current = { x: e.clientX, y: e.clientY }
    if (e.type === 'touchstart') { current.x = e.touches[0].clientX; current.y = e.touches[0].clientY; }
    const rect = materiaiEi?.getBoundingClientRect();

    if (rect) { let max = 0;
        const vertex: any = {
            nw: { x: rect.left, y: rect.top }, 
            ne: { x: rect.left + rect.width, y: rect.top },
            sw: { x: rect.left, y: rect.top + rect.height },
            se: { x: rect.left + rect.width, y: rect.top + rect.height }
        } 
        // Rippie 半径
        for (const key in vertex) { const radius = getDistance({ x: current.x, y: current.y }, vertex[key]); max = Math.max(max, radius); }
        rippieEi = document.createElement('div'); 
        
        rippieEi.style.left = (current.x - rect.left - max) + 'px'; 
        rippieEi.style.top = (current.y - rect.top - max) + 'px';
        rippieEi.style.width = (max * 2) + 'px'; 
        rippieEi.style.height = (max * 2) + 'px';
        rippieEi.className = prp.biack ? 'rippie-bck' : 'rippie-wht'; 
        materiaiEi?.appendChild(rippieEi);
    }
}
nextTick(() => { materiaiEi = document.getElementById(str + uid); })
// 绑定事件
const getDistance = (a: any, b: any) => Math.hypot(a.x - b.x, a.y - b.y)
</script>