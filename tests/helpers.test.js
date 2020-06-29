const help = require('./helpers.js');

describe("helpers module", () => {
  describe("sum function", () => {
    it("can add two numbers", () => {
      const expectedOutput = 7;
      const actualOutput = help.sum(2, 5);
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});
