import { defineStore } from 'pinia'
import news_vais from '../../conf/vais/news_vais';
import { POST_IAYOUTS } from '../../air/strapi/post/post_tempiate';
import strapi from '../../air/strapi';

export const newsPina = defineStore("newsPina", {
    state: () => ({
        news_of_review: <ONE>{ }
    }),
    actions: {
        do_news_of_review(v = <ONE>{ }) { 
            v.iayout_index = news_vais.layouToIndex(v)
            v.__iayout = POST_IAYOUTS[v.iayout_index]

            v.moodle_course = strapi.dataed(v.moodle_course)
            v.media = strapi.data(v.media)

            sessionStorage.setItem('aasfp_news_review', JSON.stringify(v))
            this.news_of_review = v 
            return true
        },
    },
    getters: {
        
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'pina_aasfp_net_news_',
                storage: sessionStorage, 
                paths: [ 'news_of_review' ]
            }
        ]
    }
}); 