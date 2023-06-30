/* eslint-env mocha */
const {expect} = require('chai');
const {bubbleSort} = require('./bubbleSort');

/*
  You can find all options for chai assertions in the docs here: https://www.chaijs.com/api/bdd/
*/
describe('Bubble Sort', () => {
  it('has specs! here is an example of comparing arrays', () => {
    expect([1, 2, 3]).to.deep.equal([1, 2, 3]);
  });
});
