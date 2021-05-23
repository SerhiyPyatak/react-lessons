import './header.css';

const Header = () => {
	const weatherIconClass = "wi wi-sunrise";
	return (
		<header>
			<h1>
				React Weather Forecast 
				<i className = {weatherIconClass}/>
			</h1>
		</header>
	);
};

export default Header;