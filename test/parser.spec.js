const fs = require("fs");
const parser = require("../src/parser");

describe("parser", () => {
  it("should parse weight api", () => {
    const rawWeight = fs.readFileSync("./test/weightFixtureRaw.txt", {
      encoding: "utf8"
    });
    const jsonWeight = require("./weightFixtureParsed.json");
    expect(parser.weight(rawWeight)).toEqual(jsonWeight);
  });

  it("should parse fat api", () => {
    const rawFat = fs.readFileSync("./test/fatFixtureRaw.txt", {
      encoding: "utf8"
    });
    const jsonFat = require("./fatFixtureParsed.json");
    expect(parser.fat(rawFat)).toEqual(jsonFat);
  });
});
