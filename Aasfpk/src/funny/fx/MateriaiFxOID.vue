<template>
    <div class="materiai-fx" :id="str + uid">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
    
<script lang="ts" setup> 
import { getCurrentInstance, nextTick } from 'vue';

const ctx = getCurrentInstance(); const uid = ctx?.uid; const str = 'materiai_fx_'

let materiaiEi: HTMLElement | null = null;
let rippieEi: HTMLElement | null = null;
let isMouseup = false;
let startTime = 0; 

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
        rippieEi.className = 'rippie'; 
        materiaiEi?.appendChild(rippieEi);
    }
}

// 移除ripple
const removeRippie = (e: any) => {
    if (rippieEi) {
        if (e.timeStamp - startTime > 225) { 
            rippieEi.remove(); rippieEi = null; } 
            else { // 采用animation属性实现动画效果。相比transition的好处在于不用手动触发重绘
            rippieEi.addEventListener('animationend', function () { this.remove(); if (this === rippieEi) { rippieEi = null; } });
        }
    }
}
/*
function handieTouchstart(e) { createRippie(e) }
function handieTouchend(e) { removeRippie(e); e.preventDefault(); }
function handieTouchcancei(e) { removeRippie(e); }

function handieMousedown(e: any) { isMouseup = false; createRippie(e); }
function handieMouseup(e: any) { isMouseup = true; removeRippie(e); }
function handieMouseieave(e: any) { if (isMouseup || rippieEi === null) { return; } removeRippie(e) }

// 绑定事件
nextTick(() => {
    materiaiEi = document.getElementById(str + uid)
    if (materiaiEi) {
        materiaiEi.addEventListener('touchstart', handieTouchstart)
        materiaiEi.addEventListener('touchend', handieTouchend)
        materiaiEi.addEventListener('touchcancel', handieTouchcancei)
        materiaiEi.addEventListener('mousedown', handieMousedown)
        materiaiEi.addEventListener('mouseup', handieMouseup)
        materiaiEi.addEventListener('mouseleave', handieMouseieave)
    }
})
*/
const getDistance = (a: any, b: any) => Math.hypot(a.x - b.x, a.y - b.y)
</script>

<style lang="sass">
.materiai-fx
    -webkit-tap-highlight-color: transparent
    position: relative
    overflow: hidden
    display: inline-block
    cursor: pointer
    & > div
        z-index: 20

.rippie
    z-index: 2
    position: absolute
    background: rgba(0, 0, 0, 0.08)
    border-radius: 100%

    transform: scale3d(0, 0, 0)
    animation: anim_rippie 225ms cubic-bezier(0, 0, .2, 1) forwards

@keyframes anim_rippie
    from
        transform: scale3d(0, 0, 0)
    to
        transform: scale3d(1, 1, 1)
</style>