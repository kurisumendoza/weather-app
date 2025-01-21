import getWeatherData from './weatherData';
import renderError from './errorsUI';
import weatherIcons from './weatherIcons';
import { errors, toggleElement } from './helpers';
import { loader, weatherDataUI } from './selectors';
import changeColorScheme from './colorScheme';

const displayWeatherData = async (city) => {
  toggleElement(loader, 'inline-block');
  toggleElement(weatherDataUI.errorDisplay, '');
  toggleElement(weatherDataUI.container, 'none');

  try {
    const weatherData = await getWeatherData(city);

    const weatherDataKeys = [
      { key: 'location', element: weatherDataUI.location },
      { key: 'temp', element: weatherDataUI.temp, unit: '°C' },
      { key: 'condition', element: weatherDataUI.condition },
      { key: 'sunrise', element: weatherDataUI.sunrise },
      { key: 'sunset', element: weatherDataUI.sunset },
      { key: 'humidity', element: weatherDataUI.humidity, unit: '%' },
      { key: 'precip', element: weatherDataUI.precip, unit: 'mm' },
      { key: 'windspeed', element: weatherDataUI.windspeed, unit: 'kph' },
    ];

    weatherDataUI.icon.src = weatherIcons[weatherData.icon];

    weatherDataUI.sunriseIcon.src = weatherIcons.sunrise;
    weatherDataUI.sunsetIcon.src = weatherIcons.sunset;
    weatherDataUI.humidityIcon.src = weatherIcons.humidity;
    weatherDataUI.precipIcon.src = weatherIcons.precipitation;
    weatherDataUI.windspeedIcon.src = weatherIcons.windspeed;

    weatherDataKeys.forEach(({ key, element, unit }) => {
      const el = element;
      el.innerText = `${weatherData[key] || 0} ${unit || ''}`;
    });

    changeColorScheme(weatherData.timezone);

    toggleElement(loader, '');
    toggleElement(weatherDataUI.container, '');
  } catch (err) {
    if (err.message === errors.cityNotFound)
      renderError(err.message, weatherIcons.notFound);
    if (err.message === errors.noInternet) renderError(err.message);
  }
};

displayWeatherData('Manila');

export default displayWeatherData;
