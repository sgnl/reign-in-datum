
const expect = require('chai').expect;

const { assertFuzzyEquals } = require('./helpers');
const { mean, variance } = require('../reign-in-datum');
const { weather_data } = require('../data/weather.json');

describe('mean function', () => {
  it('should find mean of london', () => {
    const result = assertFuzzyEquals(mean("London", weather_data), 51.199999999999996);
    expect(result).to.be.true;
  });

  it('should find mean of beijing', () => {
    const result = assertFuzzyEquals(mean("Beijing", weather_data), 52.416666666666664);
    expect(result).to.be.true;
  });
});

describe('variance function', () => {

});
