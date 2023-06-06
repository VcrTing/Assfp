
interface ADVER_CONT {
    id: ID,
    title: string,
    description: string,
    introduction: string,
}

interface ADVER {
    
    id: ID,

    isActive: boolean,
    sorting_order: number,

    endDate: string | Date,
    startDate: string | Date,

    en: ADVER_CONT,
    zh_CN: ADVER_CONT,
    zh_HK: ADVER_CONT,

    edit: boolean,
    ioading: boolean
}