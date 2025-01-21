const inputCity = document.querySelector('input[type=text]');
const inputBtn = document.querySelector('input[type=submit]');

const weatherDataUI = {
  container: document.querySelector('.weather-display'),
  icon: document.querySelector('.icon'),
  location: document.querySelector('.location'),
  temp: document.querySelector('.temp'),
  condition: document.querySelector('.condition'),
  sunrise: document.querySelector('.sunrise'),
  sunriseIcon: document.querySelector('.sunrise-icon'),
  sunset: document.querySelector('.sunset'),
  sunsetIcon: document.querySelector('.sunset-icon'),
  humidity: document.querySelector('.humidity'),
  humidityIcon: document.querySelector('.humidity-icon'),
  precip: document.querySelector('.precip'),
  precipIcon: document.querySelector('.precip-icon'),
  windspeed: document.querySelector('.windspeed'),
  windspeedIcon: document.querySelector('.windspeed-icon'),
  errorDisplay: document.querySelector('.error-display'),
  errorIcon: document.querySelector('.error-icon'),
  errorMessage: document.querySelector('.error-message'),
};

export { inputCity, inputBtn, weatherDataUI };
