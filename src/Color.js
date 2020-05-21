import React, {Component} from "react";
import StarRating from "./StarRating";
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class Color extends Component {

	render() {
		const {id, title, hexColor, rating, onDelete, onRate, history} = this.props
		return (
			<div className="colorDiv">
				<h1>{title}</h1>
				<div className="colorShowcase" style={{backgroundColor: hexColor}} onClick={() => history.push(`/${id}`)}/>
				<StarRating
					maxRating={5}
					curRating={rating}
					onRate={(newRate) => onRate(id, newRate)}
				/>
				<button className="deleteButton" onClick={() => onDelete(id)}>Delete</button>
			</div>
		)
	}

	static propTypes = {
		title: PropTypes.string,
		hexColor: PropTypes.string,
		rating: PropTypes.number,
		onDelete: PropTypes.func,
		onRate: PropTypes.func
	}

	static defaultProps = {
		title: "Default title",
		hexColor: "#000000",
		rating: 3
	}

	componentDidMount() {
		console.log(`color ${this.props.title} did mount`)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(`color ${this.props.title} did update`)
	}

	componentWillUnmount() {
		console.log(`color ${this.props.title} did unmount`)
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.props.rating !== nextProps.rating || this.props.title !== nextProps.title
	}

}

export default withRouter(Color)