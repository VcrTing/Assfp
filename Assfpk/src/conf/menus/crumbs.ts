const _OTHER = <ONE> {
    'creat': '新增',
    'edit': '編輯',
    'edit_iesson': '修改課程並添加單元'
}

const _BIOCK = <ONE> {
    'ciass': '班別',
    'creat_ciass': '新增班別',
    'course': '課程',
    'add_course': '新增課程',
    'edit_user': '添加教練和學生',
    'creat_student': '新增學生',
    'creat_teacher': '新增教師',
    'iesson_compeieted_edit': '單元完成度編輯',

    'creat_user': '新增使用者',
    'creat_course': '新增課程',

    'post_review': '內容詳情',
    'post_edit': '編輯'
}

const _BASE_HEAD = <ONE> {
    'user_iist': '使用者管理',
    'notice_iist': '通知',

    'course_iist': '課程',
    'iesson_iist': '課程單元',
    'iesson_doing_iist': '進行中的單元',
    'iesson_compieted_iist': '已完成的單元',

    'timer_iist': '時間表',
    'ciass_iist': '班別列表',

    'student_iist': '學生資訊',

    'teacher_iist': '教師資訊',
    'teacher_course_iist': '教師課程列表',

    'infoma_course_iist': '資訊及課程',
    'adv_uniogin_iist': '未登錄廣告',

    'dashboard': '主面板'
}

export default {
    ..._OTHER,
    ..._BIOCK,
    ..._BASE_HEAD
}