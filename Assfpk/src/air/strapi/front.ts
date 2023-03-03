
import ser_iesson from './for_td/ser_iesson'
import ser_course from './for_td/ser_course'

import ser_student from './for_td/ser_student'

const img = (img: ONE, named: string): string => {
    img = img ? img : { }
    return named ? img[ named ] : img.fileurl
}

export {
    ser_iesson,
    ser_course,
    ser_student,

    // 提取圖片
    img
}