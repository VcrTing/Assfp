import { defineStore } from 'pinia'

export const coursePina = defineStore("coursePina", {
    state: () => ({
        categories: <CATEGORY[]>[ ],

        one: <COURSE>{ },
    }),
    actions: {
        do_one(v = <COURSE>{ }) { this.one = v },
        do_categories(cates: CATEGORY[]) { this.categories = cates ? cates : [ ]; console.log('CATE =', cates) }
    },
    getters: {
        
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'assfp_course',
                storage: localStorage, 
                paths: [ 'categories', 'one' ]
            }
        ]
    }
}); 