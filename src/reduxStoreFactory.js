import uuid from "react-uuid";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {colorsReducer, sortReducer} from "./reducers";

export const colors = [
	{
		id: uuid(),
		title: "Red",
		hexColor: "#ef0c0c",
		timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)",
		rating: 4
	},
	{
		id: uuid(),
		title: "Blue",
		hexColor: "#0ca0ef",
		timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)",
		rating: 2
	},
	{
		id: uuid(),
		title: "Yellow",
		hexColor: "#ffd252",
		timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
		rating: 1
	},
	{
		id: uuid(),
		title: "Green",
		hexColor: "#418632",
		timestamp: "Thu Mar 13 2016 01:11:12 GMT-0800 (PST)",
		rating: 5
	},
]

const sort = "SORT_TY_TITLE"

const initialState = {colors, sort}

const combinedReducers = combineReducers({
	colors: colorsReducer,
	sort: sortReducer
})

const startingStoreState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState

const saverMiddleware = store => next => action => {
	let result = next(action)
	localStorage['redux-store'] = JSON.stringify(store.getState())
	return result
}

const storeEnhancer = applyMiddleware(saverMiddleware)

export function buildStore() {
	return createStore(combinedReducers, startingStoreState, storeEnhancer)
}