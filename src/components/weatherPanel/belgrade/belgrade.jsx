import React from 'react';

function Belgrade(props) {
	let belgradeStyle = {
		width: '25%',
		backgroundColor: 'rgb(153, 102, 153)',
	}
	return (
		<>
			<li id="belgrade" className={'weather-item'} style={belgradeStyle}>
                Belgrade <span className={"forecast"}>15 &deg;C <i className={"wi wi-day-cloudy"}></i></span>
            </li>
		</>
	);
}

export default Belgrade;