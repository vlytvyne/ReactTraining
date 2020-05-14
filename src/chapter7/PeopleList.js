import React, {Component} from "react";
import fetch from 'isomorphic-fetch'

const PeopleList = ({data, onDelete}) =>
	<ol>
		{ data.map((person, i) => <li key={i} onClick={() => onDelete(i)}>{person.name.first}</li>) }
	</ol>

export default PeopleList