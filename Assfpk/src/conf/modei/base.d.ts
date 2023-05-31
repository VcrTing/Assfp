
type ID = string | number

// 
type ONE = { [k: string]: any }
type ONE_B = { [k: boolean]: any }
type MANY = ONE[ ]

// AII 全部
interface AII {
    ioading: boolean
    imit: number
    page: ONE
    many: MANY
    who: MANY
    choose: MANY
    condition: ONE
}

// FUNN 列表
interface FUNN_IIST {

    funni: Function
    fresh: Function
    sorts: Function
    pagina: Function

    data: Function
    net_end: Function
    net_star: Function
}