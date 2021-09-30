//  https://www.youtube.com/watch?v=MLTRHc5dk6s
const assert = require("assert");
// const dispalyHeader = require("../app.js").displayHeader;
// const addNumbers = require("../app.js").addNumbers;
const app = require("../app.js");

describe("Testing All functions", function () {
  it("Should return the string Basic Arithmetic", function () {
    //let result = dispalyHeader();
    let result = app.displayHeader();
    assert.strictEqual(result, "Basic Arithmetic");
  });

  it("Should return addition of two numbers", function () {
    //let result = dispalyHeader();
    let result = app.addnumbers(2, 4);
    assert.strictEqual(result, 6);
  });

  it("Should return multiplication of two numbers", function () {
    //let result = dispalyHeader();
    let result = app.multiplynumbers(2, 4);
    assert.strictEqual(result, 8);
  });

  it("Should return Division of two numbers", function () {
    //let result = dispalyHeader();
    let result = app.dividenumbers(8, 4);
    assert.strictEqual(result, 2);
  });

  it("Should return first element in array", function () {
    //let result = dispalyHeader();
    let arr = [8, 4, 9 , 0];
    let result = app.firstarray(arr);
    assert.equal(result, 8, 'firstarray([8, 4, 9 , 0]) is 8');
  });
});
