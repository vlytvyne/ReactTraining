import React from 'react';
import './App.css';
import {AddColorFormContainer, ColorListContainer} from "./componentContainers";
import {buildStore} from "./reduxStoreFactory";
import {Provider} from "react-redux";

const App = () =>
	<Provider store={buildStore()}>
		<div>
			<AddColorFormContainer/>
			<ColorListContainer/>
		</div>
	</Provider>

export default App;
