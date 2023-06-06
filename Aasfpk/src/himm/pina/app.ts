import { defineStore } from 'pinia'

export const appPina = defineStore("appPina", {
    state: () => ({
        // 1 = HTML MENU
        menu: 0,

        // 50 = 時間表課程
        pan: 0,

        MOD: 0,
    }),
    actions: {
        mod(m: number = 0) { this.MOD = m },
        do_mod(m: number = 0) { this.MOD = m },
        do_pan(m: number = 0) { this.pan = m},
        do_menu(m: number = 0) { this.menu = m}
    },
    getters: {
        
    },
}); 