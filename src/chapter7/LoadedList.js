import React, {Component} from "react";
import fetch from 'isomorphic-fetch'
import PeopleList from "./PeopleList";

const LoadedList = (urlToLoad, ComposeComponent) =>
class LoadedList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loading: false,
			loaded: true
		}
		this.deleteEntry = this.deleteEntry.bind(this)
	}

	componentDidMount() {
		this.startLoading()
	}

	startLoading() {
		this.setState({loading: true})
		fetch(urlToLoad + this.props.count)
			.then(response => response.json())
			.then(obj => obj.results)
			.then(data => this.setState({
				loaded: true,
				loading: false,
				data })
			)
	}

	deleteEntry(index) {
		const data = this.state.data
		data.splice(index, 1);
		this.setState({data})
	}

	render() {
		const { data, loading, loaded } = this.state
		if (loading) {
			return (<h1>Loading...</h1>)
		} else {
			return <ComposeComponent {...this.state} onDelete={this.deleteEntry}/>
		}
	}

}

const UsersList = LoadedList('https://randomuser.me/api/?results=', PeopleList)

export { UsersList }
export default LoadedList
