const { expect } = require("chai");
const { describe, it, beforeEach, afterEach } = require("mocha");
const NumbersValidator = require("../../src/numbers-validator");

describe("NumbersValidator", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("isNumberEven", () => {
    describe("positive tests", () => {
      it("should return true when provided an even number", () => {
        const validationResult = validator.isNumberEven(4);
        expect(validationResult).to.be.equal(true);
      });
    });

    describe("negative tests", () => {
      it("should return false when provided a non-even number", () => {
        const validationResult = validator.isNumberEven(5);
        expect(validationResult).to.be.equal(false);
      });

      it("should throw an error when provided a non-number value", () => {
        const input = "four";

        expect(() => validator.isNumberEven(input)).to.throw(
          `[${input}] is not of type "Number" it is of type "${typeof input}"`,
        );
      });
    });
  });

  describe("getEvenNumbersFromArray", () => {
    describe("positive tests", () => {
      it("should return an array containing only even numbers", () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = validator.getEvenNumbersFromArray(input);

        expect(result).to.deep.equal([2, 4, 6]);
      });

      it("should return an empty array when provided an empty array", () => {
        const result = validator.getEvenNumbersFromArray([]);

        expect(result).to.deep.equal([]);
      });

      it("should return an empty array when the array contains no even numbers", () => {
        const result = validator.getEvenNumbersFromArray([1, 3, 5, 7]);

        expect(result).to.deep.equal([]);
      });
    });

    describe("negative tests", () => {
      it("should throw an error when provided a non-array value", () => {
        const input = "123";

        expect(() => validator.getEvenNumbersFromArray(input)).to.throw(
          `[${input}] is not an array of "Numbers"`,
        );
      });

      it("should throw an error when the array contains non-number values", () => {
        const input = [1, 2, "three", 4];

        expect(() => validator.getEvenNumbersFromArray(input)).to.throw(
          `[${input}] is not an array of "Numbers"`,
        );
      });
    });
  });

  describe("isAllNumbers", () => {
    describe("positive tests", () => {
      it("should return true when all array elements are numbers", () => {
        const result = validator.isAllNumbers([1, 2, 3, 4]);

        expect(result).to.be.equal(true);
      });

      it("should return true when provided an empty array", () => {
        const result = validator.isAllNumbers([]);

        expect(result).to.be.equal(true);
      });
    });

    describe("negative tests", () => {
      it("should return false when at least one element is not a number", () => {
        const result = validator.isAllNumbers([1, 2, "three", 4]);

        expect(result).to.be.equal(false);
      });

      it("should throw an error when provided a non-array value", () => {
        const input = "123";

        expect(() => validator.isAllNumbers(input)).to.throw(
          `[${input}] is not an array`,
        );
      });
    });
  });

  describe("isInteger", () => {
    describe("positive tests", () => {
      it("should return true when provided an integer", () => {
        const result = validator.isInteger(10);

        expect(result).to.be.equal(true);
      });

      it("should return true when provided zero", () => {
        const result = validator.isInteger(0);

        expect(result).to.be.equal(true);
      });

      it("should return true when provided a negative integer", () => {
        const result = validator.isInteger(-5);

        expect(result).to.be.equal(true);
      });
    });

    describe("negative tests", () => {
      it("should return false when provided a decimal number", () => {
        const result = validator.isInteger(10.5);

        expect(result).to.be.equal(false);
      });

      it("should throw an error when provided a non-number value", () => {
        const input = "ten";

        expect(() => validator.isInteger(input)).to.throw(
          `[${input}] is not a number`,
        );
      });
    });
  });
});
