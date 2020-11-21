import axios from 'axios';
import _ from 'lodash';
import helper from '../utils/helper';

const baseUrl = 'https://bad-api-assignment.reaktor.com';

const getProducts = async (category) => {
  const request = await axios.get(`${baseUrl}/products/${category}`, {
    headers: {
      'Cache-Control': 'max-age=300',
    },
  });
  return request.data;
};

const getAvailability = async (manufacturer) => {
  const request = await axios.get(`${baseUrl}/availability/${manufacturer}`, {
    headers: {
      'Cache-Control': 'max-age=300',
    },
  });
  if (request.data.response.length > 2) {
    return request.data;
  }
  return getAvailability(manufacturer);
};

const getAllProducts = async (categories) => {
  const promises = await categories.map(async (category) => getProducts(category));

  const productsByCategory = await Promise.all(promises);
  return _.flatten(productsByCategory);
};

const getAllAvailabilities = async (manufacturers) => {
  const promises = await manufacturers.map(async (manufacturer) => getAvailability(manufacturer));

  const availabilityData = await Promise.all(promises);
  const allAvailabilities = _.flatten(availabilityData.map((item) => item.response));
  const cleanAvailabilityData = helper.cleanUpAvailability(allAvailabilities);
  return cleanAvailabilityData;
};

export default { getAllAvailabilities, getAllProducts };
