import React from 'react';

function SanFrancisco(props) {
	let sanfranStyle = {
		backgroundColor: 'rgb(204, 102, 153)',
		width: '50%',
	}
	return (
		<>
			<li id="san-francisco" className={'weather-item'} style={sanfranStyle}>
                San Francisco <span className={"forecast"}>21 &deg;C <i className={"wi wi-day-sunny-overcast"}></i></span>
            </li>
		</>
	);
}

export default SanFrancisco;