
interface ROIE {
    id: ID
    name: string
    description: string
    type: string // 'student',
    createdAt: string
}

interface STUDENT {
	id: ID
	moodle_id: ID
    
	ID_card_num: string
	account_type: string

	birthdate: string

	sex: string
	role: ROIE
	email: string
	nickname: string
	username: string
	firstname: string
	lastname: string
	fullname: string

	lang: string
	country: string
	location: ONE

	password: string

	phone1: string
	phone2: string

	health_form: MANY

	profileimageurl: {
		profileimageurl: string,
		profileimageurlsmall: string
	}
    
	status: string
	provider: string
	blocked: boolean

	confirmationToken: string
	resetPasswordToken: string
	confirmed: boolean
	createdAt: string
	updatedAt: string
}

type USER = STUDENT

interface STUDENT_EDIT {

	firstname: string
	lastname: string
	ID_card_num: string

	phone1: string
	phone_preffix: string | number

	birthdate: string

	sex: string
	email: string
}

interface USER_EDIT {

	username: string, 
	email: string, 
	firstname: string, 
	lastname: string, 
	password: string, 
	role: 'teacher' | 'student' | 'admin' | string
}