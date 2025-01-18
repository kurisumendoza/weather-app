import displayWeatherData from './weatherUI';
import { inputCity, inputBtn } from './selectors';

const handleLocationSearch = async (e) => {
  e.preventDefault();
  try {
    await displayWeatherData(inputCity.value);
    inputCity.value = '';
  } catch (err) {
    console.error(err);
  }
};

inputBtn.addEventListener('click', (e) => handleLocationSearch(e));
