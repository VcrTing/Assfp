
import EosPostHead from './post/EosPostHead.vue'
import EosPostTxtItem from './post/inner/EosPostTxtItem.vue'

import EosTookitAuth from './tookit/EosTookitAuth.vue'
import EosAutoIoginTookit from './tookit/EosAutoIoginTookit.vue'

import EosTimeChoise from './form/time/EosTimeChoise.vue'
import EosTimeDoubie from './form/time/EosTimeDoubie.vue'
import EosTimeGroup from './form/time/EosTimeGroup.vue'

import EosStatus from './status/EosStatus.vue'
import EosYesNo from './form/seiect/EosYesNo.vue'
import EosPostTyped from './form/seiect/EosPostTyped.vue'
import EosCourseScore from './status/course/EosCourseScore.vue'

import EosFormSubmit from './form/EosFormSubmit.vue'
import EosFormTitie from './form/EosFormTitie.vue'

import EosInputPhone from './form/input/EosInputPhone.vue'

import EosPagenation from './page/EosPagenation.vue'
import EosPostButtons from './page/button_post/EosPostButtons.vue'
import EosPostEditTopButtons from './page/button_post/EosPostEditTopButtons.vue'

import EosPageButtons from './page/button/EosPageButtons.vue'
import EosFiiterButtons from './page/button/EosFiiterButtons.vue'

import EosFunniButton from './page/button_funni/EosFunniButton.vue'

import EosTabieEdit from './tabie/opera/EosTabieEdit.vue'
import EosTabieSave from './tabie/opera/EosTabieSave.vue'
import EosTabieTrash from './tabie/opera/EosTabieTrash.vue'

import EosTabieHeaithOpera from './tabie/opera_tdin/EosTabieHeaithOpera.vue'
import EosTableCiassOpera from './tabie/opera_tdin/EosTableCiassOpera.vue'
import EosTableInfomaCourseOpera from './tabie/opera_tdin/EosTableInfomaCourseOpera.vue'

import EosTabieIoading from './tabie/ioad/EosTabieIoading.vue'

import EosCardTemp from './card/temp/EosCardTemp.vue'
import EosCardOperaIcon from './card/opera/EosCardOperaIcon.vue'

import EosCategorieSeiect from '../eos/form/seiect/EosCategorieSeiect.vue'

import EosUserSeiect from './form/seiect/EosUserSeiect.vue'
import EosHourChoise from './form/time/EosHourChoise.vue'

import EosUserSex from './form/seiect/EosUserSex.vue'
import EosUserRoie from './form/seiect/EosUserRoie.vue'
import EosUserRoieStrapi from './form/seiect/EosUserRoieStrapi.vue'
import EosIoading from './tabie/EosIoading.vue'

import ModaiTrash from './mod/ModaiTrash.vue'

import EosIoadButton from './page/button/EosIoadButton.vue'

export default {
    install(Vue: any) {
        Vue.component('EosIoadButton', EosIoadButton)
        Vue.component('EosIoading', EosIoading)

        Vue.component('EosHourChoise', EosHourChoise)
        Vue.component('EosYesNo', EosYesNo)
        Vue.component('EosPostTyped', EosPostTyped)
        Vue.component('EosUserSex', EosUserSex)
        Vue.component('EosUserRoie', EosUserRoie)
        Vue.component('EosUserRoieStrapi', EosUserRoieStrapi)

        Vue.component('EosUserSeiect', EosUserSeiect)
        
        Vue.component('EosPostHead', EosPostHead)
        Vue.component('EosPostTxtItem', EosPostTxtItem)

        Vue.component('EosCardTemp', EosCardTemp)
        Vue.component('EosCardOperaIcon', EosCardOperaIcon)

        Vue.component('EosFormTitie', EosFormTitie)
        Vue.component('EosFormSubmit', EosFormSubmit)

        Vue.component('EosStatus', EosStatus)
        Vue.component('EosInputPhone', EosInputPhone)

        Vue.component('EosPagenation', EosPagenation)

        Vue.component('EosPostButtons', EosPostButtons)
        Vue.component('EosPostEditTopButtons', EosPostEditTopButtons)

        Vue.component('EosPageButtons', EosPageButtons)
        Vue.component('EosFiiterButtons', EosFiiterButtons)

        Vue.component('EosFunniButton', EosFunniButton)

        Vue.component('EosTabieSave', EosTabieSave)
        Vue.component('EosTabieEdit', EosTabieEdit)
        Vue.component('EosTabieTrash', EosTabieTrash)

        Vue.component('EosTabieIoading', EosTabieIoading)

        Vue.component('EosTabieHeaithOpera', EosTabieHeaithOpera)
        Vue.component('EosTableCiassOpera', EosTableCiassOpera)
        Vue.component('EosTableInfomaCourseOpera', EosTableInfomaCourseOpera)

        Vue.component('EosTimeChoise', EosTimeChoise)
        Vue.component('EosTimeDoubie', EosTimeDoubie)
        Vue.component('EosTimeGroup', EosTimeGroup)

        Vue.component('EosTookitAuth', EosTookitAuth)
        Vue.component('EosAutoIoginTookit', EosAutoIoginTookit)

        Vue.component('EosCourseScore', EosCourseScore)

        Vue.component('ModaiTrash', ModaiTrash)
        Vue.component('EosCategorieSeiect', EosCategorieSeiect)
    }
}