import React from 'react';

function Tokyo(props) {
	let tokyoStyle = {
		width: '25%',
		backgroundColor: 'rgb(51, 153, 102)',
	}
	return (
		<>
			<li id="tokyo" className={'weather-item'} style={tokyoStyle}>
                Tokyo <span className={"forecast"}>8 &deg;C <i className={"wi wi-night-clear"}></i></span>
            </li>
		</>
	);
}

export default Tokyo;