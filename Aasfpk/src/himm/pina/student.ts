import { defineStore } from 'pinia'

export const studenPina = defineStore("studenPina", {
    state: () => ({
        one: <STUDENT>{ },

        compeieted_studen: <ONE>{},
        compeieted_course_id: '',
        compeieted_studen_id: '',
        for_compeieted_course: <ONE> {}
    }),
    actions: {
        do_one(v = <STUDENT>{ }) { this.one = v },

        do_for_compeieted_course(v = <ONE>{}) { this.for_compeieted_course = v },
        
        do_compeieted_studen(v = <ONE>{ }) { this.compeieted_studen = v },
        do_compeieted_course_id(v: ID) { this.compeieted_course_id = v + ''; },
        do_compeieted_studen_id(v: ID) { this.compeieted_studen_id = v + ''; },
    },
    getters: {
        
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'assfp_studen_',
                storage: sessionStorage, 
                paths: [ 'one' ]
            }
        ]
    }
}); 