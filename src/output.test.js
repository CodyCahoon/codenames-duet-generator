const vanilla = require("./vanilla");
const ramda = require("./ramda");

describe("tests", () => {
  let output1, output2;
  const filterByColor = (grid, color) => grid.filter(t => t === color);
  const getIndicesOfColor = (grid, color) => {
    return grid.map((t, i) => (t === color ? i : null)).filter(Boolean);
  };

  beforeEach(() => {
    output1 = vanilla.generate();
    output2 = ramda.generate();
  });

  describe('should create 9 green tiles per grid', () => {
    it('- vanilla', () => {
      const { gridA, gridB } = output1;

      expect(filterByColor(gridA, "g").length).toBe(9);
      expect(filterByColor(gridB, "g").length).toBe(9);
    });

    it('- ramda', () => {
      const { gridA, gridB } = output2;

      expect(filterByColor(gridA, "g").length).toBe(9);
      expect(filterByColor(gridB, "g").length).toBe(9);
    });
  });

  it("should create 3 black tiles per grid", () => {
    const { gridA, gridB } = output1;

    expect(filterByColor(gridA, "x").length).toBe(3);
    expect(filterByColor(gridB, "x").length).toBe(3);
  });

  it("should create 13 white tiles per grid", () => {
    const { gridA, gridB } = output1;

    expect(filterByColor(gridA, "-").length).toBe(13);
    expect(filterByColor(gridB, "-").length).toBe(13);
  });

  it("should have 3 green tiles in common", () => {
    const { gridA, gridB } = output1;

    const greenTileIndicesA = getIndicesOfColor(gridA, "g");
    const greenTileIndicesB = getIndicesOfColor(gridB, "g");

    const greenToGreenA = greenTileIndicesA.filter(t =>
      greenTileIndicesB.includes(t)
    );
    const greenToGreenB = greenTileIndicesB.filter(t =>
      greenTileIndicesA.includes(t)
    );

    expect(greenToGreenA.length).toBe(3);
    expect(greenToGreenB.length).toBe(3);
  });

  it("should have 1 black tile that is black on the other side", () => {
    const { gridA, gridB } = output1;

    const blackTileIndicesA = getIndicesOfColor(gridA, "x");
    const blackTileIndicesB = getIndicesOfColor(gridB, "x");

    const blackToBlackA = blackTileIndicesA.filter(t =>
      blackTileIndicesB.includes(t)
    );
    const blackToBlackB = blackTileIndicesB.filter(t =>
      blackTileIndicesA.includes(t)
    );

    expect(blackToBlackA.length).toBe(1);
    expect(blackToBlackB.length).toBe(1);
  });

  it("should have 1 black tile that is green on the other side", () => {
    const { gridA, gridB } = output1;

    const blackTileIndicesA = getIndicesOfColor(gridA, "x");
    const greenTileIndicesA = getIndicesOfColor(gridA, "g");
    const blackTileIndicesB = getIndicesOfColor(gridB, "x");
    const greenTileIndicesB = getIndicesOfColor(gridB, "g");

    const blackToGreenA = blackTileIndicesA.filter(t =>
      greenTileIndicesB.includes(t)
    );
    const blackToGreenB = blackTileIndicesB.filter(t =>
      greenTileIndicesA.includes(t)
    );

    expect(blackToGreenA.length).toBe(1);
    expect(blackToGreenB.length).toBe(1);
  });

  it("should have 1 black tile that is white on the other side", () => {
    const { gridA, gridB } = output1;

    const blackTileIndicesA = getIndicesOfColor(gridA, "x");
    const whiteTileIndicesA = getIndicesOfColor(gridA, "-");
    const blackTileIndicesB = getIndicesOfColor(gridB, "x");
    const whiteTileIndicesB = getIndicesOfColor(gridB, "-");

    const blackToWhiteA = blackTileIndicesA.filter(t =>
      whiteTileIndicesB.includes(t)
    );
    const blackToWhiteB = blackTileIndicesB.filter(t =>
      whiteTileIndicesA.includes(t)
    );

    expect(blackToWhiteA.length).toBe(1);
    expect(blackToWhiteB.length).toBe(1);
  });
});
