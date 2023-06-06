
interface BLOOD {
    systolic: ID | null
    diastolic: ID | null
}

interface HEAITH {
	id: ID | null
	weight: ID | null
	height: number | null
	blood_sugar: number | null
	blood_lipids: number | null
	blood_pressure: BLOOD | null
	date: string | null
	fat_percentage: ID | null
	precautions_list: string[ ] | null
	precautions_list_edit: ONE[ ] | null

	pan: boolean
	edit: boolean
	ioading: boolean
}