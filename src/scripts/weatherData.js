import fetchWeatherData from './weatherAPI';

const getWeatherData = async (city) => {
  const response = await fetchWeatherData(city);
  console.log(response.location, response.condition);
};

getWeatherData('Manila');

export default getWeatherData;
