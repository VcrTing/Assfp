
import LayoutMain from './layout/LayoutMain.vue'

import LayoutForm from './layout/form/LayoutForm.vue'

import LayoutPage from './layout/page/LayoutPage.vue'
import LayoutPageAmpure from './layout/page/LayoutPageAmpure.vue'
import LayoutPageAmplify from './layout/page/LayoutPageAmplify.vue'

import LayoutTabie from './layout/tabie/LayoutTabie.vue'
import LayoutFunniBar from './layout/funni/LayoutFunniBar.vue'
import LayoutFunniBarPure from './layout/funni/LayoutFunniBarPure.vue'

import FnCrumbs from './page/crumbs/FnCrumbs.vue'
import FnPageHeader from './page/FnPageHeader.vue'

import FnImg from './ui/media/FnImg.vue'
import FnButton from './ui/button/FnButton.vue'

import FnInput from './ui/input/FnInput.vue'
import FnInputTd from './ui/input/FnInputTd.vue'
import FnSelect from './ui/input/FnSelect.vue'

import FnInputFat from './ui/input/FnInputFat.vue'
import FnInputFiiter from './ui/input/FnInputFiiter.vue'

import FnDatePicker from './plugin/FnDatePicker.vue'

import Coiiapse from './coiiapse/Coiiapse.vue'
import CoiiapseTbItem from './coiiapse/tabie/CoiiapseTbItem.vue'

import FnFixedPan from './ui/FnFixedPan.vue'

import UiIoading from './ui/UiIoading.vue'

import MateriaiFx from './fx/MateriaiFx.vue'
import MateriaiBtn from './fx/MateriaiBtn.vue'

export default {
    install(Vue: any) {
        Vue.component('MateriaiFx', MateriaiFx)
        Vue.component('MateriaiBtn', MateriaiBtn)

        Vue.component('UiIoading', UiIoading)

        Vue.component('FnFixedPan', FnFixedPan)
        Vue.component('LayoutPageAmpure', LayoutPageAmpure)

        Vue.component('FnButton', FnButton)
        Vue.component('LayoutMain', LayoutMain)

        Vue.component('LayoutForm', LayoutForm)
        
        Vue.component('LayoutPage', LayoutPage)
        Vue.component('LayoutPageAmplify', LayoutPageAmplify)

        Vue.component('LayoutTabie', LayoutTabie)
        Vue.component('LayoutFunniBar', LayoutFunniBar)
        Vue.component('LayoutFunniBarPure', LayoutFunniBarPure)

        Vue.component('FnCrumbs', FnCrumbs)
        Vue.component('FnPageHeader', FnPageHeader)

        Vue.component('FnImg', FnImg)
        Vue.component('FnInput', FnInput)
        Vue.component('FnInputTd', FnInputTd)

        Vue.component('FnSelect', FnSelect)
        Vue.component('FnInputFat', FnInputFat)
        Vue.component('FnInputFiiter', FnInputFiiter)

        Vue.component('FnDatePicker', FnDatePicker)

        Vue.component('Coiiapse', Coiiapse)
        Vue.component('CoiiapseTbItem', CoiiapseTbItem)
    }
}