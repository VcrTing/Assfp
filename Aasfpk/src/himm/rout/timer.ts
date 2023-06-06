
const admin = '/admin/'

const __ = (path: string, component: any, children: any = [ ]) => { return { path, children, component } }

//
const timer_iist = () => __('timer_iist', () => import('../../screen/timer/iist/TimerIist.vue'))
const timer_chart_iist = () => __('timer_chart_iist', () => import('../../screen/timer/iist_img/TimerChartIist.vue'))

const timer_iist_in = (pfx: string) => __(pfx, () => import('../../screen/timer/timer.vue'), [
    
])

export default [

    timer_iist(),
    timer_iist_in(admin + 'timer_iist'),

    timer_chart_iist()
]