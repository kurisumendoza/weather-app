import { errors } from './helpers';

const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&iconSet=icons2&key=JKGN7CSFMAF2M6X9W97ETTSYR&contentType=json`,
      { mode: 'cors' },
    );

    if (!response.ok) throw new Error(errors.cityNotFound);

    return await response.json();
  } catch (err) {
    if (err instanceof TypeError) throw new Error(errors.noInternet);
    throw err;
  }
};

export default fetchWeatherData;
