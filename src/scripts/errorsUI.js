import { toggleElement } from './helpers';
import { weatherDataUI } from './selectors';

const renderError = (message, icon) => {
  toggleElement(weatherDataUI.container, 'none');
  toggleElement(weatherDataUI.errorDisplay, 'block');
  weatherDataUI.errorIcon.src = icon;
  weatherDataUI.errorMessage.innerText = message;
};

export default renderError;
