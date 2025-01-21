import { toggleElement } from './helpers';
import { loader, weatherDataUI } from './selectors';

const renderError = (message, icon) => {
  toggleElement(weatherDataUI.container, 'none');
  toggleElement(loader, '');
  toggleElement(weatherDataUI.errorDisplay, 'block');
  weatherDataUI.errorIcon.src = icon;
  weatherDataUI.errorMessage.innerText = message;
};

export default renderError;
