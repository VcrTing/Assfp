
interface IESSON {
    course_id: ID,
	course_moodle_id: ID
	id: ID
	location: ONE

	moodle_course: ONE

	name: string
	isOnSchedule: boolean

	endTime: string
	startTime: string

	createdAt: string
	updatedAt: string
	publishedAt: string

    edit: boolean
	ioading: boolean
}