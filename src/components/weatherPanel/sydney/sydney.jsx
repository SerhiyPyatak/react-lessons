import React from 'react';

function Sydney(props) {
	let sydneyStyle = {
		width: '100%',	
		backgroundColor: 'rgb(102, 102, 153)',
	}
	return (
		<>
			<li id="sydney" className={'weather-item'} style = {sydneyStyle}>
                Sydney <span className={"forecast"}>25 &deg;C <i className={"wi wi-night-partly-cloudy"}></i></span>
            </li>
		</>
	);
}

export default Sydney;