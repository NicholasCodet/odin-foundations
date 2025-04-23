const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();

  return arr.reduce((oldest, person) => {
    const deathYear = person.yearOfDeath ?? currentYear;
    const age = deathYear - person.yearOfBirth;

    const oldestDeathYear = oldest.yearOfDeath ?? currentYear;
    const oldestAge = oldestDeathYear - oldest.yearOfBirth;

    return age > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
