const vanilla = require("./vanilla");

const arguments = process.argv.slice(2);

const generateFn =
  arguments.length === 1 && arguments[0] === "--ramda"
    ? vanilla.generate
    : vanilla.generate;

const { gridA, gridB } = generateFn();
console.log("Side A: " + gridA.join(""));
console.log("Side B: " + gridB.join(""));
