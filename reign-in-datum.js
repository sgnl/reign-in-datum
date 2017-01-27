
'use strict';

/**
 * Helper wrapping function
 * prepares data for easier use
 *
 * @param Function stores function away to be called at a later time
 * @return Function this is the 'wrapper'
 */
const wrapper = (fn) => (city, data) => fn(city, pluckCityData(city, data));

/**
 * Gives back all values found for a city within data
 *
 * @param  String   city         e.g. "London", "Beijing", ...
 * @param  String   year         unused, _ is a placeholder
 * @param  String   collection   long list of data, gross!
 * @return Array    an array of Number values
 */
const pluckCityData = (city, [_, [ collection ] ] = data) => {
  return collection.split('\n')
    .filter(cityData => {
      return cityData.split(':')[0] === city;
    })
    .map(city => city.split(':')[1])[0]
    .split(',')
    .map(month => parseFloat(month.split(' ')[1]));
};

/**
 * returns the mean temperatures for a given city
 *
 * @param  String   city  e.g. "London", "Beijing", ...
 * @param  Array    data  e.g. [1, 2, 3, 4, ...]
 * @return Number   mean  temperature value
 */
const mean = (city, data) => {
  return data.reduce((store, val) => store + val, 0) / data.length;
};

/**
 * returns the variance of temperatures for a given city
 *
 * @param  String   city  e.g. "London", "Beijing", ...
 * @param  Array    data  e.g. [1, 2, 3, 4, ...]
 * @return Number   mean  temperature value
 */
const variance = (city, data) => {
  const cityMean = mean(city, data);
  const variance = data.map(val => (val - cityMean) * (val - cityMean));
  return variance.reduce((store, val) => store + val, 0) / variance.length;
};

module.exports = {
  mean: wrapper(mean),
  variance: wrapper(variance),
  pluckCityData
};
