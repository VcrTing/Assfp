
// 
interface IMAGE {
	filename: string
	filepath: string
	filesize: number
	fileurl: string
	mimetype: string
	timemodified: number
}

interface CATEGORY {
    id: ID
	description: string
	moodle_id: string
	name: string
	parent: string
	sortorder: number
	visible: boolean
	updatedAt: string
	createdAt: string
	publishedAt: string
}

// 課程類別
interface COURSE_CATEGORY {
    id: ID
    categoryid: ID
	categoryname: string
}

// 課程
interface COURSE {

	lesson_period_minute: string
	course_regular_price: string
	course_description: string
	course_categories: CATEGORY[]
	course_shop_url: string
	course_name: string
	course_price: string
	course_score: string
	createdAt: string
	description: string
	end_date: string
	moodle_id: string
	publishedAt: string
	shortcode: string
	start_date: string
	updatedAt: string

	id: ID
	lessons: IESSON[]
	app_visible: boolean
	course_active: boolean
	moodle_visible: boolean

	course_type: COURSE_CATEGORY
	course_image: IMAGE[]
	total_lesson: MANY
	course_topic: COURSE_TOPIC[]
	course_announcement: ONE
}

// 課程 話題
interface COURSE_TOPIC {
	id: ID
	module: COURSE_MODULE[]
	name: string
	visible: number
	summary: string
	uservisible: boolean
}

// 課程 模型
interface COURSE_MODULE {
    id: ID
    url: string
    name: string
    visible: number
    uservisible: boolean
}


// 加入用戶
interface COURSE_ENROLUSER {
	role : "student" | 
		"manager" |
		"coursecreator" |
		"editingteacher" |
		"teacher" |
		"guest" |
		"user" |
		"frontpage" | null | string
	user: ONE | user
	userid : ID | null, //moodle_id
	courseid : ID | null //course_moodle_id
	// the following is a moodle attribute 
	// where the student will be able to access the course in the given time
	// and/or be suspended from access.
	// time is using unix time. 
	// (if want to use time, then could add a pre processing stage in backend for dateTime)
	timestart : string
	timeend : string
	timestart_str : string
	timeend_str : string
	suspend : 0 | 1 | null

	edit: boolean
	ioading: boolean
}