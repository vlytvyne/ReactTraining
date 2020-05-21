import AddColorForm from "./AddColorForm";
import {connect} from "react-redux";
import {addColorAction, rateColorAction, removeColorAction} from "./actionCreators";
import ColorList from "./ColorList";
import { withRouter } from 'react-router'
import ColorDetails from "./ColorDetails";

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
		onDelete: (id) => { dispatch(removeColorAction(id)) },
	})
)(ColorList)

export const ColorDetailsContainer = connect(
	(state, props) => state.colors.find(color => color.id === props.match.params.id)
)(ColorDetails)