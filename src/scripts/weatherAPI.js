const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=JKGN7CSFMAF2M6X9W97ETTSYR&contentType=json`,
      { mode: 'cors' },
    );
    return await response.json();
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
};

export default fetchWeatherData;
