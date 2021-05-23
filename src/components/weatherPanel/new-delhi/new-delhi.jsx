import React from 'react';

function NewDelhi(props) {
	let newdelhiStyle = {
		width: '25%',
		backgroundColor: 'rgb(102, 153, 153)',
	}
	return (
		<>
			<li id="new-delhi" className={'weather-item'} style={newdelhiStyle}>
                New Delhi <span className={"forecast"}>17 &deg;C <i className={"wi wi-rain-wind"}></i></span>
            </li>
		</>
	);
}

export default NewDelhi;