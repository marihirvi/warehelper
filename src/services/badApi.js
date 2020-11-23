import axios from 'axios';
import _ from 'lodash';
import { cleanUpAvailability } from '../utils/helper';

const baseUrl = 'https://bad-api-assignment.reaktor.com';

// products

const getProducts = async (category) => {
  const request = await axios.get(`${baseUrl}/products/${category}`, {
    headers: {
      'Cache-Control': 'max-age=300',
    },
  });
  return request.data;
};

const getAllProducts = async (categories) => {
  try {
    const promises = await categories.map(async (category) => getProducts(category));
    const productsByCategory = await Promise.all(promises);
    return _.flatten(productsByCategory);
  } catch (error) {
    return [];
  }
};

// availability

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

const getAllAvailabilities = async (manufacturers) => {
  try {
    const promises = await manufacturers.map(async (manufacturer) => getAvailability(manufacturer));
    const availabilityData = await Promise.all(promises);
    const allAvailabilities = _.flatten(availabilityData.map((item) => item.response));
    return cleanUpAvailability(allAvailabilities);
  } catch (error) {
    return [];
  }
};

export default { getAllAvailabilities, getAllProducts };
