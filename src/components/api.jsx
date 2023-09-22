import axios from 'axios';

const API_URL = 'https://6492c7dd428c3d2035d0ab50.mockapi.io/adverts';

export const fetchCars = async (params) => {
  try {
    const response = await axios.get(API_URL, { params });
    if (response.data && typeof response.data === 'object') {
      return response.data;
    } else {
      console.error('Response is not valid JSON:', response.data);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};