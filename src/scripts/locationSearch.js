import displayWeatherData from './weatherUI';
import { inputCity, inputBtn } from './selectors';

const handleLocationSearch = async (e) => {
  e.preventDefault();
  if (!inputCity.value) return;
  await displayWeatherData(inputCity.value);
  inputCity.value = '';
};

inputBtn.addEventListener('click', (e) => handleLocationSearch(e));
