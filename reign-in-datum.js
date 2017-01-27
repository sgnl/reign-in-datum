
const pluckCityData = (city, [_, [ collection ] ] = data) => {
  return collection.split('\n').filter(cityData => {
    return cityData.split(':')[0] === city;
  })
  .map(city => city.split(':')[1])[0]
  .split(',')
  .map(month => parseFloat(month.split(' ')[1]));
};

const wrapper = (fn) => (city, data) => fn(city, pluckCityData(city, data));

const mean = (city, data) => {
  return data.reduce((store, val) => store + val, 0) / data.length;
};

const variance = (city, data) => {

};

module.exports = {
  mean: wrapper(mean),
  variance: wrapper(variance),
  pluckCityData
};
