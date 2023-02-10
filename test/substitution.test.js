// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it(" should return “ykrrpik” if  substitution will get argument “message”, “plmoknijbuhvygctfxrdzeswaq” ", () => {
   
    const actual =   substitution("message","plmoknijbuhvygctfxrdzeswaq",  encode = true);
     const expected = "ykrrpik";
    expect(actual).equal(expected)
  
  });
});


