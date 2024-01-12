'use server'
import axios from 'axios';

const getMethod = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error getMethod data:', error.message);
    return '';
  }
};

const postMethod = async (url, postData) => {
  try {
    const response = await axios.post(url, postData);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error postMethod data:', error.message);
    throw error;
  }
};



export {getMethod,postMethod};
