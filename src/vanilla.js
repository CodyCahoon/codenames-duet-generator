const Util = require("./utilities");

const tiles = Util.randomNums(25);

const sideA = {
  green: tiles.slice(0, 9),
  black: tiles.slice(9, 12),
  white: tiles.slice(13)
};

const sideB = {
  green: [
    ...sideA.green.slice(0, 3),
    ...sideA.black.slice(0, 1), 
    ...sideA.white.slice(0, 5),
  ],
  black: [
    ...sideA.green.slice(3, 4),
    ...sideA.black.slice(1, 2),
    ...sideA.white.slice(5, 6),
  ],
  white: [
    ...sideA.green.slice(4, 9),
    ...sideA.black.slice(2, 3),
    ...sideA.white.slice(6, 13),
  ]
};

const generate = () =>
  new Array(25).fill(null).reduce(
    (total, _, i) => {
      return {
        gridA: [...total.gridA, Util.mapColor(sideA, i)],
        gridB: [...total.gridB, Util.mapColor(sideB, i)],
      };
    },
    { gridA: [], gridB: [] }
  );

module.exports = { generate };
