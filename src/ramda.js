const R = require("ramda");
const Util = require("./utilities");

const generate = () => {
  return R.compose(
    R.reduce(
      (total, _, i) => {
        return {
          gridA: [...total.gridA, Util.mapColor(sideA, i)],
          gridB: [...total.gridB, Util.mapColor(sideB, i)]
        };
      },
      { gridA: [], gridB: [] }
    ),
    R.pipe(sideA => {
      return {
        sideA: {
          ...sideA
        },
        sideB: {
          green: [
            ...R.slice(0, 3, sideA.green),
            ...R.slice(0, 1, sideA.black),
            ...R.slice(0, 5, sideA.white)
          ],
          black: [
            ...R.slice(3, 4, sideA.green),
            ...R.slice(1, 2, sideA.black),
            ...R.slice(5, 6, sideA.white)
          ],
          white: [
            ...R.slice(4, 9, sideA.green),
            ...R.slice(2, 3, sideA.black),
            ...R.slice(6, Infinity, sideA.white)
          ]
        }
      };
    }),
    R.pipe(nums => {
      return {
        green: R.slice(0, 9, nums),
        black: R.slice(9, 12, nums),
        white: R.slice(13, Infinity, nums)
      };
    })
  )(Util.randomNums(25));
};

module.exports = { generate };
