import React from 'react';

function NewYork(props) {
	let newyorkStyle = {
		width: '25%',
		backgroundColor: 'rgb(153, 204, 153)',
	}
	return (
		<>
			<li id="new-york" className={'weather-item'} style={newyorkStyle}>
                New York <span className={"forecast"}>17 &deg;C <i className={"wi wi-day-sleet-storm"}></i></span>
            </li>
		</>
	);
}

export default NewYork;