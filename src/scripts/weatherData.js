import fetchWeatherData from './weatherAPI';

const getWeatherData = async (city) => {
  const rawWeatherData = await fetchWeatherData(city);

  const {
    address: location,
    timezone,
    currentConditions: {
      conditions: condition,
      icon,
      sunrise,
      sunset,
      temp,
      humidity,
      precip,
      windspeed,
    },
  } = rawWeatherData;

  return {
    location,
    timezone,
    condition,
    icon,
    sunrise,
    sunset,
    temp,
    humidity,
    precip,
    windspeed,
  };
};

export default getWeatherData;
