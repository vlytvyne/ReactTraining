import React from 'react';
import './App.css';
import {
	AddColorFormContainer,
	ColorDetailsContainer,
	ColorListContainer
}
from "./componentContainers";
import {buildStore} from "./reduxStoreFactory";
import {Provider} from "react-redux";
import {HashRouter, Route, Switch} from "react-router-dom";

const App = () =>
	<Provider store={buildStore()}>
		<HashRouter>
			<Switch>
				<Route exact path="/:id" component={ColorDetailsContainer}/>
				<Route path="/" component={ColorsMainPage}/>
			</Switch>
		</HashRouter>
	</Provider>

const ColorsMainPage = () =>
	<div>
		<AddColorFormContainer/>
		<ColorListContainer/>
	</div>

export default App;
