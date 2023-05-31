import { defineStore } from 'pinia'

export const coursePina = defineStore("coursePina", {
    state: () => ({
        categories: <CATEGORY[]>[ ],

        one: <COURSE>{ },

        one_timer: <ONE> { },

        iesson_of_edit: <ONE>{ }
    }),
    actions: {
        do_one(v = <COURSE>{ }) { this.one = v },
        do_one_timer(v = <ONE>{ }) { this.one_timer = v },
        do_categories(cates: CATEGORY[]) { this.categories = cates ? cates : [ ]; console.log('CATE =', cates) },

        do_iesson_of_edit(v = <ONE>{ }) { this.iesson_of_edit = v }
    },
    getters: {
        
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'assfp_course_',
                storage: sessionStorage, 
                paths: [ 'categories', 'one' ]
            }
        ]
    }
}); 