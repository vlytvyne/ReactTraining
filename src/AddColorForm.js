import React, {Component} from "react"
import PropTypes from 'prop-types'

const titleInputPrompt = "Color title..."

class AddColorForm extends Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this)
		this.refTitle = React.createRef()
		this.refColor = React.createRef()
	}

	onSubmit(event) {
		event.preventDefault()
		const title = this.refTitle.current.value
		const hexColor = this.refColor.current.value
		this.props.onAddColor(title, hexColor)
		this.refTitle.current.value = ""

	}

	render() {
		return (
			<form className="addColorForm" onSubmit={this.onSubmit}>
				<input className="inputColorTitle" ref={this.refTitle} type="text" placeholder={titleInputPrompt} required/>
				<input className="inputColor" ref={this.refColor} type="color" required/>
				<button className="addButton">ADD</button>
			</form>
		)
	}

	static propTypes = {
		onAddColor: PropTypes.func
	}

}

export default AddColorForm