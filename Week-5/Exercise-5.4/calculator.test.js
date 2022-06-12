const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("addition 1 + 2 should return 3", () => {
    expect(mathOperations.add(1, 2)).toBe(3);
  });
});

describe("Calculator tests", () => {
  test("subtraction 2 - 2 should return 0", () => {
    expect(mathOperations.sub(2, 2)).toBe(0);
  });
});

describe("Calculator tests", () => {
  test("multiplication 2 * 2 should return 4", () => {
    expect(mathOperations.multi(2, 2)).toBe(4);
  });
});
