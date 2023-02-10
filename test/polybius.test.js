// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() ", () => {
  it("should refer to the inputted text to be encoded ", () => {
   
   
    const actual = polybius("thinkful", encode = true);
  const expected ="4432423352125413"
    expect(actual).to.equal(expected);
  });
});

describe("polybius() ", () => {
  it("should refer to the inputted text to be  decoded", () => {
//     const input = "thinkful";
//      let encode = false;
   
    const actual = polybius("4432423352125413", encode = false);
  const expected ="th(i/j)nkful"
    expect(actual).to.equal(expected);
  });
});

describe("polybius() ", () => {
  it("should refer to the inputted text to be encoded ", () => {
   
   
    const actual = polybius("Hello world", encode = true);
  const expected ="3251131343 2543241341"
    expect(actual).to.equal(expected);
  });
});

describe("polybius() ", () => {
  it("should refer to the inputted text to be encoded ", () => {
   
   
    const actual = polybius('message', encode = true);
  const expected ="23513434112251"
    expect(actual).to.equal(expected);
  });
});



describe("polybius() ", () => {
  it("should refer to the inputted text to be  decoded", () => {
//     const input = "thinkful";
//      let encode = false;
   
    const actual = polybius("3251131343 2543241341", encode = false);
  const expected ="hello world"
    expect(actual).to.equal(expected);
  });
});

