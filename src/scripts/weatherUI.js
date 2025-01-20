import getWeatherData from './weatherData';
import weatherIcons from './weatherIcons';
import { weatherDataUI } from './selectors';

const displayWeatherData = async (city) => {
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
      el.innerText = `${weatherData[key]} ${unit || ''}`;
    });
  } catch (err) {
    console.error(err);
  }
};

displayWeatherData('Manila');

export default displayWeatherData;
