
interface IESSON {
    course_id: ID,
	course_moodle_id: ID
	id: ID
	location: ONE

	name: string
	isOnSchedule: boolean

	endTime: string
	startTime: string

	createdAt: string
	updatedAt: string
	publishedAt: string

    is_edit: boolean
}