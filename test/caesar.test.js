// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() ", () => {
  it("should return false if the shift amount is 0", () => {
    const message = "zebra magazine";
    const shift = 0;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });
});

describe("caesar() ", () => {
  it("Spaces should be maintained throughout, as should other nonalphabetic symbols.", () => {
    const message = "a b";
    const shift = 1;
    const actual = caesar(message, shift);
    const expected = "b c";
    expect(actual).to.equal(expected);
  });
});

describe("caesar() ", () => {
  it("Capital letters can be ignored..", () => {
    const message = "aB";
    const shift = 1;
    const actual = caesar(message, shift);
    const expected = "bc";
    expect(actual).to.equal(expected);
  });
});

describe("caesar() ", () => {
  it("If a letter is shifted so that it goes off the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).", () => {
    const message = "zzz";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "ccc";
    expect(actual).to.equal(expected);
  });
});
