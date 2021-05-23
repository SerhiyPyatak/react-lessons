import React from 'react';
import Belgrade from './belgrade/belgrade';
import Cair from './cair/cair';
import Lisbon from './lisbon/lisbon';
import Moscow from './moscow/moscow';
import NewDelhi from './new-delhi/new-delhi';
import NewYork from './new-york/newyork';
import Paris from './paris/paris';
import SanFrancisco from './san-francisco/san-francisco';
import Sydney from './sydney/sydney';
import TelAviv from './tel-aviv/tel-aviv';
import Tokyo from './tokyo/tokyo';
import './weatherPanel.css';

function WeatherPanel(props) {
	return (
		<main>
			<ul className={"grid"}>
				<Lisbon />
				<Paris />
                <Belgrade />
                <Moscow />
                <TelAviv />
                <Cair />
                <NewYork />
                <NewDelhi />
                <SanFrancisco />
                <Tokyo />
                <Sydney />
        </ul>
		</main>
	);
}

export default WeatherPanel;