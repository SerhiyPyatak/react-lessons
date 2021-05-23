//import styled from 'styled-components';
import './App.css';
import './components/weatherIcons/CSS/weather-icons.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import WeatherPanel from './components/weatherPanel/weatherPanel';

function App() {
  return (
    <div>
      <Header/>
      <WeatherPanel/>
      <Footer/>
    </div>
  );
}

export default App;
