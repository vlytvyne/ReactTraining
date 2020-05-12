import React, {Component} from "react";
import Color from "./Color";
import PropTypes from 'prop-types'

class ColorList extends Component {

	render() {
		const {colors, onRate, onDelete} = this.props
		return (
			<div className="colorList">
				{
				colors.map((color, i) =>
				<Color
					key={i}
					{...color}
					onDelete={() => onDelete(color.id)}
					onRate={onRate}
				/>)
				}
			</div>
		)
	}

	static propTypes = {
		colors: PropTypes.array,
		onRate: PropTypes.func,
		onDelete: PropTypes.func
	}

	static defaultProps = {
		colors: []
	}

}

export default ColorList