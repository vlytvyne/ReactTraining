import AddColorForm from "./AddColorForm";
import {connect} from "react-redux";
import {addColorAction, rateColorAction, removeColorAction} from "./actionCreators";
import ColorList from "./ColorList";

export const AddColorFormContainer = connect(
	null,
	dispatch => ({
		onAddColor: (title, hexColor) => { dispatch(addColorAction(title, hexColor)) }
	})
)(AddColorForm)

export const ColorListContainer = connect(
	state => ({
		colors: state.colors
	}),
	dispatch => ({
		onRate: (id, rating) => { dispatch(rateColorAction(id, rating)) },
		onDelete: (id) => { dispatch(removeColorAction(id)) }
	})
)(ColorList)