import numbers from "./app/index.js"
import CodersArrays from "../CodersArray.js";

describe("Given a Length function that mocks the JS length property", () => {
  describe("When it receives a list of 4 numbers", () => {
    test("Then should return the result 4", () => {
      const expectedResult = 4;

      const numberLength = numbers.length;

      expect(numberLength).toBe(expectedResult);
    });
  });
});
