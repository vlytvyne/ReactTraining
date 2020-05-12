import React, {Component} from 'react';
import './App.css';
import ColorList from "./ColorList";
import uuid from "react-uuid";
import AddColorForm from "./AddColorForm";

const colors = [
	{
		id: uuid(),
		title: "Red",
		hexColor: "#ef0c0c",
		rating: 4
	},
	{
		id: uuid(),
		title: "Blue",
		hexColor: "#0ca0ef",
		rating: 2
	},
	{
		id: uuid(),
		title: "Yellow",
		hexColor: "#ffd252",
		rating: 1
	},
	{
		id: uuid(),
		title: "Green",
		hexColor: "#418632",
		rating: 5
	},
]

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {colors}
		this.rateColor = this.rateColor.bind(this)
		this.deleteColor = this.deleteColor.bind(this)
		this.addColor = this.addColor.bind(this)
	}

	rateColor(colorId, newRate) {
		const colors = this.state.colors.map(
			color =>
			(color.id === colorId) ?
			{...color, rating: newRate}
			: color
		)
		this.setState({colors})
	}

	deleteColor(colorId) {
		const colors = this.state.colors.filter(color => color.id !== colorId)
		this.setState({colors})
	}

	addColor(title, hexColor) {
		const colors = [
			...this.state.colors,
			{
				id: uuid(),
				title,
				hexColor,
				rating: 3
			}
		]
		this.setState({colors})
	}

	render() {
		return(
			<div>
				<AddColorForm onAddColor={this.addColor}/>
				<ColorList
					colors={this.state.colors}
					onRate={this.rateColor}
					onDelete={this.deleteColor}
				/>
			</div>
		)
	}
}

export default App;
