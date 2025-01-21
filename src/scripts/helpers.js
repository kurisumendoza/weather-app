const errors = {
  noInternet: 'No internet connection!',
  cityNotFound: 'City not found!',
};

const toggleElement = (el, display) => {
  const element = el;
  element.style.display = display;
};

export { errors, toggleElement };
