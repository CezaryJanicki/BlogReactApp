//implement first letter of string to be capitalized

export const capitalizeFirstLetter = (string) => {
  const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalized;
};