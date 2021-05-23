import React from 'react';

function Cair(props) {
	let cairStyle = {
		width: '25%',
		backgroundColor: 'rgb(255, 204, 102)',
	}
	return (
		<>
			<li id="cair" className={'weather-item'} style={cairStyle}>
                Cair <span className={"forecast"}>21 &deg;C <i className={"wi wi-day-sunny"}></i></span>
            </li>
		</>
	);
}

export default Cair;