const randomNum = max => Math.floor(Math.random() * max);

const randomNums = size => {
  const numbers = new Set();
  while (numbers.size !== size) {
    numbers.add(randomNum(size));
  }
  return Array.from(numbers);
}

module.exports = {
    randomNums,
};