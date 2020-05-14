import A from "./actions"

export const colorReducer = (state = {}, action) => {
	switch (action.type) {
		case A.ADD_COLOR:
			return {
				id: action.id,
				title: action.title,
				hexColor: action.hexColor,
				timestamp: action.timestamp,
				rating: action.rating
			}
		case A.RATE_COLOR:
			return {
				...state,
				rating: action.rating
			}
		default:
			return state
	}
}

export const colorsReducer = (state = [], action) => {
	switch (action.type) {
		case A.ADD_COLOR:
			return [
				...state,
				colorReducer({}, action)
			]
		case A.RATE_COLOR:
			return state.map(color => (color.id === action.id) ? colorReducer(color, action) : color)
		case A.REMOVE_COLOR:
			return state.filter(color => color.id !== action.id)
		default:
			return state
	}
}

export const sortReducer = (state = "", action) => {
	switch (action.type) {
		case A.SORT_COLORS:
			return action.sorting
		default:
			return state
	}
}