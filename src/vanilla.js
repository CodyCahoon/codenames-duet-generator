const Util = require("./utilities");

const tiles = Util.randomNums(25);

const sideA = {
  greenTiles: tiles.slice(0, 9),
  blackTiles: tiles.slice(9, 12),
  whiteTiles: tiles.slice(13)
};

const sideB = {
  greenTiles: [
    ...sideA.greenTiles.slice(0, 3),
    ...sideA.blackTiles.slice(0, 1), 
    ...sideA.whiteTiles.slice(0, 5),
  ],
  blackTiles: [
    ...sideA.greenTiles.slice(3, 4),
    ...sideA.blackTiles.slice(1, 2),
    ...sideA.whiteTiles.slice(5, 6),
  ],
  whiteTiles: [
    ...sideA.greenTiles.slice(4, 9),
    ...sideA.blackTiles.slice(2, 3),
    ...sideA.whiteTiles.slice(6, 13),
  ]
};

const mapColor = (side, i) => {
  if (side.blackTiles.includes(i)) {
    return "x";
  }
  if (side.greenTiles.includes(i)) {
    return "g";
  }
  return "-";
};

const generate = () =>
  new Array(25).fill(null).reduce(
    (total, _, i) => {
      return {
        gridA: [...total.gridA, mapColor(sideA, i)],
        gridB: [...total.gridB, mapColor(sideB, i)],
      };
    },
    { gridA: [], gridB: [] }
  );

module.exports = { generate };
