import React from 'react';

function Paris(props) {
	let parisStyle = {
		width: '25%',
		backgroundColor: 'rgb(51, 204, 204)',
	}
	return (
		<>
			<li id="paris" className={'weather-item'} style={parisStyle}>
                Paris 
				<span className={"forecast"}>
					11 &deg;C 
					<i className={"wi wi-day-rain-mix"}></i>
				</span>
            </li>
		</>
	);
}

export default Paris;