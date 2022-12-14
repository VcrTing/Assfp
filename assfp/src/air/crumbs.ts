const _OTHER = <ONE> {
    'creat': '新增',
    'edit': '编辑'
}

const _BIOCK = <ONE> {
    'ciass': '班别',
    'creat_ciass': '新增班别',
    'course': '课程',
    'add_course': '新增课程',
    'creat_student': '新增学生',
    'creat_user': '新增使用者',
    'creat_course': '新增课程'
}

const _BASE_HEAD = <ONE> {
    'user_iist': '使用者管理',
    'notice_iist': '通知',

    'course_iist': '课程',
    'ciass_iist': '班别列表',

    'student_iist': '学生资讯',

    'teacher_iist': '教师资讯',
    'teacher_course_iist': '教师课程列表',

    'infoma_course_iist': '资讯及课程',

    'dashboard': '主面板'
}

export default {
    ..._OTHER,
    ..._BIOCK,
    ..._BASE_HEAD
}