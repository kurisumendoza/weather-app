import displayWeatherData from './weatherUI';
import { inputCity, inputBtn } from './selectors';

const handleLocationSearch = async (e) => {
  e.preventDefault();
  if (!inputCity.value) return;
  const formatInput = inputCity.value
    .trim()
    .split(' ')
    .reduce(
      (formattedName, word, index) =>
        formattedName +
        word.at(0).toUpperCase() +
        word.slice(1).toLowerCase() +
        (index >= 0 ? ' ' : ''),
      '',
    )
    .trim();
  await displayWeatherData(formatInput);
  inputCity.value = '';
};

inputBtn.addEventListener('click', (e) => handleLocationSearch(e));
