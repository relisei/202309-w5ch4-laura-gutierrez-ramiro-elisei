import CodersArray from "./CodersArray"

describe("Given a push method", () => {
  describe("When you receive an instance of CodersArray with the numbers 3, 8, 10, 2 and push the number 1}", () => {
    test("You should receive numbers: [3, 8, 10, 2, 1]", () => {
      const numbers = new CodersArray(3, 8, 10, 2);
      numbers.push(1);
      const expectedProduct = { numbers: [3, 8, 10, 2, 1] };

      expect(numbers).toEqual(expectedProduct);
    });
  });
});

 
