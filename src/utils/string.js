export const capitalizeFirstLetter = (string) => (
  typeof string === 'string'
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : ''
);
