const capitalize = (string) => {
  let capitalized = string.split('');
  capitalized[0] = capitalized[0].toUpperCase();
  return capitalized.join('');
};

module.exports = { capitalize };
