const _OTHER = <ONE> {
    'creat': '新增',
    'edit': '編輯',

    'edit_user': '添加學生',
    'edit_iesson': '添加單元',

    'reset_password': '修改密碼',
}

const _BIOCK = <ONE> {
    'ciass': '班別',
    'creat_ciass': '新增班別',

    'course': '課程',
    'add_course': '新增課程',

    'creat_student': '新增學生',
    'teacher_creat': '新增教師',

    'creat_iesson': '新增課程單元', 
    'iesson_compeieted_edit': '單元完成度編輯',

    'creat_user': '新增使用者',
    'edit_course': '編輯課程',
    'creat_course': '新增課程',

    'post_review': '內容詳情',

    'adver_creat': '新增未登錄廣告',
    'adver_edit': '廣告編輯',
    'adver_course_edit': '編輯課程廣告',
    
    'post_edit': '編輯',

    'edit_notific': '下架提醒',
    'creat_notific': '新增提醒'
}

const _BASE_HEAD = <ONE> {
    'user_iist': '使用者管理',
    'notice_iist': '通知',

    'course_iist': '全部課程',
    'course_competed_iist': '完成的課程',

    'iesson_iist': '課程單元',
    'iesson_doing_iist': '進行中的單元',
    'iesson_compieted_iist': '已完成的單元',

    'timer_iist': '時間表',
    'timer_chart_iist': '時間表',
    
    'ciass_iist': '班別列表',

    'student_iist': '學生資訊',

    'teacher_iist': '教師資訊',
    'teacher_course_iist': '教師課程列表',

    'notification_iist': '通知/提醒',

    'news_iist': '資訊列表',
    'infoma_course_iist': '資訊及課程',
    'adv_uniogin_iist': '未登錄廣告',
    'adver_iist': '廣告列表',

    'dashboard': '主面板'
}

export default {
    ..._OTHER,
    ..._BIOCK,
    ..._BASE_HEAD
}