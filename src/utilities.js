const randomNum = max => Math.floor(Math.random() * max);

const randomNums = size => {
  const numbers = new Set();
  while (numbers.size !== size) {
    numbers.add(randomNum(size));
  }
  return Array.from(numbers);
};

const mapColor = (side, i) => {
  if (side.black.includes(i)) {
    return "x";
  }
  if (side.green.includes(i)) {
    return "g";
  }
  return "-";
};

module.exports = {
  mapColor,
  randomNums
};
