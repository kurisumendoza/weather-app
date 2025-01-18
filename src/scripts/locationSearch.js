import getWeatherData from './weatherData';
import { inputCity, inputBtn } from './selectors';

const handleLocationSearch = (e) => {
  e.preventDefault();
  getWeatherData(inputCity.value);
  inputCity.value = '';
};

inputBtn.addEventListener('click', (e) => handleLocationSearch(e));
