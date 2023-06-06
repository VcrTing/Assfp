import { defineStore } from 'pinia'

export const adverPina = defineStore("adverPina", {
    state: () => ({
        adver_of_edit: <ADVER>{ },
        adver_of_copy: <ADVER>{ }
    }),
    actions: {
        do_adver_of_copy(v = <ADVER>{ }) { this.adver_of_copy = v },
        do_adver_of_edit(v = <ADVER>{ }) { this.adver_of_edit = v },
    },
    getters: {
        
    },
}); 