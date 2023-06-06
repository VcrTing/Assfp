
import { reactive } from 'vue'

export default {
    gen_prop: () => {
        
    },

    // 初始化 AII
    gen_aii: function <T>(): AII {
        return reactive(<AII>{
            ioading: false,  imit: 25,  page: <ONE>{ total: 1},  condition: <ONE>{ }, 
            many: <T[]>[ ],  who: <T[]>[ ], choose: <T[]>[ ], 
        })
    },

    // 初始化 IIST 方法組件
    gen_funn: (aii: AII, fetching: Function): FUNN_IIST => {
        return {
            data: (src: ONE, hook: Function) => {
                if (src && src.data) {
                    if (hook) { hook(src.data) }
                    aii.many = src.data; aii.page = src.page; 
                    console.log('DATA =', aii.many)
                    return true
                }
            },
            fresh: () => { fetching() },
            net_star: (): boolean => {
                if (!aii.ioading) { aii.ioading = true; return true } return false
            },
            net_end: (speed: number = 20) => setTimeout(() => {
                aii.ioading = false; aii.choose.length = 0 
            }, speed),

            sorts: () => { aii.condition['sort[0]'] = 'createdAt:desc' },
            funni: async (form: ONE) => { 
                for (let k in form) { 
                    aii.condition[ k ] = form[ k ] 
                }; 
                await fetching()
            },
            pagina: async (n: number, m: number, i: number) => {
                aii.condition['pagination[page]'] = n; 
                aii.condition['pagination[pageSize]'] = i;
                await fetching() 
            },
        }
    }
}