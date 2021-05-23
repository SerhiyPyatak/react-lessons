import React from 'react';

function TelAviv(props) {
	let telavivStyle = {
		width: '25%',
		backgroundColor: 'rgb(226, 103, 74)',
	}
	return (
		<>
			<li id="tel-aviv" className={'weather-item'} style = {telavivStyle}>
                Tel Aviv <span className={"forecast"}>32 &deg;C <i className={"wi wi-hot"}></i></span>
            </li>
		</>
	);
}

export default TelAviv;