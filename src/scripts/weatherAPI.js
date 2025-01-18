const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=JKGN7CSFMAF2M6X9W97ETTSYR&contentType=json`,
      { mode: 'cors' },
    );

    const rawWeatherData = await response.json();

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

    return {
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
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
};

export default fetchWeatherData;
