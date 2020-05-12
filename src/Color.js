import React, {Component} from "react";
import StarRating from "./StarRating";
import PropTypes from 'prop-types'

class Color extends Component {

	render() {
		const {id, title, hexColor, rating, onDelete, onRate} = this.props
		return (
			<div className="colorDiv">
				<h1>{title}</h1>
				<div className="colorShowcase" style={{backgroundColor: hexColor}}/>
				<StarRating
					maxRating={5}
					curRating={rating}
					onRate={(newRate) => onRate(id, newRate)}
				/>
				<button className="deleteButton" onClick={onDelete}>Delete</button>
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

}

export default Color