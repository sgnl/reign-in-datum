
const pluckCityData = (city, [_, [ collection ] ] = data) => {
  return collection.split('\n').filter(cityData => {
    return cityData.split(':')[0] === city;
  })
  .map(city => city.split(':')[1])[0]
  .split(',')
  .map(month => parseFloat(month.split(' ')[1]));
};

const mean = (city, data) => {

};

const variance = (city, data) => {

};

module.exports = { mean, variance, pluckCityData };
