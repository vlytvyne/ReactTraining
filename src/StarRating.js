import React, {Component} from "react";
import Star from "./Star";
import PropTypes from 'prop-types'

class StarRating extends Component {

	render() {
		const {maxRating, curRating, onRate} = this.props
		return (
			<div className="starRating">
				{
				createArrayFromAndTo(1, maxRating).map(i =>
					<Star
						key={i}
						selected={ curRating >= i }
						onClick={() => onRate(i)}
					/>
				)
				}
			</div>
		)
	}

	static propTypes = {
		maxRating: PropTypes.number,
		curRating: curRatingValidator,
		onRate: PropTypes.func
	}

	static defaultProps = {
		maxRating: 5,
		curRating: 1,
		onRate: f => f
	}
}

function createArrayFromAndTo(from, to) {
	let array = []
	for (let i = from; i <= to; i++) {
		array.push(i)
	}
	return array
}

function curRatingValidator(props, propName) {
	let rating = props[propName]
	if (typeof rating == 'number' && rating <= props['maxRating'] && rating >= 1) {
		return null
	} else {
		throw new Error("curRating must be a number and less than maxRating and >= 1")
	}
}

export default StarRating