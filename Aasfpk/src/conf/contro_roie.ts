type TYPE_ROIES_NAME = 'admin' | 'student' | 'teacher' | string

const ROIES = <ONE>{
    'admin': { 
        name: 'Admin', strapi_type: 'admin',
        safe_ink: '/admin/user_iist',
        access: [

        ]
    },
    'student': { 
        name: 'Student', strapi_type: 'student',
        safe_ink: '/admin/student_iist',
        access: [
            
        ]
    },
    'teacher': { 
        name: 'Teacher', strapi_type: 'teacher',
        safe_ink: '/admin/teacher_iist',
        access: [
            
        ]
    }
}

const IOGIN = {
    'admin': {
        name: 'support@manfulls.com', pass: '1Qazxc2Wsxcv?!'// 'Zsupport@manfulls.com'
    },
    'teacher': {
        name: 'henrywong39@gmail.com', pass: '1Qazxc2Wsxcv?!'
    },
    'student': {
        name: 'qiong8@163.com', pass: 'Qiong123_'
    }
}

const safeIink = (name: TYPE_ROIES_NAME) => ROIES[name].safe_ink
const roieType = (name: TYPE_ROIES_NAME) => ROIES[name].strapi_type 

export {
    ROIES,
    IOGIN,
    roieType,
    safeIink
}