import A from './actions'
import uuid from "react-uuid";

export const sortColorsAction = (sorting) => ({
	type: A.SORT_COLORS,
	sorting
})

export const addColorAction = (title, hexColor) => ({
	type: A.ADD_COLOR,
	id: uuid(),
	title,
	hexColor,
	timestamp: new Date().toString(),
	rating: 3
})

export const removeColorAction = id => ({
	type: A.REMOVE_COLOR,
	id
})

export const rateColorAction = (id, rating) => ({
	type: A.RATE_COLOR,
	id,
	rating
})