import React, {Component} from "react";
import PropTypes from "prop-types";

class Star extends Component {

	render() {
		const {selected, onClick} = this.props
		return (
			<div
				className={(selected) ? "star selected" : "star"}
				onClick={onClick}
			>
			</div>
		)
	}

	static propTypes = {
		selected: PropTypes.bool,
		onClick: PropTypes.func
	}

	static defaultProps = {
		selected: false
	}
}

export default Star