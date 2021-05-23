import React from 'react';

function Moscow(props) {
	let moscowStyle = {
		width: '25%',
		backgroundColor: 'rgb(194, 71, 71)',
	}
	return (
		<>
			<li id="moscow" className={'weather-item'} style={moscowStyle}>
                Moscow <span className={"forecast"}>21 &deg;C <i className={"wi wi-day-cloudy-high"}></i></span>
            </li>
		</>
	);
}

export default Moscow;