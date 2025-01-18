import fetchWeatherData from './weatherAPI';

const getWeatherData = async (city) => {
  try {
    const rawWeatherData = await fetchWeatherData(city);

    const {
      resolvedAddress: location,
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

    const weatherData = {
      location,
      condition,
      icon,
      sunrise,
      sunset,
      temp,
      humidity,
      precip,
      windspeed,
    };

    console.log(weatherData.location);
    return weatherData;
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
};

getWeatherData('Manila');

export default getWeatherData;
