const repeatString = function (content, times) {
  let string = "";
  if (times < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < times; i++) {
      string += content;
    }
    return string;
  }
};

// Do not edit below this line
module.exports = repeatString;
