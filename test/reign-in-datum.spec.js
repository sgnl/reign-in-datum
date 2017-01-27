
const expect = require('chai').expect;

const { assertFuzzyEquals } = require('./helpers');
const { mean, variance, pluckCityData } = require('../reign-in-datum');
const [ data_2015, data_2016 ] = require('../data/weather.json');

describe('pluckCityData helper function', () => {
  it('should return an array of numbers when given weather data string', () => {
    const result = pluckCityData('London', data_2015);
    expect(result).to.include.members([ 48, 38.9, 39.9, 42.2, 47.3, 52.1, 59.5, 57.2, 55.4, 62, 59, 52.9 ]);
  });
});

describe.skip('mean function', () => {
  it('should find mean of london', () => {
    const result = assertFuzzyEquals(mean('London', data_2015), 51.199999999999996);
    expect(result).to.be.true;
  });

  it('should find mean of beijing', () => {
    const result = assertFuzzyEquals(mean('Beijing', data_2015), 52.416666666666664);
    expect(result).to.be.true;
  });
});

describe.skip('variance function', () => {

});
