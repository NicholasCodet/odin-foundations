const removeFromArray = function (arr, ...arg) {
  return arr.filter((item) => !arg.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
