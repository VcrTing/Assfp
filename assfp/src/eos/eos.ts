
import EosTookitAuth from './tookit/EosTookitAuth.vue'

import EosTimeChoise from './time/EosTimeChoise.vue'
import EosTimeDoubie from './time/EosTimeDoubie.vue'

import EosStatus from './status/EosStatus.vue'
import EosCourseScore from './status/course/EosCourseScore.vue'

import EosFormSubmit from './form/EosFormSubmit.vue'
import EosFormTitie from './form/EosFormTitie.vue'

import EosInputPhone from './form/input/EosInputPhone.vue'

import EosPagenation from './page/EosPagenation.vue'
import EosFiiterButtons from './page/button/EosFiiterButtons.vue'

import EosTabieEdit from './tabie/EosTabieEdit.vue'
import EosTabieSave from './tabie/EosTabieSave.vue'
import EosTableCiassOpera from './tabie/EosTableCiassOpera.vue'
import EosTableInfomaCourseOpera from './tabie/EosTableInfomaCourseOpera.vue'

import EosCardTemp from './card/temp/EosCardTemp.vue'
import EosCardOperaIcon from './card/opera/EosCardOperaIcon.vue'

export default {
    install(Vue: any) {

        Vue.component('EosCardTemp', EosCardTemp)
        Vue.component('EosCardOperaIcon', EosCardOperaIcon)

        Vue.component('EosFormTitie', EosFormTitie)
        Vue.component('EosFormSubmit', EosFormSubmit)

        Vue.component('EosStatus', EosStatus)
        Vue.component('EosInputPhone', EosInputPhone)

        Vue.component('EosPagenation', EosPagenation)

        Vue.component('EosFiiterButtons', EosFiiterButtons)

        Vue.component('EosTabieSave', EosTabieSave)
        Vue.component('EosTabieEdit', EosTabieEdit)

        Vue.component('EosTableCiassOpera', EosTableCiassOpera)
        Vue.component('EosTableInfomaCourseOpera', EosTableInfomaCourseOpera)

        Vue.component('EosTimeChoise', EosTimeChoise)
        Vue.component('EosTimeDoubie', EosTimeDoubie)

        Vue.component('EosTookitAuth', EosTookitAuth)

        Vue.component('EosCourseScore', EosCourseScore)
    }
}