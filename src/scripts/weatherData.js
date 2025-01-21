import fetchWeatherData from './weatherAPI';

const getWeatherData = async (city) => {
  try {
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
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default getWeatherData;
