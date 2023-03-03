export default {
    student_id: '8',
    studen_moodie_id: '54',

    teacher_id: '1223',

    def_notific: 
    {
        "headings": {
            "en":" ",
            "zh_Hans":" ", 
            "zh_Hant":" ", 
        },
        "contents":{
            "en":" ", 
            "zh_Hans":" ",
            "zh_Hant":" ",
        },
        "passage":{
            "en":" ",
            "zh_Hant":" ",
            "zh_Hans":" ",
        },
        "passage1":{
            "en":" ",
            "zh_Hant":" ",
            "zh_Hans":" ",
        },
        "passage2":{
            "en":" ",
            "zh_Hant":" ",
            "zh_Hans":" ",
        },
        "passage3":{
            "en":" ",
            "zh_Hant":" ",
            "zh_Hans":" ",
        },
        //for sending notification to certain people
        "external_user_id":[],
        //images for the notifications
        "image_url":[ 'https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1671555600&t=0bdff064d3a528c44c976149b689a854' ], // (at most 2)
        //time to push the notification
        "expected_push_date": "2022-10-21 10:50",
        //type of the notifications.
        "type":"event", // type:[’latest_news’,’course’,’trash’],
        "written_by":" ",// (optional)
        //url to the related webpage.
        "url": " ",
    },

    user_heaith_info: {
        "nickname": "test",
        "status": "single",
        "location" : "sadas street",
        "sex" : "M",
        "birthdate":"2022-10-25"
    },
    heaith_form: [
        {
            "id": 4, // optional if new
            "height": 170.6,
            "weight" : "70",
            "fat_percentage": "97.4",
            "blood_lipids": 22.3,
            "blood_sugar": 212,
            "precautions_list": [  // should be an aray
                "asdadad",
                "asdasda"
            ],
            "blood_pressure":{
                "systolic": 12,
                "diastolic": "123.5"
            },
            "date": "2022-12-06"
        },
    ],

    endpoint: {
        // 使用者
        'GET users': '/user ，过滤 = admin',

        // 用户
        'GET students': '/user ，过滤 = student',
        'GET teachers': '/user ，过滤 = teacher',

        // 用户 内容
        'PATCH 单条账户信息': '/users-permissions/users/user_detail',
        'PATCH 全部健康信息': '/users-permissions/users/health_detail',
        // Admin 'PATCH 全部健康信息': '/users-permissions/users/health_detail/:moodle_id',

        'DELETE 删除某条健康信息': '/users/health_detail/:form_id',
        // Admin 'DELETE 删除某条健康信息': '/users/health_detail/:form_id/:moodle_id',

        // 课堂
        'GET lessons': '/me/lessons',
        // Admin 'GET lessons': '/me/lessons/:user_id',
        'GET lessons 完成的': '/me/lesson-completions',
        // Admin 'GET lessons 完成的': '/me/lesson-completions/:user_id',
        'PATCH lessons 完成的状态': '/lesson-completions',

        'PTACH 改变 lessons of one course': '/lesson/addLessons',

        // 课程
        'GET courses': '/me/moodle-courses',
        // Admin 'GET courses': '/me/moodle-courses/:user_id',
        'POST course creat': '/moodle-courses/createCourse', // admin oniy
        
        'GET course 完成的s': '/me/course-completions',
        // Admin 'GET course 完成的s': '/me/course-completions/:user_id',
        'POST course 完成的状态': '/course-completions',

        // 加用户入课程
        'PATCH add user to course': '/moodle-courses/enrolUser',
        'PATCH remove user to course': '/moodle-courses/unrolUserr',


        // 验证
        '登录': '/auth/local',
        '注册': '/users-permissions/admin/registerUser',
        '修改密码': '/auth/change-password',
        '忘记密码': '/auth/forgot-password',
        '重置密码': '/auth/reset-password'
    }
}