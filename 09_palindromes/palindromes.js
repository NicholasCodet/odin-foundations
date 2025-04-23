const palindromes = function (string) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => characters.includes(character))
    .join("");
  const reversedString = cleanedString.split("").reverse().join("");

  if (cleanedString === reversedString) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
