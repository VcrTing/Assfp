import { defineStore } from 'pinia'

export const studenPina = defineStore("studenPina", {
    state: () => ({
        one: <STUDENT>{ },
    }),
    actions: {
        do_one(v = <STUDENT>{ }) { this.one = v },
    },
    getters: {
        
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'assfp_studen',
                storage: localStorage, 
                paths: [ 'one' ]
            }
        ]
    }
}); 