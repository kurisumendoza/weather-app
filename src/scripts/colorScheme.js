const getTimeOfDay = (timezone) => {
  const date = new Date().toLocaleString('en-US', { timeZone: timezone });
  const hours = new Date(date).getHours();

  if (hours >= 6 && hours <= 12) return 'morning';
  if (hours > 12 && hours <= 18) return 'afternoon';
  if (hours > 18 && hours <= 23) return 'evening';
  return 'night';
};

const changeColorScheme = (timezone) => {
  const timeOfDay = getTimeOfDay(timezone);

  document.documentElement.style.setProperty(
    '--current-time',
    `var(--${timeOfDay})`,
  );

  document.documentElement.style.setProperty(
    '--font-and-borders',
    `var(--${
      timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'light' : 'dark'
    }-mode)`,
  );
};

export default changeColorScheme;
