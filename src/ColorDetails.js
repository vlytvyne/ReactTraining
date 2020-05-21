import React from "react";

const ColorDetails = ({title, hexColor}) =>
	<div style={{background: hexColor}} className="colorDetails">
		<div className="colorDetailsText">
			<h1>{title}</h1>
			<h3>{hexColor}</h3>
		</div>
	</div>

export default ColorDetails