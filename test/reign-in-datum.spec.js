
const expect = require('chai').expect;

const { assertFuzzyEquals } = require('./helpers');
const { mean, variance } = require('../reign-in-datum');
const [ data_2015, data_2016 ] = require('../data/weather.json');

describe('mean function', () => {
  it('should find mean of london', () => {
    const result = assertFuzzyEquals(mean("London", data_2015), 51.199999999999996);
    expect(result).to.be.true;
  });

  it.skip('should find mean of beijing', () => {
    const result = assertFuzzyEquals(mean("Beijing", data_2015), 52.416666666666664);
    expect(result).to.be.true;
  });
});

describe.skip('variance function', () => {

});
