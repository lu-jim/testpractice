const stringLength = (string) => {
  if (string.length < 1) throw('String too short')
  else if (string.length > 10) throw('String too long');
  else return string.length;
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
}

module.exports = {stringLength, reverseString};
