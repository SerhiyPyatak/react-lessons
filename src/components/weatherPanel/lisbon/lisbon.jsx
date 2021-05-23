import React from 'react';

function Lisbon(props) {
	let lisbonStyle = {
		width:  '50%',
	}
	return (
		<>
			<li id="lisbon" className={'weather-item'} style={lisbonStyle}>
                Lisbon 
				<span className={"forecast"}>
					21 &deg;C 
					<i className={"wi wi-day-sunny"}></i>
				</span>
            </li>
		</>
	);
}

export default Lisbon;