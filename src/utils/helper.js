const _ = require('lodash');

const availabilityColor = (availability) => {
  switch (availability) {
    case 'INSTOCK':
      return 'success';
    case 'LESSTHAN10':
      return 'warning';
    case 'OUTOFSTOCK':
      return 'danger';
    default:
      return 'secondary';
  }
};

const availabilityText = (availability) => {
  switch (availability) {
    case 'INSTOCK':
      return 'IN STOCK';
    case 'LESSTHAN10':
      return 'LOW STOCK';
    case 'OUTOFSTOCK':
      return 'OUT OF STOCK';
    case 'LOADING':
      return 'LOADING';
    default:
      return 'AVAILABILITY UNKNOWN';
  }
};

const listManufacturers = (productData) => {
  const productsByManufacturer = _.groupBy(productData, (p) => p.manufacturer);
  const manufacturers = _.map(productsByManufacturer, (key, value) => value);
  return manufacturers;
};

const getAvailability = (payload) => {
  const plain = _.escape(payload);
  const tail = plain.slice(43);
  const info = tail.split('&')[0];
  return info;
};

// eslint-disable-next-line max-len
const cleanUpAvailability = (data) => data.map((item) => ({ id: item.id.toLowerCase(), availability: getAvailability(item.DATAPAYLOAD) }));

module.exports = {
  availabilityColor,
  availabilityText,
  listManufacturers,
  cleanUpAvailability,
};
